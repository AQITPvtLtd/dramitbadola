"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';


const Lymphoma = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/lymphoma.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="lymphoma"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Lymphoma: Causes, Symptoms, Diagnosis, and Treatment
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Lymphoma is a type of cancer that begins in the lymphatic system—a crucial part of the immune system responsible for fighting infections and maintaining fluid balance in the body. As one of the most common forms of blood cancer, lymphoma can affect people of all ages, and its early detection and treatment can significantly improve outcomes.
                            </p>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                This comprehensive guide will help you understand what lymphoma is, its causes, symptoms, how it’s diagnosed, and the treatment options available. Whether you’re a patient, caregiver, or someone looking to understand more about this disease, here’s what you need to know.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Is Lymphoma?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Lymphoma is a cancer that starts in the lymphocytes—white blood cells that are part of the immune system. These cells are found in the lymph nodes, spleen, thymus, bone marrow, and other parts of the lymphatic system. When a person has lymphoma, their lymphocytes begin to grow and multiply abnormally, forming tumors that can spread throughout the body.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Unlike other cancers that form solid tumors in organs, lymphoma starts in the immune system and can affect multiple areas at once. Although lymphoma can be serious, many types are highly treatable, especially when diagnosed early.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Lymphoma is broadly categorized into two main types:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Hodgkin Lymphoma (HL)</strong> </li>
                                <li><strong>Non-Hodgkin Lymphoma (NHL)</strong> </li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>This article focuses on lymphoma as a whole, without diving into the specifics of its subtypes.</p>








                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Common Symptoms of Lymphoma
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>The symptoms of lymphoma can vary widely depending on the type, location, and stage of the disease. In the early stages, lymphoma may cause few or no noticeable symptoms. However, as the cancer grows, the following signs may appear:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Swollen Lymph Nodes:</strong> Painless swelling in the neck, armpits, or groin is one of the most common early signs of lymphoma. These swollen lymph nodes may be firm or rubbery to the touch.</li>
                                <li><strong>Persistent Fatigue:</strong> Lymphoma can interfere with the normal functioning of the immune system and lead to constant tiredness that doesn't improve with rest.</li>
                                <li><strong>Unexplained Weight Loss:</strong> Losing more than 10% of body weight over a few months without any changes in diet or physical activity may be a warning sign.</li>
                                <li><strong>Fever and Chills:</strong> Recurring low-grade fevers without an obvious infection may occur as the immune system becomes compromised.</li>
                                <li><strong>Night Sweats:</strong> Profuse sweating during sleep, even in a cool room, is a classic symptom of lymphoma.</li>
                                <li><strong>Itchy Skin:</strong> Persistent itching without a rash, particularly on the legs or chest, may be caused by chemicals released by lymphoma cells.</li>
                                <li><strong>Shortness of Breath or Cough:</strong>If the lymphoma affects lymph nodes in the chest, it can press on the lungs or airways, causing breathing difficulties or a persistent cough.</li>
                                <li><strong>Abdominal Pain or Swelling:</strong>In some cases, lymphoma can affect the spleen or lymph nodes in the abdomen, leading to discomfort, bloating, or digestive issues.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>These symptoms can be associated with other health issues, so it’s important to consult a healthcare provider for accurate diagnosis and testing.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Lymphoma?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>The exact cause of lymphoma remains unknown, but researchers believe it develops due to a combination of genetic and environmental factors. Several risk factors may increase the likelihood of developing lymphoma:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Weakened Immune System:</strong> Individuals with autoimmune diseases or those taking immunosuppressive medications after organ transplants are at higher risk.</li>
                                <li><strong>Certain Infections:</strong> Infections like Epstein-Barr virus (EBV), HIV, and Helicobacter pylori have been linked to lymphoma development.</li>
                                <li><strong>Age and Gender:</strong> Some forms of lymphoma are more common in young adults, while others are more prevalent in older individuals. Men are generally more likely to develop lymphoma than women.</li>
                                <li><strong>Chemical Exposure: </strong> Long-term exposure to pesticides, herbicides, and industrial chemicals may increase the risk.</li>
                                <li><strong>Family History:</strong> Having a close relative with lymphoma can slightly raise your risk, though most people with lymphoma have no family history.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>It’s important to note that having one or more risk factors does not guarantee a person will develop lymphoma.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How Is Lymphoma Diagnosed?
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Diagnosing lymphoma typically involves a combination of physical examination, medical history, and various tests to confirm the presence of cancer and identify its type and stage. Here are the most common steps involved:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Physical Exam:</strong> The doctor will check for swollen lymph nodes, spleen, or liver and discuss any symptoms you may be experiencing.</li>
                                <li><strong>Blood Tests: </strong> Blood tests like a complete blood count (CBC) help assess overall health and identify abnormalities in blood cells.</li>
                                <li><strong>Imaging Tests:</strong> Scans such as X-rays, CT (computed tomography), PET (positron emission tomography), or MRI help detect enlarged lymph nodes or organ involvement.</li>
                                <li><strong>Lymph Node Biopsy:</strong> This is the definitive test for lymphoma. A sample of lymph node tissue is removed and examined under a microscope to detect cancer cells.</li>
                                <li><strong>Bone Marrow Biopsy:</strong> In some cases, a bone marrow sample may be taken to determine if the lymphoma has spread.</li>
                                <li><strong>Molecular and Genetic Testing:</strong> These tests analyze lymphoma cells for genetic mutations, which can guide personalized treatment options.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Once diagnosed, the doctor will determine the stage of lymphoma, which helps in planning the appropriate course of treatment.</p>




                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options for Lymphoma
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Chemotherapy uses powerful drugs to kill cancer cells. It is often given in cycles and may be used alone or in combination with other treatments.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The primary treatment for most types of leukemia. Chemotherapy drugs are designed to kill fast-growing cancer cells and may be given orally or intravenously.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>High-energy rays are used to target and destroy cancer cells. Radiation is commonly used for localized lymphoma or to shrink tumors before or after chemotherapy.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>This treatment boosts the body's immune system to fight cancer. It includes monoclonal antibodies that attach to lymphoma cells and help the immune system destroy them.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Targeted Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Targeted drugs block specific proteins or pathways that lymphoma cells need to grow and survive, offering a more precise treatment approach with fewer side effects.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Stem Cell Transplant
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>In advanced or relapsed cases, high-dose chemotherapy followed by a stem cell transplant may be recommended. This procedure replaces damaged bone marrow with healthy cells.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                6. Watchful Waiting (Active Surveillance)
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>For slow-growing lymphomas that aren’t causing symptoms, doctors may recommend regular monitoring instead of immediate treatment.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>The choice of treatment is made after careful evaluation by a hematologist or oncologist, and the goal is to eliminate cancer cells while minimizing damage to healthy tissues.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Living with Lymphoma
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Living with lymphoma requires more than just medical treatment. Emotional, psychological, and social support play a crucial role in recovery and long-term well-being. Here are some tips for managing life with lymphoma:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Stay Informed:</strong>Understanding your condition helps you make informed decisions about treatment and lifestyle.</li>
                                <li><strong>Follow-Up Care:</strong>Regular checkups help monitor for recurrence and manage any late effects of treatment.</li>
                                <li><strong>Healthy Lifestyle:</strong>Eat a balanced diet, stay active, and get enough rest to support your immune system.</li>
                                <li><strong>Support Network:</strong>Lean on friends, family, or support groups to cope with emotional stress.</li>
                                <li><strong>Mental Health:</strong>Don’t hesitate to seek counseling or therapy if you’re feeling anxious or overwhelmed.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>With the right care and support, many people with lymphoma go on to live healthy, active lives.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Overall Summary
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Lymphoma is a complex yet increasingly treatable form of cancer. With advancements in diagnosis and personalized treatments, the survival rates for many lymphoma patients have improved significantly. Recognizing the early signs, understanding the risk factors, and seeking timely medical intervention can greatly impact outcomes.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>If you or someone you know is experiencing symptoms such as persistent swollen lymph nodes, fatigue, or unexplained weight loss, consult a healthcare provider immediately. Early detection is the key to effective treatment and a better quality of life.</p>
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

export default Lymphoma