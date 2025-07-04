"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Colorectal = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f4fcfc]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/Colorectal.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Colorectal Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: 'Roboto Slab, serif' }}
                            >
                                Colorectal Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Colorectal cancer is a term used to describe cancer that starts in the colon (large intestine) or rectum. It usually begins as small, noncancerous polyps that form on the inner lining and can become cancerous over time. Colorectal cancer is one of the most common and treatable forms of cancer when caught early through regular screening.
                            </p>

                            {/* Types of Colorectal Cancer */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Types of Colorectal Cancer</h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">Adenocarcinoma</li>
                                <p className="text-gray-700 mb-3">
                                    The most common type of colorectal cancer, accounting for over 90% of cases. It begins in cells that produce mucus and line the colon and rectum.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Blood in stool</li>
                                    <li>Changes in bowel habits</li>
                                    <li>Unexplained weight loss</li>
                                    <li>Fatigue and weakness</li>
                                </ul>

                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">Gastrointestinal Stromal Tumors (GISTs)</li>
                                <p className="text-gray-700 mb-3">
                                    Rare tumors that form in the connective tissue of the digestive tract, including the colon and rectum.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Abdominal pain or mass</li>
                                    <li>Bleeding in the GI tract</li>
                                    <li>Nausea and vomiting</li>
                                </ul>

                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">Lymphoma</li>
                                <p className="text-gray-700 mb-3">
                                    Though rare, lymphoma can start in the colon or rectum, particularly in the immune system cells.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Persistent diarrhea or constipation</li>
                                    <li>Stomach cramping</li>
                                    <li>Appetite loss</li>
                                </ul>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">What Causes Colorectal Cancer?</h2>
                            <p className="text-gray-700">
                                Colorectal cancer typically develops over time due to a mix of genetic and environmental factors. Common causes and risk factors include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Family history of colon or rectal cancer</li>
                                <li>Inflammatory bowel diseases like Crohn’s or ulcerative colitis</li>
                                <li>Diets low in fiber and high in red/processed meat</li>
                                <li>Smoking and heavy alcohol use</li>
                                <li>Physical inactivity and obesity</li>
                                <li>Inherited syndromes (Lynch syndrome, FAP)</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How is Colorectal Cancer Diagnosed?</h2>
                            <p className="text-gray-700">
                                Early diagnosis is essential and usually begins with screening. Common methods include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Colonoscopy:</strong> Examines the entire colon and rectum for polyps or tumors</li>
                                <li><strong>Fecal Immunochemical Test (FIT):</strong> Detects blood in stool</li>
                                <li><strong>Stool DNA test:</strong> Finds altered DNA and blood in stool</li>
                                <li><strong>CT colonography:</strong> Produces detailed images of the colon</li>
                                <li><strong>Biopsy:</strong> Confirms if a growth is cancerous</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Screening is recommended starting at age 45 or earlier if there is a family history or other risk factors.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">Treatment Options for Colorectal Cancer</h2>
                            <p className="text-gray-700">
                                Treatment depends on the stage, location, and patient’s overall health. Common options include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-2">Surgery</li>
                                <p className="text-gray-700">
                                    Removes cancerous tissue or part of the colon/rectum. May include a colostomy in some cases.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Chemotherapy</li>
                                <p className="text-gray-700">
                                    Uses drugs to kill or stop the growth of cancer cells. Often used after surgery.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Radiation Therapy</li>
                                <p className="text-gray-700">
                                    Commonly used for rectal cancer to shrink tumors before surgery or relieve symptoms.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Targeted Therapy</li>
                                <p className="text-gray-700">
                                    Focuses on specific proteins or genetic mutations that help the cancer grow.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Immunotherapy</li>
                                <p className="text-gray-700 mb-5">
                                    Helps the body’s immune system recognize and attack cancer cells, especially in cases with genetic instability.
                                </p>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Why Early Detection is Critical?</h2>
                            <p className="text-gray-700 mb-5">
                                Colorectal cancer often develops slowly and can be prevented with regular screening. When caught early, treatment is more effective, less invasive, and has a higher success rate.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Support, Recovery & Life After Colorectal Cancer</h2>
                            <p className="text-gray-700">
                                Recovery from colorectal cancer depends on the stage and treatment type. Ongoing care includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Nutritional counseling and diet changes</li>
                                <li>Exercise and rehabilitation programs</li>
                                <li>Colostomy care if needed</li>
                                <li>Emotional and psychological support</li>
                                <li>Regular medical checkups and follow-up scans</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                With early detection and a strong recovery plan, many patients live long, healthy lives after treatment.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Conclusion</h2>
                            <p className="text-gray-700">
                                Colorectal cancer is one of the most preventable and treatable cancers today. Through lifestyle changes, awareness, and routine screening, lives can be saved. Timely diagnosis and proper treatment make a significant difference in recovery and quality of life.
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

export default Colorectal;
