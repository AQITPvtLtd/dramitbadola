"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Brain = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/brain.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Brain Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Brain Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Brain cancer refers to the abnormal and uncontrolled growth of cells in the brain or surrounding structures. These tumors can be benign (non-cancerous) or malignant (cancerous). Brain cancer affects critical functions such as memory, movement, and speech depending on its location. Early detection and advanced treatment options can significantly improve outcomes.
                            </p>

                            {/* Types of Brain Cancer */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Brain Cancer
                            </h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                    Glioblastoma Multiforme (GBM)
                                </li>
                                <p className="text-gray-700 mb-3">
                                    GBM is the most aggressive and common malignant brain tumor in adults. It grows rapidly and affects brain tissues deeply, making treatment difficult.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Severe headaches</li>
                                    <li>Seizures</li>
                                    <li>Memory loss</li>
                                    <li>Personality changes</li>
                                </ul>

                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Meningioma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    Meningiomas arise from the meninges—the protective layers around the brain and spinal cord. Most are benign but can cause pressure-related symptoms.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Vision problems</li>
                                    <li>Hearing loss or ringing in ears</li>
                                    <li>Muscle weakness</li>
                                    <li>Speech difficulties</li>
                                </ul>

                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                    Medulloblastoma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    Medulloblastoma is a fast-growing cancer that typically affects children and begins in the cerebellum—the part of the brain controlling movement and balance.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Unsteady walking</li>
                                    <li>Nausea and vomiting</li>
                                    <li>Headaches (worse in the morning)</li>
                                    <li>Balance and coordination problems</li>
                                </ul>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Brain Cancer?
                            </h2>
                            <p className="text-gray-700">
                                While the exact cause is unknown, several risk factors are associated with brain cancer:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Inherited genetic mutations</li>
                                <li>Exposure to ionizing radiation</li>
                                <li>Family history of brain tumors</li>
                                <li>Weakened immune system</li>
                                <li>Long-term exposure to carcinogenic chemicals</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                How is Brain Cancer Diagnosed?
                            </h2>
                            <p className="text-gray-700">
                                Accurate diagnosis is essential and may involve:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Neurological exam:</strong> Tests reflexes, coordination, and senses</li>
                                <li><strong>Imaging scans (MRI, CT):</strong> Visualize tumor size and location</li>
                                <li><strong>Biopsy:</strong> Confirms the tumor type and grade</li>
                                <li><strong>Spinal tap:</strong> Tests cerebrospinal fluid in certain cases</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Early and precise diagnosis helps guide the most effective treatment plan.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">
                                Treatment Options for Brain Cancer
                            </h2>
                            <p className="text-gray-700">
                                Brain cancer treatment depends on the type, size, and location of the tumor. Common treatment options include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Surgery
                                </li>
                                <p className="text-gray-700">
                                    Removes as much of the tumor as possible without harming brain function.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Radiation Therapy
                                </li>
                                <p className="text-gray-700">
                                    High-energy beams target and kill remaining cancer cells after surgery.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Chemotherapy
                                </li>
                                <p className="text-gray-700">
                                    Uses anti-cancer drugs to destroy or stop the growth of cancer cells.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Targeted Therapy
                                </li>
                                <p className="text-gray-700">
                                    Attacks specific cancer cell genes or proteins to block growth.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Tumor Treating Fields (TTF)
                                </li>
                                <p className="text-gray-700 mb-5">
                                    A wearable device that uses electric fields to slow tumor growth in GBM cases.
                                </p>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">
                                Why Early Detection is Critical?
                            </h2>
                            <p className="text-gray-700 mb-5">
                                Brain tumors can grow silently and only show symptoms once they affect critical functions. Early detection through imaging and medical evaluation ensures better prognosis, improved quality of life, and more effective treatments.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">
                                Support, Recovery & Life After Brain Cancer
                            </h2>
                            <p className="text-gray-700">
                                Recovery from brain cancer involves medical, cognitive, and emotional support. Post-treatment care includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Rehabilitation therapy (speech, physical, occupational)</li>
                                <li>Psychological counseling and neuropsychological support</li>
                                <li>Medication for seizure control and symptom relief</li>
                                <li>Caregiver assistance and community support groups</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                With personalized care and advances in treatment, many brain cancer patients can lead fulfilling lives.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Brain cancer can be life-altering, but timely diagnosis, specialized treatment, and comprehensive support greatly improve survival and quality of life. Awareness and regular checkups are key to catching brain tumors early and increasing treatment success.
                            </p>
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

export default Brain;
