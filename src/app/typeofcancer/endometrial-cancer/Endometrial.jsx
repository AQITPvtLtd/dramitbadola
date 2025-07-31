import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Endometrial = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/endometrial-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="endometrial-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Endometrial Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                One kind of cancer that starts in the endometrium, the lining of the uterus, is called endometrial cancer. It is the most prevalent gynecologic cancer in women, especially in postmenopausal women. It is frequently very treatable and curable with surgery alone or in conjunction with other therapies when caught early.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Even so, there is still a lack of knowledge regarding endometrial cancer. Women can spot warning signs early and seek care quickly if they are aware of the symptoms, risk factors, and available treatments.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Is Endometrial Cancer?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                When the endometrial lining cells start to proliferate out of control, endometrial cancer develops. It should not be mistaken for more aggressive and uncommon uterine cancers like uterine sarcomas.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Endometrial cancer is often categorized into two main types:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Type I (endometrioid adenocarcinoma): </strong>More prevalent and typically grows more slowly. Excessive estrogen exposure is frequently linked to it.</li>
                                <li><strong>Type II (non-endometrioid subtypes): </strong>More aggressive and less frequent. Comprises clear cell and serous cell carcinomas.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Who Is at Risk?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Several factors can increase the risk of endometrial cancer:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Postmenopausal status – </strong>Most cases occur in women over 50.</li>
                                <li><strong>Obesity – </strong>Excess fat increases estrogen levels in the body.</li>
                                <li><strong>Unopposed estrogen exposure – </strong>From hormone replacement therapy (without progesterone), early menarche, late menopause, or never having been pregnant.</li>
                                <li><strong>Polycystic ovarian syndrome (PCOS) – </strong>Due to hormonal imbalances and irregular periods.</li>
                                <li><strong>Tamoxifen use – </strong>Used in breast cancer treatment, this drug can increase uterine cancer risk.</li>
                                <li><strong>Family history or genetic syndromes – </strong>Such as <strong> Lynch syndrome </strong> (also called hereditary non-polyposis colorectal cancer).</li>
                                <li><strong>Diabetes and hypertension – </strong>Frequently associated with obesity and metabolic disturbances.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Despite these risk factors, many women develop endometrial cancer with no obvious cause.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Are the Symptoms?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Abnormal vaginal bleeding is the most prevalent and early sign of endometrial cancer. It is therefore one of the rare cancers for which early symptoms are frequently apparent.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Other symptoms include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Postmenopausal bleeding – </strong>Even a single episode should not be ignored.</li>
                                <li><strong>Heavy or irregular periods</strong>in premenopausal women</li>
                                <li><strong>Bleeding between periods</strong></li>
                                <li><strong>Pelvic pain or pressure</strong></li>
                                <li><strong>Watery or blood-tinged vaginal discharge</strong></li>
                                <li><strong>Pain during intercourse</strong></li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Weight loss, exhaustion, or trouble urinating or passing stools due to tumor pressure are some symptoms of advanced cancer.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is It Diagnosed?
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                For better results, early diagnosis is essential. When a woman exhibits unusual bleeding, the physician might suggest:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Pelvic examination – </strong>To check for uterine size or masses.</li>
                                <li><strong>Transvaginal ultrasound – </strong>To measure endometrial thickness. A thickened lining can raise suspicion.</li>
                                <li><strong>Endometrial biopsy – </strong>A sample of the uterine lining is taken to look for cancer cells. This is the most definitive diagnostic step.</li>
                                <li><strong>Hysteroscopy – </strong>Involves visualizing the uterine cavity using a camera and obtaining targeted biopsies if needed.</li>
                                <li><strong>Dilation and curettage (D&C) – </strong>Performed if the biopsy is inconclusive or if a larger sample is required.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Imaging techniques like MRI, CT, or PET-CT may be used to determine the extent of the disease and develop a treatment plan after cancer has been confirmed.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Stages of Endometrial Cancer
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Stage I is limited to the uterus, while Stage IV spreads to distant organs such as the liver or lungs. At Stage I, when results are very favorable, the majority of cases are diagnosed.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The stage, tumor type, grade, patient age, and desire for future fertility all influence the course of treatment. Often, a multidisciplinary approach works best.
                            </p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>The cornerstone of treatment for most early-stage cases.</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Total hysterectomy –</strong>Removal of the uterus.</li>
                                <li><strong>Bilateral salpingo-oophorectomy –</strong> Removal of both ovaries and fallopian tubes.</li>
                                <li><strong>Lymph node assessment – </strong> To check for spread.</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>Minimally invasive techniques (like laparoscopy) are preferred in suitable patients for faster recovery.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Used to reduce the risk of recurrence, particularly in high-risk or locally advanced cancers. It may include:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Vaginal brachytherapy – </strong> Internal radiation.</li>
                                <li><strong>External beam radiation – </strong> Directed at the pelvis.</li>
                            </ul>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Hormone Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Used for hormone receptor-expressing low-grade cancers, particularly in women who are not candidates for surgery or who want to maintain their fertility. Oral or intrauterine devices can be used to deliver progesterone-based treatments.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Saved for severe or advanced illness, especially when the cancer has progressed outside the uterus. Paclitaxel and carboplatin are common medications.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Targeted Therapy and Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Immunotherapy medications such as pembrolizumab are now being used for some advanced or recurrent cases, especially in patients with mismatch repair deficiency (dMMR) or microsatellite instability (MSI-H).</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What About Fertility?
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Under the supervision of a specialist, young women with low-grade, early-stage endometrial cancer who want to maintain their fertility may be candidates for close monitoring and conservative hormonal therapy. This strategy necessitates long-term monitoring and carries a certain risk of recurrence.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Monitoring and Follow-Up
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                After treatment, regular follow-up is important to monitor for recurrence. This typically includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Pelvic exams </strong></li>
                                <li><strong>Ultrasound or imaging </strong>if needed</li>
                                <li><strong>Symptom review – </strong>New bleeding, pain, or discharge should be evaluated promptly</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Most recurrences happen within the first 2–3 years after treatment.
                            </p>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Prognosis
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                When caught early, endometrial cancer has a high cure rate. Over 90% of patients with Stage I disease survive for five years. Even though advanced stages are more difficult, they can still be managed with multidisciplinary care and contemporary therapies.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to See a Specialist
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Evaluation should be prompted by any unusual bleeding following menopause or by younger women's ongoing heavy or irregular periods. Better results and less aggressive treatment are frequently the results of early diagnosis.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Medical oncologist Dr. Amit Badola is essential in the treatment of endometrial cancer, especially when it is advanced and calls for immunotherapy, hormone therapy, or chemotherapy. To guarantee a thorough, patient-centered approach catered to each person's condition and objectives, he collaborates closely with the surgical and radiation teams.
                            </p>
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

export default Endometrial