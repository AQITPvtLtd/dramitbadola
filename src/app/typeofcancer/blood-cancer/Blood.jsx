"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Blood = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/blood-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="blood-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Blood Cancer: Understanding the Disease, Symptoms, Causes & Treatment
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Blood cancer is a serious and life-altering condition that affects thousands of people every year. It develops in the bone marrow or blood cells and interferes with the normal production and function of blood. Unlike other cancers that form solid tumors, blood cancer usually starts in the bone marrow where blood is produced, leading to abnormal blood cell growth that can spread throughout the body. If not diagnosed and treated in time, it can be life-threatening.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Is Blood Cancer?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Blood cancer is a type of cancer that affects the production and function of blood cells. Most blood cancers begin in the bone marrow, the soft, spongy tissue inside bones where blood cells are made. The disease causes the uncontrolled growth of abnormal blood cells, which disrupts the normal balance of red cells, white cells, and platelets.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>These cancerous cells do not function properly and can prevent your body from fighting infections, controlling bleeding, and transporting oxygen efficiently. Over time, blood cancer can affect the immune system, organ function, and overall health.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Common Symptoms of Blood Cancer
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Blood cancer often begins silently, with symptoms that may be mild or mistaken for common illnesses. This is why many cases are not detected until the disease has progressed. However, recognizing the early warning signs can make a significant difference in seeking timely medical care. Below are some of the most common symptoms associated with blood cancer:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Unexplained Fatigue or Weakness:</strong> Persistent tiredness or a lack of energy that doesn't improve with rest may indicate low red blood cell counts or the body's ongoing battle against abnormal cells.</li>
                                <li><strong>Frequent or Severe Infections:</strong> Blood cancer can weaken the immune system, making the body more susceptible to infections that recur often or take longer to heal.</li>
                                <li><strong>Unusual Bleeding or Bruising:</strong> Easy bruising, frequent nosebleeds, or prolonged bleeding from small cuts can signal a problem with platelet function or count, which is common in blood cancer patients.</li>
                                <li><strong>Pale Skin (Anemia):</strong> A shortage of healthy red blood cells leads to anemia, which often presents as pale or sallow skin, along with dizziness and cold hands or feet.</li>
                                <li><strong>Swollen Lymph Nodes, Liver, or Spleen:</strong> Swelling in areas like the neck, armpits, or groin without an obvious cause may suggest the buildup of abnormal cells in these organs.</li>
                                <li><strong>Bone or Joint Pain:</strong> Cancerous cells can accumulate in the bone marrow, causing discomfort or pain in the bones and joints, particularly in the long bones of the arms and legs.</li>
                                <li><strong>Night Sweats:</strong>Excessive sweating during sleep that soaks clothing or sheets is a common systemic symptom of blood cancer, often unrelated to room temperature or external conditions.</li>
                                <li><strong>Weight Loss Without Trying:</strong> A sudden, unintentional drop in weight—especially without changes in diet or exercise—may indicate the body's response to underlying cancer.</li>
                                <li><strong>Shortness of Breath:</strong>Low red blood cell levels can result in decreased oxygen delivery, making simple activities feel exhausting and causing breathlessness even at rest.</li>
                                <li><strong>Frequent Fevers or Chills: </strong> Ongoing low-grade fevers or episodes of chills, especially without an obvious infection, can be a red flag for blood-related malignancies.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>These symptoms may resemble other less serious health conditions, such as flu or viral infections, but if they persist or worsen, it’s essential to seek evaluation from a healthcare provider. Only a thorough medical examination and appropriate testing can confirm or rule out blood cancer.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Blood Cancer?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>While the exact cause of blood cancer is still unknown, researchers have identified several risk factors that may increase the likelihood of developing it:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Genetic mutations:</strong> Changes in DNA can trigger abnormal blood cell production.</li>
                                <li><strong>Weakened immune system:</strong> Individuals with autoimmune diseases or those on immunosuppressive therapy may be more prone.</li>
                                <li><strong>Exposure to radiation or harmful chemicals:</strong> Prolonged contact with pesticides, benzene, or radiation has been linked to higher risk.</li>
                                <li><strong>Smoking:</strong> Tobacco use increases the risk of many cancers, including those affecting the blood.</li>
                                <li><strong>Family history:</strong> Those with a close relative who had blood cancer may be at increased risk.</li>
                                <li><strong>Certain infections:</strong> Some viral infections (such as Epstein-Barr virus or HIV) have been associated with a higher incidence of blood cancer.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Not everyone with these risk factors will develop blood cancer, and many people with no known risk factors can still be diagnosed with it.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is Blood Cancer Diagnosed?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Early detection of blood cancer is crucial for effective treatment. Diagnosis typically begins with a physical examination and review of symptoms, followed by diagnostic tests, such as:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Complete Blood Count (CBC):</strong> Checks for abnormal levels of white cells, red cells, and platelets.</li>
                                <li><strong>Bone Marrow Biopsy: </strong> A sample of bone marrow is examined under a microscope to detect cancerous cells.</li>
                                <li><strong>Blood Smear Test:</strong> Observes the shape, size, and appearance of blood cells.</li>
                                <li><strong>Imaging Tests:</strong> X-rays, CT scans, or MRIs may be used to identify affected areas or monitor organ function.</li>
                                <li><strong>Molecular and Genetic Testing:</strong> Helps determine specific gene mutations and markers, guiding personalized treatment.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>The diagnosis process may involve several specialists, including hematologists and oncologists, to ensure accurate results and treatment planning.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Blood Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Advances in medical science have made blood cancer more manageable than ever before. Treatment varies depending on factors such as the patient's overall health, the stage of the disease, and how aggressive the cancer is. The most common treatment options include:</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Chemotherapy uses powerful drugs to kill or stop the growth of cancerous cells. It may be given orally or intravenously and is often the first line of treatment for many blood cancers.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>High-energy radiation is used to destroy cancer cells or shrink tumors. This may be used alone or in combination with chemotherapy, especially if the cancer has spread to specific organs.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Targeted Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Targeted therapy focuses on specific genes or proteins that fuel cancer growth. These treatments are usually less harmful to normal cells and often come with fewer side effects.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>This form of treatment helps the body’s immune system identify and attack cancerous cells. It has shown promising results in treating various blood cancers.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Stem Cell Transplant (Bone Marrow Transplant)
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Damaged bone marrow is replaced with healthy stem cells, either from the patient or a donor. This is often used after chemotherapy or radiation has destroyed the original bone marrow.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                6. Supportive Care
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>This includes medications, blood transfusions, and antibiotics to manage symptoms and side effects, improving the patient's quality of life during treatment.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Living with Blood Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Being diagnosed with blood cancer can be overwhelming, but many patients live full and active lives during and after treatment. Emotional support, regular follow-up care, and adopting a healthy lifestyle can play a vital role in recovery.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Patients are encouraged to:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Maintain a nutritious diet</li>
                                <li>Stay physically active within limits</li>
                                <li>Avoid infections by practicing good hygiene</li>
                                <li>Follow the doctor’s instructions closely</li>
                                <li>Seek emotional and psychological support when needed</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Many people with blood cancer go into remission, meaning the cancer is no longer detectable. Continued monitoring ensures that if the cancer returns, it can be managed quickly.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Overall Summary
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Blood cancer is a challenging but increasingly treatable condition. Thanks to modern advancements in diagnosis and treatment, patients now have access to more effective and personalized care than ever before. Whether you are seeking information for yourself or a loved one, understanding the symptoms, causes, and available treatment options is the first step toward better health.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>If you or someone you know is experiencing persistent symptoms or is at risk, don’t delay seeking medical advice. Early detection can make all the difference.</p>
                        </div>
                        <div className="col-span-3">
                            <Type />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blood;