import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Testicular = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/testicular-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="testicular-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Testicular Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The two oval-shaped glands inside the scrotum that produce testosterone and sperm are called testicles, and they can be affected by testicular cancer, a relatively uncommon type of cancer. Testicular cancer is the most prevalent cancer in men aged 15 to 40, despite its rarity. The good news is that, with early diagnosis and treatment, it is very curable, even at advanced stages.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Since many young men are not aware of the risk, symptoms, or significance of self-examination, it is imperative that awareness regarding testicular cancer be increased.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Testicular Cancer
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Testicular cancers are classified primarily into two categories based on the type of cells involved:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Germ cell tumours (GCTs) – </strong>These account for over 90% of all testicular cancers. They are further divided into:</li>

                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                    <li><strong>Seminomas – </strong>Generally grow slowly and respond well to treatment.</li>
                                    <li><strong>Non-seminomas – </strong>Often more aggressive, including subtypes like embryonal carcinoma, yolk sac tumour, choriocarcinoma, and teratoma.</li>
                                    <li><strong>Non-germ cell tumours – </strong>These include rare types such as Leydig or Sertoli cell tumours.</li>
                                </ul>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Knowing the exact type aids in choosing the best course of action and forecasting how the cancer will behave.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Who Is at Risk?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                While testicular cancer can affect anyone with testicles, certain risk factors may increase susceptibility:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Undescended testicle (cryptorchidism) –</strong> Even if corrected surgically</li>
                                <li><strong>Family history –</strong> Having a brother or father with testicular cancer</li>
                                <li><strong>Previous history</strong>of testicular cancer in the other testis</li>
                                <li><strong>HIV infection</strong></li>
                                <li><strong>Abnormal testicular development</strong> (e.g., Klinefelter syndrome)</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                However, many patients have no identifiable risk factors. Lifestyle or diet is not known to play a major role.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Signs and Symptoms
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The most common symptom of testicular cancer is a <strong> painless lump or swelling in the testicle. </strong> Other warning signs may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>A feeling of <strong> heaviness </strong> in the scrotum</li>
                                <li><strong>Dull ache </strong> in the lower abdomen, back, or groin</li>
                                <li> <strong> Pain or discomfort </strong> in the testicle or scrotum</li>
                                <li><strong>Fluid buildup </strong>in the scrotum</li>
                                <li><strong>Enlargement or tenderness of the breasts</strong> (due to hormonal changes)</li>
                                <li>In advanced cases, symptoms may include fatigue, weight loss, cough, or breathlessness due to spread to lungs or lymph nodes</li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Because it often causes no pain, many men ignore early signs. That’s why monthly self-examination is strongly recommended.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is It Diagnosed?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                When a man notices any unusual change in the testicles, he should see a healthcare provider without delay. Diagnosis involves:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Physical examination –</strong> To assess lumps or irregularities</li>
                                <li><strong>Scrotal ultrasound –</strong> Non-invasive imaging to differentiate solid from fluid-filled masses</li>
                                <li> <strong>Tumour markers </strong> in blood – These include:</li>

                                <ul className="list-circle list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                    <li><strong>AFP (alpha-fetoprotein)</strong></li>
                                    <li><strong>β-hCG (beta-human chorionic gonadotropin)</strong> </li>
                                    <li> <strong>LDH (lactate dehydrogenase)</strong></li>
                                </ul>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                An orchidectomy, or removal of the testicle, is a diagnostic and therapeutic procedure when a tumor is suspected. Because of the possibility of cancer cells spreading, biopsies are typically avoided.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                CT scans of the chest, abdomen, and pelvis are used for staging in order to look for spread, particularly to the lymph nodes or lungs.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Staging and Spread
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The three stages of testicular cancer are Stage I (confined to the testicle) and Stage III (spread to distant organs like the liver or lungs). Thankfully, the majority of cases are identified early and have excellent treatment outcomes.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The type (seminoma vs. non-seminoma), stage, tumor markers, and patient fertility objectives all influence the course of treatment. The best results come from a multidisciplinary approach.
                            </p>



                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li> <strong>Radical inguinal orchidectomy –</strong>Groin incision to remove the afflicted testicle. Almost always, this is the first step.</li>
                                <li><strong>•	Retroperitoneal lymph node dissection (RPLND) –</strong>May be required for certain non-seminomatous tumors that involve lymph nodes.</li>
                            </ul>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Used for patients with high-risk characteristics or advanced disease. BEP (Bleomycin, Etoposide, Cisplatin) is a common regimen. The majority of patients can achieve long-term remission and tolerate chemotherapy well.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Mostly applied to seminomas, which are extremely sensitive to radiation. Because there are now more effective chemotherapy alternatives, it is less common in practice.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Surveillance
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>After surgery, in low-risk Stage I cases, active surveillance with routine blood tests and scans may be preferred over immediate chemotherapy or radiation.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Fertility and Psychological Impact
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Young men who receive a cancer diagnosis may experience physical and emotional difficulties, particularly in relation to masculinity and fertility. It's critical to understand:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>The remaining testicle typically continues to produce sperm and hormones normally.</li>
                                <li><strong>Sperm banking</strong>before chemotherapy is strongly advised if future fertility is a concern.</li>
                                <li>Testosterone replacement may be needed in rare cases.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Patients can manage treatment and recuperation with the assistance of fertility specialists, counselors, and oncologists.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Prognosis and Survival
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Testicular cancer is one of the most curable solid cancers.</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li> <strong>Stage I </strong>survival rates exceed<strong> 98%</strong> </li>
                                <li>Even <strong> Stage III </strong> cancers have survival rates of <strong> over 70–80% </strong> with appropriate treatment</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>Most patients return to normal life, careers, and fatherhood after completing therapy.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Self-Examination: A Simple Life-Saving Habit
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>All men, especially between ages 15 and 40, should perform a <strong> monthly testicular self-exam: </strong></p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Best done after a warm shower</li>
                                <li>Gently roll each testicle between the fingers</li>
                                <li>Look for lumps, swelling, or changes in shape or firmness</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>Early detection can mean simpler treatment and complete cure.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to See a Specialist
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>A doctor should be consulted right away if there is any change, pain, or lump in the testicles. Complex treatments and more advanced disease can result from a delay in evaluation.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Testicular cancers are diagnosed and treated by medical oncologist Dr. Amit Badola, who specializes in long-term surveillance and chemotherapy management. His interdisciplinary approach guarantees that every patient receives customized care that takes into account their mental and physical health.</p>
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

export default Testicular