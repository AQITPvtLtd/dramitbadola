"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Blood = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/blood.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Blood Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Blood Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Blood cancer is a type of cancer that affects the production and function of blood cells. It usually starts in the bone marrow—where blood is produced—and disrupts the normal development of blood cells. The three main types of blood cancer are leukemia, lymphoma, and myeloma.
                            </p>

                            {/* Causes Section */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Blood Cancer
                            </h2>
                            <p className='text-gray-700'>There are three main types of blood cancer:</p>
                            <ol className='list-decimal list-inside'>
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                    Leukemia
                                </li>
                                <p className="text-gray-700 mb-3">Leukemia is a cancer of the white blood cells. It starts in the bone marrow and spreads into the blood. Leukemia can be acute (rapid-growing) or chronic (slow-growing), and is classified based on the type of white blood cell it affects—lymphocytic or myeloid.</p>
                                <p className='text-semibold text-gray-700'>Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Frequent infections</li>
                                    <li>Pale skin and fatigue</li>
                                    <li>Easy bruising or bleeding</li>
                                    <li>Bone and joint pain</li>
                                </ul>
                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Lymphoma
                                </li>
                                <p className="text-gray-700 mb-3">Lymphoma starts in the lymphatic system, which helps the body fight infections. It involves the abnormal growth of lymphocytes, a type of white blood cell. Lymphoma is divided into two main types:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Hodgkin lymphoma (HL)</li>
                                    <li>Non-Hodgkin lymphoma (NHL)</li>
                                </ul>
                                <p className='text-semibold text-gray-700 mt-3'>Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Swollen lymph nodes (neck, armpits, groin)</li>
                                    <li>Persistent fever</li>
                                    <li>Weight loss</li>
                                    <li>Night Sweets</li>
                                </ul>

                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                    Multiple Myeloma
                                </li>
                                <p className="text-gray-700 mb-3">This cancer affects plasma cells, which are a type of white blood cell that produces antibodies. In multiple myeloma, cancerous plasma cells accumulate in the bone marrow, damaging bones and weakening the immune system.</p>
                                <p className='text-semibold text-gray-700'>Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Bone pain (especially in the spine or chest)</li>
                                    <li>Frequent infections</li>
                                    <li>Anemia</li>
                                    <li>High calcium levels</li>
                                </ul>
                            </ol>
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Blood Cancer?
                            </h2>
                            <p className="text-gray-700">The exact cause of blood cancer isn’t always known, but several risk factors can increase the chances:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Genetic mutations</li>
                                <li>Radiation exposure</li>
                                <li>Chemical exposure (e.g., benzene)</li>
                                <li>Smoking and tobacco use</li>
                                <li>Weakened immune system</li>
                                <li>Viral infections (like Epstein-Barr or HIV)</li>
                            </ul>
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                How is Blood Cancer Diagnosed?
                            </h2>
                            <p className="text-gray-700">Diagnosis typically involves a combination of:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Blood tests: </strong> to check for abnormal cells or counts</li>
                                <li><strong>Bone Marrow Biopsy: </strong> to detect cancer cells directly in the marrow</li>
                                <li><strong>Imaging scans (like CT or PET): </strong> to identify cancer spread</li>
                                <li><strong>Genetic tests: </strong>  to understand mutations that may influence treatment</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Early diagnosis plays a key role in successful treatment and survival.
                            </p>


                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">
                                Treatment Options for Blood Cancer
                            </h2>
                            <p className="text-gray-700">Treatment depends on the type, stage, and overall health of the patient. The most common options include:</p>
                            <ol className='list-decimal list-inside'>
                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Chemotherapy
                                </li>
                                <p className="text-gray-700">Powerful drugs are used to kill or stop the growth of cancer cells.</p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Radiation Therapy

                                </li>
                                <p className="text-gray-700">High-energy rays target and destroy cancer cells in specific areas.</p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Immunotherapy
                                </li>
                                <p className="text-gray-700">Boosts the body’s immune system to recognize and attack cancer cells.</p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Targeted Therapy
                                </li>
                                <p className="text-gray-700">Uses drugs to block specific cancer cell genes, proteins, or environments.</p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Stem Cell Transplant
                                </li>
                                <p className="text-gray-700">Replaces damaged bone marrow with healthy stem cells from the patient or a donor.</p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    CAR T-Cell Therapy (Advanced)
                                </li>
                                <p className="text-gray-700 mb-5">A cutting-edge treatment where a patient’s T-cells are genetically modified to fight cancer.</p>
                            </ol>
                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">
                                Why Early Detection is Critical?
                            </h2>
                            <p className="text-gray-700 mb-5">Blood cancers often present with vague symptoms that may mimic common illnesses. However, early detection leads to better outcomes. Routine checkups, paying attention to persistent symptoms, and seeking expert care can be life-saving.</p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">
                                Support, Recovery & Life After Blood Cancer
                            </h2>
                            <p className="text-gray-700">Recovery from blood cancer is a journey. Along with medical treatment, patients benefit from:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Psychological counseling</li>
                                <li>Nutritional support</li>
                                <li>Physical rehabilitation</li>
                                <li>Support groups and community care</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Advances in medical science mean that many blood cancers are now treatable and even curable, especially when caught early.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Blood cancer is a serious but increasingly treatable disease, thanks to advancements in early diagnosis and medical research. Whether it's leukemia, lymphoma, or multiple myeloma, understanding the symptoms, seeking timely medical attention, and choosing the right treatment path can significantly improve outcomes.</p>

                        </div>
                        <div className="col-span-3 sticky top-20">
                            <Type />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blood;
