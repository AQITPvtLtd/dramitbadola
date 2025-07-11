"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Cervical = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/cervical.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Cervical Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl lg:px-8">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Cervical Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Cervical cancer is a type of cancer that begins in the cervix—the lower part of the uterus that connects to the vagina. It typically develops slowly over time and is most commonly caused by persistent infection with high-risk types of human papillomavirus (HPV). Early detection through screening can help prevent and treat cervical cancer effectively.
                            </p>

                            {/* Types of Cervical Cancer */}
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Cervical Cancer
                            </h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-lg font-semibold text-gray-900 mt-3 mb-3">
                                    Squamous Cell Carcinoma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    This is the most common type, making up about 80–90% of cervical cancer cases. It starts in the thin, flat cells lining the outer cervix.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Abnormal vaginal bleeding (especially after intercourse)</li>
                                    <li>Pelvic pain or discomfort</li>
                                    <li>Watery or foul-smelling vaginal discharge</li>
                                </ul>

                                <li className="text-lg font-bold text-gray-900 mt-3 mb-3">
                                    Adenocarcinoma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    Adenocarcinoma develops in the glandular cells of the cervical canal. It is less common but can be harder to detect through routine Pap tests.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Menstrual irregularities</li>
                                    <li>Bleeding between periods</li>
                                    <li>Pain during intercourse</li>
                                </ul>
                            </ol>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Cervical Cancer?
                            </h2>
                            <p className="text-gray-700">
                                The primary cause of cervical cancer is infection with high-risk types of human papillomavirus (HPV), but other risk factors include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Multiple sexual partners</li>
                                <li>Early sexual activity</li>
                                <li>Weakened immune system</li>
                                <li>Smoking and tobacco use</li>
                                <li>Long-term use of birth control pills</li>
                                <li>Lack of regular Pap or HPV testing</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                How is Cervical Cancer Diagnosed?
                            </h2>
                            <p className="text-gray-700">
                                Cervical cancer can be detected early through routine screenings and follow-up diagnostics:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Pap test:</strong> Detects precancerous or abnormal cells</li>
                                <li><strong>HPV test:</strong> Identifies high-risk strains of the virus</li>
                                <li><strong>Colposcopy:</strong> A close examination of the cervix using a magnifying device</li>
                                <li><strong>Biopsy:</strong> Confirms the presence of cancerous cells</li>
                                <li><strong>Imaging (CT, MRI):</strong> To determine cancer stage and spread</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Regular cervical screening is the most effective way to prevent cervical cancer.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                                Treatment Options for Cervical Cancer
                            </h2>
                            <p className="text-gray-700">
                                The treatment of cervical cancer depends on the stage and the patient’s overall health. Common treatment options include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-lg font-semibold text-gray-900 mt-2">
                                    Surgery
                                </li>
                                <p className="text-gray-700">
                                    May involve removal of the cancerous tissue, cervix, or uterus (hysterectomy), especially in early stages.
                                </p>

                                <li className="text-lg font-semibold text-gray-900 mt-2">
                                    Radiation Therapy
                                </li>
                                <p className="text-gray-700">
                                    High-energy rays are used to destroy cancer cells or shrink tumors.
                                </p>

                                <li className="text-lg font-semibold text-gray-900 mt-2">
                                    Chemotherapy
                                </li>
                                <p className="text-gray-700">
                                    Drugs are administered to kill cancer cells, often used in advanced stages or with radiation.
                                </p>

                                <li className="text-lg font-semibold text-gray-900 mt-2">
                                    Targeted Therapy
                                </li>
                                <p className="text-gray-700">
                                    Focuses on specific proteins or genes that help cancer grow, often combined with other treatments.
                                </p>

                                <li className="text-lg font-semibold text-gray-900 mt-2">
                                    Immunotherapy
                                </li>
                                <p className="text-gray-700 mb-5">
                                    Boosts the immune system to fight cervical cancer more effectively, used in certain advanced cases.
                                </p>
                            </ol>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                                Why Early Detection is Critical?
                            </h2>
                            <p className="text-gray-700 mb-5">
                                Cervical cancer is highly preventable and treatable when detected early. Regular Pap tests, HPV vaccination, and timely follow-ups reduce the risk of invasive cancer and improve survival rates significantly.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                                Support, Recovery & Life After Cervical Cancer
                            </h2>
                            <p className="text-gray-700">
                                Recovering from cervical cancer involves emotional healing and medical follow-up. Supportive care includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Psychological counseling</li>
                                <li>Sexual and reproductive health support</li>
                                <li>Rehabilitation and physical wellness programs</li>
                                <li>Nutrition and lifestyle guidance</li>
                                <li>Support groups for survivors</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Many women go on to live healthy, active lives after treatment with regular medical care and personal support systems.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Cervical cancer is one of the most preventable and treatable cancers in women. Awareness, regular screening, HPV vaccination, and early medical intervention are the most powerful tools to combat this disease and ensure a healthy future.
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

export default Cervical;
