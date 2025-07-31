"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Breast = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/breast-cancer.jpeg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="breast-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl lg:px-8">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Breast Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Breast cancer is a type of cancer that begins in the cells of the breast. It most commonly affects women, but men can also develop it. The disease occurs when abnormal breast cells grow uncontrollably, forming a lump or mass. Early detection, regular screening, and awareness of risk factors are key to effective treatment and recovery.
                            </p>

                            {/* Types of Breast Cancer */}
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Breast Cancer
                            </h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-base font-semibold text-gray-900 mt-3 mb-3">
                                    Ductal Carcinoma in Situ (DCIS)
                                </li>
                                <p className="text-gray-700 mb-3">
                                    DCIS is a non-invasive form of breast cancer where abnormal cells are found in the milk ducts. It is considered an early form and highly treatable.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>No symptoms in many cases</li>
                                    <li>Possible lump or discharge</li>
                                </ul>

                                <li className="text-base font-bold text-gray-900 mt-3 mb-3">
                                    Invasive Ductal Carcinoma (IDC)
                                </li>
                                <p className="text-gray-700 mb-3">
                                    IDC is the most common type of breast cancer. It starts in the milk ducts and invades surrounding breast tissue. It can spread to other parts of the body if not treated early.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Lump in the breast or underarm</li>
                                    <li>Change in breast shape or size</li>
                                    <li>Skin dimpling or nipple inversion</li>
                                    <li>Discharge or pain in the breast</li>
                                </ul>

                                <li className="text-base font-semibold text-gray-900 mt-3 mb-3">
                                    Inflammatory Breast Cancer
                                </li>
                                <p className="text-gray-700 mb-3">
                                    A rare but aggressive form of cancer that blocks lymph vessels in the skin of the breast, causing redness and swelling.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Red, swollen breast</li>
                                    <li>Thickened skin with an orange-peel texture</li>
                                    <li>Rapid increase in breast size</li>
                                </ul>
                            </ol>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Breast Cancer?
                            </h2>
                            <p className="text-gray-700">
                                The exact cause of breast cancer is unknown, but several risk factors increase the likelihood:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Family history of breast cancer</li>
                                <li>Genetic mutations (BRCA1 & BRCA2)</li>
                                <li>Hormonal imbalances</li>
                                <li>Radiation exposure</li>
                                <li>Obesity and lack of physical activity</li>
                                <li>Alcohol consumption and smoking</li>
                                <li>Older age and early menstruation or late menopause</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How is Breast Cancer Diagnosed?
                            </h2>
                            <p className="text-gray-700">
                                Diagnosis typically includes a combination of:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Clinical breast exam:</strong> Doctor checks for lumps or abnormalities</li>
                                <li><strong>Mammogram:</strong> X-ray of the breast</li>
                                <li><strong>Ultrasound and MRI:</strong> For more detailed imaging</li>
                                <li><strong>Biopsy:</strong> Sample of tissue examined for cancer cells</li>
                                <li><strong>Genetic testing:</strong> For inherited gene mutations</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Early detection through regular screenings significantly improves treatment outcomes.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                                Treatment Options for Breast Cancer
                            </h2>
                            <p className="text-gray-700">
                                Treatment plans depend on cancer type, stage, and individual health. Common options include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-base font-semibold text-gray-900 mt-2">
                                    Surgery
                                </li>
                                <p className="text-gray-700">
                                    Includes lumpectomy (removal of the tumor) or mastectomy (removal of the entire breast).
                                </p>

                                <li className="text-base font-semibold text-gray-900 mt-2">
                                    Chemotherapy
                                </li>
                                <p className="text-gray-700">
                                    Uses drugs to destroy cancer cells throughout the body, especially if the cancer has spread.
                                </p>

                                <li className="text-base font-semibold text-gray-900 mt-2">
                                    Radiation Therapy
                                </li>
                                <p className="text-gray-700">
                                    High-energy rays target cancer cells in a specific area, often used after surgery.
                                </p>

                                <li className="text-base font-semibold text-gray-900 mt-2">
                                    Hormonal Therapy
                                </li>
                                <p className="text-gray-700">
                                    Blocks hormones like estrogen or progesterone that fuel certain types of breast cancer.
                                </p>

                                <li className="text-base font-semibold text-gray-900 mt-2">
                                    Targeted Therapy
                                </li>
                                <p className="text-gray-700">
                                    Uses drugs that specifically target cancer cell proteins, such as HER2.
                                </p>

                                <li className="text-base font-semibold text-gray-900 mt-2">
                                    Immunotherapy
                                </li>
                                <p className="text-gray-700 mb-5">
                                    Helps the immune system identify and fight cancer cells, used in select cases.
                                </p>
                            </ol>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                                Why Early Detection is Critical?
                            </h2>
                            <p className="text-gray-700 mb-5">
                                Breast cancer often begins without noticeable symptoms. Regular screenings, self-exams, and awareness of changes in the body are key. Early detection leads to higher survival rates and more effective, less invasive treatment options.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                                Support, Recovery & Life After Breast Cancer
                            </h2>
                            <p className="text-gray-700">
                                Life after breast cancer involves medical follow-ups and emotional healing. Recovery plans may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Rehabilitation and physical therapy</li>
                                <li>Psychological support and counseling</li>
                                <li>Dietary and lifestyle adjustments</li>
                                <li>Support groups and survivor networks</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                With continued medical advances, many individuals go on to lead healthy, fulfilling lives after treatment.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Breast cancer is one of the most common yet treatable cancers, especially when detected early. Understanding its types, risk factors, and treatment options empowers individuals to take control of their health and seek timely medical care for the best possible outcome.
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

export default Breast;
