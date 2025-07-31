"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Multiple = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/multiple-myeloma.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="multiple-myeloma"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Multiple Myeloma: Symptoms, Causes, Diagnosis, and Treatment
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Multiple Myeloma is a type of blood cancer that develops in the plasma cells — a kind of white blood cell found in the bone marrow. These cells play a vital role in your immune system by producing antibodies that help fight infections. However, in multiple myeloma, abnormal plasma cells multiply uncontrollably, crowding out healthy cells and disrupting normal blood production.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Although it is less common than other types of blood cancer, multiple myeloma can significantly impact a person’s quality of life. Fortunately, with advancements in early diagnosis and modern treatment options, managing the disease has become more effective.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                In this article, we’ll take a deep dive into what multiple myeloma is, its symptoms, risk factors, diagnostic procedures, and the various treatment approaches available.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Is Multiple Myeloma?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Multiple myeloma is a cancer that originates in plasma cells — a type of white blood cell made in the bone marrow. Under normal circumstances, plasma cells help produce antibodies (immunoglobulins) to fight infections. In people with multiple myeloma, these cells become cancerous and start producing abnormal proteins called monoclonal proteins (or M-proteins).</p>
                            <p className='text-gray-700 text-base lg:text-justify'>As these cancerous cells accumulate, they interfere with the normal production of red blood cells, white blood cells, and platelets, leading to anemia, immune deficiencies, and clotting issues. The buildup of M-proteins can also damage the kidneys and weaken the bones.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Multiple myeloma is typically considered a chronic condition that requires long-term management. While it is not yet curable, many patients live long and active lives with appropriate treatment.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Common Symptoms of Multiple Myeloma
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Multiple myeloma can be difficult to detect in its early stages because symptoms may be mild or vague. However, as the disease progresses, several signs may become apparent:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Bone Pain:</strong> Often felt in the back, ribs, hips, or skull. Bone pain is the most common symptom and results from bone weakening and lesions caused by the cancer.</li>
                                <li><strong>Fatigue and Weakness:</strong> As myeloma cells crowd out healthy red blood cells, anemia develops, leading to persistent fatigue and general weakness.</li>
                                <li><strong>Frequent Infections:</strong> Abnormal plasma cells do not produce functional antibodies, leaving the body more vulnerable to infections, especially respiratory and urinary tract infections.</li>
                                <li><strong>Unexplained Weight Loss:</strong> Sudden, unintentional weight loss may occur as the body tries to fight the disease.</li>
                                <li><strong>Kidney Problems:</strong> High levels of M-proteins can damage the kidneys, leading to reduced kidney function or even kidney failure in severe cases.</li>
                                <li><strong>High Blood Calcium Levels (Hypercalcemia): </strong> When bones break down, calcium is released into the blood, which can cause symptoms like nausea, vomiting, confusion, constipation, and thirst.</li>
                                <li><strong>Numbness or Tingling: </strong>Nerve damage or spinal compression from weakened bones may lead to a tingling sensation in the arms or legs.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>If you or a loved one is experiencing these symptoms persistently, it's crucial to seek medical attention for proper diagnosis and timely intervention.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Multiple Myeloma?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>The exact cause of multiple myeloma remains unknown, but researchers believe that certain genetic and environmental factors play a role. Risk factors that may increase the likelihood of developing multiple myeloma include:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Age:</strong> Most cases occur in people over 60.</li>
                                <li><strong>Gender:</strong>Men are slightly more likely to develop multiple myeloma than women.</li>
                                <li><strong>Race:</strong> African-Americans have a higher risk compared to other ethnic groups.</li>
                                <li><strong>Family History:</strong> Having a close relative with multiple myeloma or another plasma cell disorder increases risk.</li>
                                <li><strong>Obesity:</strong> Excess body weight may increase the risk of developing the disease.</li>
                                <li><strong>Exposure to Radiation or Chemicals:</strong> Long-term exposure to herbicides, insecticides, or petroleum products may be a contributing factor.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>It's important to remember that having one or more of these risk factors doesn’t mean a person will definitely develop multiple myeloma — it only raises the risk.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is Multiple Myeloma Diagnosed?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Diagnosing multiple myeloma involves a combination of clinical evaluations, blood and urine tests, imaging studies, and bone marrow analysis. Here’s a look at the most common diagnostic methods:</p>

                            <p className='text-gray-700 text-base lg:text-justify font-bold'>Blood Tests</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Complete Blood Count (CBC):</strong> To detect anemia or low platelet levels.</li>
                                <li><strong>Serum Protein Electrophoresis (SPEP):</strong> Identifies M-protein levels in the blood.</li>
                                <li><strong>Serum Free Light Chain Assay:</strong> Measures excess light chains not bound to antibodies.</li>
                                <li><strong>Calcium and Creatinine Levels:</strong> Elevated levels can indicate bone breakdown and kidney involvement.</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify font-bold'>Urine Tests</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Urine Protein Electrophoresis (UPEP):</strong> Detects Bence-Jones proteins, a form of light chain protein associated with multiple myeloma.</li>
                            </ul>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Bone Marrow Biopsy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>A sample of bone marrow is examined under a microscope to confirm the presence of abnormal plasma cells and determine the percentage of cancerous cells.</p>


                            <p className='text-gray-700 text-base lg:text-justify font-bold'>Imaging Tests</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>X-rays:</strong> Can reveal bone lesions or fractures.</li>
                                <li><strong>MRI or CT Scans: </strong> Help identify bone damage or spinal compression.</li>
                                <li><strong>PET Scans:</strong> Detect areas of active disease throughout the body.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Early diagnosis plays a critical role in effective treatment planning and can slow disease progression significantly.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Multiple Myeloma
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>While multiple myeloma is currently incurable, it is highly treatable. The goals of treatment are to control the disease, relieve symptoms, prevent complications, and improve the patient's quality of life. Treatment approaches may include:</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Traditional chemotherapy drugs are used to kill or stop the growth of myeloma cells. Often used in combination with other therapies.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Targeted Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>These drugs specifically attack cancer cells while sparing normal cells. Commonly used targeted drugs include proteasome inhibitors and monoclonal antibodies.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Helps the immune system recognize and destroy myeloma cells. CAR-T cell therapy and monoclonal antibodies are examples of this approach.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Corticosteroids
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Used to reduce inflammation and kill myeloma cells. They are often combined with other treatments for better results.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Stem Cell Transplant
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Also known as bone marrow transplant. High-dose chemotherapy is followed by infusion of healthy stem cells to restore bone marrow function.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                6. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Used to relieve bone pain or treat areas of bone damage. It can also be effective in shrinking tumors compressing the spine or nerves.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                7. Supportive Care
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Includes pain management, treatment of infections, bone-strengthening medications (like bisphosphonates), and lifestyle counseling to manage fatigue and nutrition.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Treatment plans are highly personalized, depending on age, overall health, stage of the disease, and how well the patient responds to initial therapy.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Living with Multiple Myeloma
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Managing multiple myeloma is a long-term journey. While remission is achievable for many patients, regular follow-up care is essential to monitor for recurrence or complications. Here are a few tips for living well with multiple myeloma:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Maintain a healthy diet</strong> rich in protein, calcium, and essential vitamins.</li>
                                <li><strong>Stay physically active</strong> within your limits to strengthen your body and reduce fatigue.</li>
                                <li><strong>Practice infection prevention</strong> by maintaining hygiene and avoiding crowded places during treatment.</li>
                                <li><strong>Stay emotionally supported</strong> through counseling, support groups, or family engagement.</li>
                                <li><strong>Follow your treatment schedule</strong> and attend all follow-up appointments.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Ongoing communication with your healthcare team ensures timely interventions and better quality of life.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Overall Summary
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Multiple myeloma is a complex but manageable form of blood cancer. With timely diagnosis and personalized treatment, many patients achieve long-term remission and maintain a high quality of life. If you or a loved one experiences persistent fatigue, bone pain, or frequent infections, it is important to consult a healthcare provider for further evaluation.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Awareness, early detection, and access to advanced treatment are the key pillars in successfully managing multiple myeloma.</p>
                        </div>
                        <div className="col-span-3">
                            <Type />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Multiple