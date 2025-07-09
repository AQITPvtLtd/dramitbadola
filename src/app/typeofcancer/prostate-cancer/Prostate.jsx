"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Prosate = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/prostate.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="prostate"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: 'Roboto Slab, serif' }}
                            >
                                Prostate Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Prostate cancer is a form of cancer that begins in the prostate gland—a small, walnut-shaped gland in men that produces seminal fluid. It is one of the most common cancers among men, especially those over age 50. While it often grows slowly and may not cause serious harm, some types are more aggressive and require prompt treatment.
                            </p>

                            {/* Types of Prostate Cancer */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Types of Prostate Cancer</h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">Adenocarcinoma</li>
                                <p className="text-gray-700 mb-3">
                                    The most common type of prostate cancer, adenocarcinoma begins in the gland cells of the prostate. It usually grows slowly but can become aggressive in advanced stages.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Frequent or difficult urination</li>
                                    <li>Blood in urine or semen</li>
                                    <li>Pelvic discomfort</li>
                                    <li>Erectile dysfunction</li>
                                </ul>

                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">Small Cell Carcinoma</li>
                                <p className="text-gray-700 mb-3">
                                    A rare and aggressive form of prostate cancer that doesn’t produce PSA and spreads quickly to other parts of the body.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Unexplained weight loss</li>
                                    <li>Fatigue</li>
                                    <li>Bone pain</li>
                                    <li>Neurological symptoms (if metastasized)</li>
                                </ul>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">What Causes Prostate Cancer?</h2>
                            <p className="text-gray-700">
                                The exact cause of prostate cancer is unknown, but certain risk factors are known to contribute:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Age (risk increases after 50)</li>
                                <li>Family history of prostate or breast cancer</li>
                                <li>Genetic mutations (BRCA1/BRCA2)</li>
                                <li>Obesity and poor diet</li>
                                <li>High testosterone levels</li>
                                <li>Ethnicity (more common in African-American men)</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How is Prostate Cancer Diagnosed?</h2>
                            <p className="text-gray-700">
                                Diagnosis typically involves a combination of screening tests and imaging:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>PSA (Prostate-Specific Antigen) Test:</strong> Measures PSA levels in the blood</li>
                                <li><strong>Digital Rectal Exam (DRE):</strong> Physician checks prostate for lumps or abnormalities</li>
                                <li><strong>Biopsy:</strong> Removal of prostate tissue for analysis</li>
                                <li><strong>MRI or CT scan:</strong> To assess tumor size and spread</li>
                                <li><strong>Bone scan:</strong> Checks if cancer has spread to bones</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Regular screening is crucial, especially for men with high risk factors.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">Treatment Options for Prostate Cancer</h2>
                            <p className="text-gray-700">
                                Treatment varies depending on the cancer’s stage, grade, and patient health. Options include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-2">Active Surveillance</li>
                                <p className="text-gray-700">
                                    Monitoring the cancer closely in cases where it's slow-growing and not causing symptoms.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Surgery (Prostatectomy)</li>
                                <p className="text-gray-700">
                                    Removal of the prostate gland, often recommended in early stages for healthy patients.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Radiation Therapy</li>
                                <p className="text-gray-700">
                                    High-energy beams destroy cancer cells. Can be external or internal (brachytherapy).
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Hormone Therapy</li>
                                <p className="text-gray-700">
                                    Reduces testosterone levels, which fuels prostate cancer growth.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Chemotherapy</li>
                                <p className="text-gray-700 mb-5">
                                    Used in advanced or hormone-resistant cancers to kill cancer cells systemically.
                                </p>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Why Early Detection is Critical?</h2>
                            <p className="text-gray-700 mb-5">
                                Prostate cancer often progresses silently in its early stages. Regular screening allows for early detection, when treatment is most effective and minimally invasive. Delayed diagnosis can reduce survival chances and limit treatment options.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Support, Recovery & Life After Prostate Cancer</h2>
                            <p className="text-gray-700">
                                Recovery from prostate cancer is a long-term process involving:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Pelvic floor therapy to regain bladder control</li>
                                <li>Management of sexual side effects</li>
                                <li>Regular follow-up with PSA tests</li>
                                <li>Emotional and psychological support</li>
                                <li>Dietary changes and exercise programs</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Most men recover well after treatment and lead healthy, active lives with appropriate lifestyle modifications and monitoring.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Conclusion</h2>
                            <p className="text-gray-700">
                                Prostate cancer is highly treatable when detected early. Men over 50, especially those at higher risk, should undergo regular screenings. With the right treatment and support, many men recover fully and continue to live a high-quality life.
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

export default Prosate;
