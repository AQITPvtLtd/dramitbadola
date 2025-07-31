"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Leukemia = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/leukemia.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="leukemia"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Leukemia: Symptoms, Causes, Diagnosis, and Treatment
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Leukemia is a type of blood cancer that begins in the bone marrow — the soft, spongy tissue inside bones where blood cells are formed. It leads to the uncontrolled production of abnormal white blood cells that interfere with the body’s ability to fight infection, carry oxygen, and control bleeding. Affecting both children and adults, leukemia can develop quickly or gradually, and early detection is crucial for successful treatment.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                We’ll explore what leukemia is, its signs and symptoms, causes, diagnosis, and modern treatment options available. Whether you are a patient, caregiver, or simply looking to learn more, this guide offers essential insights into understanding leukemia.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Is Leukemia?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Leukemia is a cancer of the body's blood-forming tissues, including the bone marrow and the lymphatic system. It usually affects the white blood cells, which play a key role in the immune system. In people with leukemia, the bone marrow produces large numbers of abnormal white blood cells that do not function properly.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>These cancerous cells grow faster than normal and crowd out healthy blood cells, leading to symptoms such as infections, anemia, and bleeding. Leukemia is not a single disease but a group of related cancers, classified based on the speed of progression (acute or chronic) and the type of white blood cells affected (lymphoid or myeloid). While we won’t dive into each type in this article, understanding the basic nature of leukemia is key to recognizing its impact.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Common Symptoms of Leukemia
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>The symptoms of leukemia can vary depending on the type and stage of the disease. In the early stages, it may present few or no symptoms, which makes it difficult to detect. However, as the disease progresses, some of the most common signs include:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Fatigue or Weakness:</strong> One of the earliest and most common symptoms, often due to anemia or general decline in blood health.</li>
                                <li><strong>Frequent Infections:</strong> Abnormal white blood cells are ineffective at fighting bacteria and viruses, leaving the body vulnerable.</li>
                                <li><strong>Unexplained Bruising or Bleeding:</strong> Leukemia can reduce the platelet count, which causes easy bruising, bleeding gums, or frequent nosebleeds.</li>
                                <li><strong>Pale Skin (Anemia): </strong> Reduced red blood cells lead to paleness, shortness of breath, and dizziness.</li>
                                <li><strong>Bone or Joint Pain:</strong> Cancer cells can accumulate in the bone marrow, causing pain and tenderness.</li>
                                <li><strong>Swollen Lymph Nodes:</strong> Especially in the neck, underarms, or groin without any obvious infection.</li>
                                <li><strong>Unintended Weight Loss:</strong>A noticeable drop in weight without changes in diet or activity.</li>
                                <li><strong>Night Sweats and Fever:</strong>Persistent or recurring fevers and excessive sweating during sleep are systemic signs of leukemia.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>If you or someone you know is experiencing several of these symptoms consistently, it is important to consult a healthcare professional for evaluation.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Leukemia?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>The exact cause of leukemia is still not completely understood. However, several risk factors have been identified that may increase the chances of developing the disease:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Genetic Mutations:</strong> Changes in the DNA of blood cells can trigger leukemia.</li>
                                <li><strong>Family History:</strong> People with close relatives who had leukemia may be at increased risk.</li>
                                <li><strong>Radiation Exposure:</strong> High doses of radiation, such as those from nuclear accidents or cancer treatments, are linked to leukemia.</li>
                                <li><strong>Chemical Exposure:</strong> Prolonged exposure to chemicals like benzene, often found in industrial settings, may raise the risk.</li>
                                <li><strong>Smoking:</strong> Tobacco smoke contains chemicals that can increase leukemia risk.</li>
                                <li><strong>Previous Cancer Treatments:</strong> Some chemotherapy and radiation therapies for other cancers can increase leukemia risk later in life.</li>
                                <li><strong>Certain Genetic Disorders:</strong> Conditions like Down syndrome are linked to a higher likelihood of leukemia.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>It’s important to note that having one or more of these risk factors does not mean a person will develop leukemia, and some patients may develop it without any identifiable risk factors.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is Leukemia Diagnosed?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Early diagnosis of leukemia is critical to starting treatment promptly and improving outcomes. Doctors typically begin with a detailed medical history and physical examination, followed by a series of tests:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Complete Blood Count (CBC):</strong> Measures the number and types of blood cells. Abnormal levels can be a strong indicator of leukemia.</li>
                                <li><strong>Peripheral Blood Smear: </strong> Blood is examined under a microscope to detect immature or abnormal cells.</li>
                                <li><strong>Bone Marrow Biopsy:</strong> A small sample of bone marrow (usually from the hip bone) is taken and tested for leukemia cells.</li>
                                <li><strong>Cytogenetic and Molecular Testing:</strong> These tests look for genetic abnormalities in leukemia cells that can help guide treatment decisions.</li>
                                <li><strong>Imaging Tests:</strong> CT scans, X-rays, and ultrasounds may be used to detect organ enlargement or other complications.</li>
                                <li><strong>Lumbar Puncture (Spinal Tap):</strong> Sometimes done to check if the leukemia has spread to the central nervous system.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>These diagnostic steps help determine the type of leukemia, its stage, and the most effective treatment options.</p>




                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Leukemia
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Leukemia treatment has advanced significantly in recent years, with many patients achieving long-term remission. Treatment plans depend on several factors, including the type of leukemia, patient age, health condition, and how far the disease has progressed.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Here are the most common treatment options:</p>


                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The primary treatment for most types of leukemia. Chemotherapy drugs are designed to kill fast-growing cancer cells and may be given orally or intravenously.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Targeted Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>These drugs block specific genes or proteins involved in leukemia cell growth. Targeted therapies often come with fewer side effects compared to traditional chemotherapy.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>This treatment boosts the body’s natural immune system to recognize and destroy leukemia cells more effectively. CAR T-cell therapy is one such innovative method used in some patients.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Used to kill cancer cells or shrink swollen organs. It may also be used before a stem cell transplant.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Stem Cell Transplant (Bone Marrow Transplant)
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Damaged bone marrow is replaced with healthy stem cells, either from the patient or a donor. This treatment is intensive and usually reserved for aggressive or relapsed leukemia.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                6. Supportive Care
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Blood transfusions, antibiotics, and medications to reduce side effects are often part of treatment to help manage symptoms and enhance quality of life.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Doctors often use a combination of these therapies to achieve the best outcomes. Ongoing follow-ups and monitoring are essential to detect any signs of recurrence.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Living with Leukemia
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>A leukemia diagnosis can be life-changing, but many patients go on to lead fulfilling lives during and after treatment. Emotional support, regular follow-ups, and lifestyle modifications can significantly enhance well-being. Here are a few tips for patients:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Maintain a healthy diet rich in nutrients</li>
                                <li>Avoid exposure to infections</li>
                                <li>Stay physically active as tolerated</li>
                                <li>Prioritize mental health and emotional well-being</li>
                                <li>Join support groups or talk to a counselor</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>The journey may be challenging, but advancements in medical science continue to improve survival rates and quality of life for leukemia patients.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Overall Summary
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Leukemia is a complex but increasingly manageable disease. With early detection, modern treatment strategies, and personalized care, many patients achieve remission and continue living healthy lives. Recognizing the symptoms, understanding the causes, and seeking prompt medical advice can make a significant difference.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>If you or someone you know is experiencing persistent symptoms related to blood health, don’t delay, consult a healthcare specialist for evaluation and care.</p>
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

export default Leukemia