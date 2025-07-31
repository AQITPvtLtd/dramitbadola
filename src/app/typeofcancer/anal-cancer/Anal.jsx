import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Anal = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/anal-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="anal-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Anal Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A rather uncommon kind of cancer, anal cancer begins in the tissues of the anus, which is the orifice at the end of the rectum through which stool exits the body. Because its symptoms are frequently confused with those of more benign conditions like hemorrhoids, anal cancer is crucial to understand even though it is less common than colon or rectal cancer.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The good news is that, with early detection, anal cancer is very treatable. Results can be greatly impacted by knowledge of risk factors, early symptoms, and available treatments.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Is Anal Cancer?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The skin and anal canal lining are where anal cancer starts. Squamous cell carcinomas, which arise in the outer lining, make up the majority of anal cancers. Adenocarcinomas, melanomas, and neuroendocrine tumors of the anal region are less frequent varieties.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Anal cancer is not closely associated with family history or diet, in contrast to colon cancer. Rather, it is frequently linked to ongoing HPV infection, particularly HPV type 16.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Who Is at Risk?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Although it is more common in adults over 50, anal cancer can strike younger people as well, particularly those with compromised immune systems or HPV infections. Important risk factors consist of:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>HPV infection, </strong>especially high-risk strains (like HPV 16)</li>
                                <li><strong>History of cervical, vaginal, or vulvar cancer </strong>(HPV-related)</li>
                                <li><strong>Receptive anal intercourse </strong></li>
                                <li><strong>Multiple sexual partners </strong></li>
                                <li><strong>HIV infection, </strong>or other causes of immunosuppression</li>
                                <li><strong>Smoking, </strong>which impairs immune response and increases cancer risk</li>
                                <li><strong>Chronic inflammation or anal warts </strong></li>
                                <li><strong>Organ transplant recipients,</strong> due to immune suppression</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Understanding and addressing these risks is essential for prevention and early detection.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms to Watch For
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Common anorectal problems can be mistaken for anal cancer, which delays diagnosis. Symptoms may consist of:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Rectal bleeding </strong>(often the first sign)</li>
                                <li><strong>Anal pain or pressure</strong></li>
                                <li><strong>Itching or discharge</strong></li>
                                <li><strong>A lump or mass near the anus</strong></li>
                                <li><strong>Changes in bowel habits,</strong> such as narrowing of stool</li>
                                <li><strong>Swollen lymph nodes </strong>in the groin or pelvic area</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                These symptoms are easily confused with infections, fissures, or hemorrhoids. A medical evaluation is necessary, though, if they worsen or continue.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is Anal Cancer Diagnosed?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A comprehensive medical history and physical examination are the first steps in early detection. The diagnostic procedure may involve the following steps:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Digital rectal exam (DRE) – </strong>To feel for any masses or irregularities</li>
                                <li><strong>Anoscopy or proctoscopy –  </strong>Allows direct visualization of the anal canal</li>
                                <li><strong>Biopsy – </strong>A small tissue sample is taken to confirm the diagnosis</li>
                                <li><strong>Imaging tests – </strong>CT scan, MRI, or PET-CT help stage the disease by assessing tumour size and spread to lymph nodes or distant organs</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Stage I is a small, localized tumor, and Stage IV is a tumor that has spread to distant sites. The majority of cases receive a Stage I or II diagnosis.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Non-surgical treatment for anal cancer is very effective, and patients frequently maintain normal anal and bowel function. The usual course of treatment, particularly for squamous cell carcinoma, consists of chemotherapy and radiation therapy.
                            </p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Chemoradiation (Combined Chemotherapy and Radiation)
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>This is the mainstay of treatment for most patients with localized disease.</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Radiation therapy </strong>targets the tumour and nearby lymph nodes.</li>
                                <li><strong>Chemotherapy, </strong>usually a combination of 5-FU (fluorouracil) and mitomycin C, is given to enhance the effect of radiation.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>This approach has a high cure rate and avoids the need for surgery in most cases.</p>


                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Surgery
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Surgery is considered in specific cases:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>When the tumour does not respond to chemoradiation (residual disease)</li>
                                <li>For small early-stage tumours not suitable for chemoradiation</li>
                                <li>For treating local recurrence</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>In certain advanced cases, an abdominal resection (APR), which involves removing the anus and necessitates a permanent colostomy, may be necessary.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Targeted Therapy and Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Although research on these is still ongoing, they may be used for advanced or recurrent anal cancer, particularly in patients with high PD-L1 expression or MSI-H status.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Palliative Treatment
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Palliative chemotherapy, radiation therapy, or symptom management may be required in advanced stages in order to enhance quality of life.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Monitoring and Follow-Up
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>After completing treatment, regular follow-up is essential. This may include:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Physical and rectal exams</strong></li>
                                <li><strong>Imaging scans,</strong> if symptoms suggest recurrence</li>
                                <li><strong>Anal cytology or HPV testing,</strong> in high-risk individuals</li>
                                <li>Monitoring for treatment-related side effects such as bowel dysfunction, skin changes, or fatigue</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Follow-up care typically continues for 5 years, with more frequent visits in the first two years.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Prognosis
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The outlook for anal cancer is generally very good, especially when diagnosed early:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Stage I and II</strong> disease has a 5-year survival rate of <strong>over 80–90%</strong></li>
                                <li>Even <strong>Stage III</strong> cases respond well to chemoradiation</li>
                                <li>Advanced disease is more challenging, but emerging therapies are offering new hope</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Most patients treated with chemoradiation can avoid permanent colostomies and maintain normal bowel function.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention and Screening
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Since HPV is a major cause, prevention is possible through:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>HPV vaccination – </strong>Recommended for preteens and young adults up to age 26 (and sometimes older)</li>
                                <li><strong>Safe sexual practices – </strong>Reducing the number of partners and using protection</li>
                                <li><strong>Regular screening – </strong>For high-risk individuals, such as those with HIV or history of genital warts, anal Pap smears may be advised</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Smoking cessation and maintaining a healthy immune system also reduce the risk.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to Seek Expert Care
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Never disregard lumps, changes in bowel habits, or persistent rectal bleeding, especially in people with known risk factors. Appropriate assessment and treatment are ensured by prompt referral to an expert.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Anal cancers are actively treated by medical oncologist Dr. Amit Badola, who specializes in advanced or recurrent disease management and chemoradiation regimens. He collaborates with a multidisciplinary team to provide patient-centered care that is customized to the needs and tumor characteristics of each individual.</p>
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

export default Anal