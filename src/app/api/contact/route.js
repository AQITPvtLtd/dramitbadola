import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "@/helper/db";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const fullname = formData.get("fullname");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const location = formData.get("location");
        const message = formData.get("message");
        const MedicalReport = formData.get("MedicalReport");

        const unique_id = uuid();

        let medicalReportBuffer = null;
        let medicalReportName = null;

        if (MedicalReport) {
            const arrayBuffer = await MedicalReport.arrayBuffer();
            medicalReportBuffer = Buffer.from(arrayBuffer); // Convert to Buffer
            medicalReportName = MedicalReport.name; // Extract filename
        }

        // ✅ Insert into Database
        await pool.execute(
            "INSERT INTO contact (date, id, fullname, phone, email, location, message, MedicalReport) VALUES(NOW(), ?,?,?,?,?,?,?)",
            [unique_id, fullname, phone, email, location, message, medicalReportName] // Store filename, NOT buffer
        );

        // ✅ Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        // ✅ Admin Email with Attachment
        const mailOptionsAdmin = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: "Dr. Amit Badola - Contact Form",
            html: `
            <html>
              <body>
                <h3>You've got a new mail from ${fullname}, their email is: ✉️${email}, phone number is ${phone}, and location is ${location}</h3>
                <p>Message:</p>
                <p>${message}</p>
              </body>
            </html>`,
            attachments: medicalReportBuffer
                ? [
                    {
                        filename: medicalReportName,
                        content: medicalReportBuffer, // Attach buffer content
                    },
                ]
                : [],
        };

        // ✅ Send Email to Admin
        await transporter.sendMail(mailOptionsAdmin);

        // ✅ User Confirmation Email
        const mailOptionsUser = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: "Thank You for contacting Dr. Amit Badola",
            html: `<html>
            <body>
              <h2>Hey ${fullname}!</h2>
              <p>Thank you for reaching out to Dr. Amit Badola. Your query has been noted, and our team will contact you at the earliest.</p>
            </body>
           </html>`,
        };

        // ✅ Send Email to User
        await transporter.sendMail(mailOptionsUser);

        return NextResponse.json({
            message: "Message Sent",
            success: true,
        });
    } catch (error) {
        console.error("Error details:", error);
        return NextResponse.json({
            message: "Failed to send query",
            success: false,
        });
    }
}
