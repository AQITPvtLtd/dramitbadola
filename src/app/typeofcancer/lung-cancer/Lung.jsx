"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Lung = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f4fcfc]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/lung.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Lung Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: 'Roboto Slab, serif' }}
                            >
                                Lung Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Lung cancer is a type of cancer that begins in the lungs, most commonly in the cells lining the air passages. It is one of the leading causes of cancer-related deaths worldwide. While smoking is the primary risk factor, non-smokers can also develop lung cancer due to exposure to environmental and genetic factors. Early detection greatly improves treatment success.
                            </p>

                            {/* Types of Lung Cancer */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Types of Lung Cancer</h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">Non-Small Cell Lung Cancer (NSCLC)</li>
                                <p className="text-gray-700 mb-3">
                                    NSCLC accounts for about 85% of all lung cancer cases. It grows and spreads more slowly than small cell lung cancer. Subtypes include adenocarcinoma, squamous cell carcinoma, and large cell carcinoma.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Persistent cough or hoarseness</li>
                                    <li>Chest pain</li>
                                    <li>Shortness of breath</li>
                                    <li>Unexplained weight loss</li>
                                </ul>

                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">Small Cell Lung Cancer (SCLC)</li>
                                <p className="text-gray-700 mb-3">
                                    A more aggressive and fast-growing form, often associated with heavy smoking. It spreads quickly to other parts of the body.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Chronic cough with blood (hemoptysis)</li>
                                    <li>Facial swelling or difficulty breathing</li>
                                    <li>Fatigue and loss of appetite</li>
                                    <li>Recurrent respiratory infections</li>
                                </ul>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">What Causes Lung Cancer?</h2>
                            <p className="text-gray-700">
                                Lung cancer can result from both lifestyle choices and environmental exposure. Major causes include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Smoking (primary cause of SCLC and many NSCLC cases)</li>
                                <li>Exposure to secondhand smoke</li>
                                <li>Radon gas exposure</li>
                                <li>Asbestos and other harmful substances</li>
                                <li>Family history of lung cancer</li>
                                <li>Air pollution</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How is Lung Cancer Diagnosed?</h2>
                            <p className="text-gray-700">
                                Diagnosis typically includes a combination of imaging, lab tests, and tissue analysis:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Chest X-ray:</strong> Initial scan to detect abnormalities</li>
                                <li><strong>CT scan:</strong> Offers detailed images of the lungs</li>
                                <li><strong>Sputum cytology:</strong> Examines mucus for cancer cells</li>
                                <li><strong>Bronchoscopy:</strong> Involves inserting a scope into the airways</li>
                                <li><strong>Biopsy:</strong> Confirms cancer and identifies the type</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Early detection through screening, especially for high-risk individuals, can save lives.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">Treatment Options for Lung Cancer</h2>
                            <p className="text-gray-700">
                                Lung cancer treatment depends on the type, stage, and patient's health. Options may include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-2">Surgery</li>
                                <p className="text-gray-700">
                                    Removal of a portion or entire lung, usually in early-stage non-small cell lung cancer.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Radiation Therapy</li>
                                <p className="text-gray-700">
                                    High-energy beams target and destroy cancer cells. Often used before or after surgery or when surgery isn't an option.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Chemotherapy</li>
                                <p className="text-gray-700">
                                    Drugs are used to kill cancer cells or stop their growth, often used in advanced stages.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Targeted Therapy</li>
                                <p className="text-gray-700">
                                    Targets specific mutations or proteins in cancer cells, typically for NSCLC.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Immunotherapy</li>
                                <p className="text-gray-700 mb-5">
                                    Boosts the immune system to fight cancer more effectively. Particularly useful in some advanced cases.
                                </p>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Why Early Detection is Critical?</h2>
                            <p className="text-gray-700 mb-5">
                                Lung cancer often doesn’t cause symptoms in early stages, making regular screening essential for those at risk. When caught early, survival rates improve significantly and treatment is more effective.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Support, Recovery & Life After Lung Cancer</h2>
                            <p className="text-gray-700">
                                Life after lung cancer can be challenging but manageable with the right care. Recovery support includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Smoking cessation programs</li>
                                <li>Pulmonary rehabilitation</li>
                                <li>Nutritional counseling</li>
                                <li>Psychological support and counseling</li>
                                <li>Regular scans and follow-ups</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Many patients lead fulfilling lives after lung cancer treatment with proper medical guidance and lifestyle adjustments.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Conclusion</h2>
                            <p className="text-gray-700">
                                Lung cancer is a serious but increasingly manageable disease with early diagnosis and modern treatments. Awareness, smoking prevention, and routine screening can make a life-saving difference. If diagnosed early and treated appropriately, many patients go on to live meaningful and healthy lives.
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

export default Lung;
