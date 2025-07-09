"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Bone = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/bone.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Bone Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Bone Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Bone cancer is a rare but serious form of cancer that begins in the bones. It occurs when abnormal cells grow uncontrollably in the bone tissue. Bone cancer can either originate in the bones (primary) or spread from other parts of the body (secondary/metastatic). Common types include osteosarcoma, Ewing sarcoma, and chondrosarcoma.
                            </p>

                            {/* Types of Bone Cancer */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Bone Cancer
                            </h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                    Osteosarcoma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    Osteosarcoma is the most common type of bone cancer, often affecting children and young adults. It usually begins in the long bones like the arms and legs.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Swelling and pain near a bone</li>
                                    <li>Increased pain with activity or at night</li>
                                    <li>Unexplained bone fractures</li>
                                </ul>

                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                    Ewing Sarcoma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    Ewing sarcoma primarily occurs in children and teenagers. It typically affects the pelvis, thigh, or chest wall and may also appear in soft tissues.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Pain and swelling</li>
                                    <li>Fever and fatigue</li>
                                    <li>Weight loss</li>
                                </ul>

                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                    Chondrosarcoma
                                </li>
                                <p className="text-gray-700 mb-3">
                                    Chondrosarcoma develops in the cartilage cells and is more common in adults. It typically grows slowly but can become aggressive.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Dull, aching pain</li>
                                    <li>Swelling or a mass on the bone</li>
                                    <li>Reduced joint movement</li>
                                </ul>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Bone Cancer?
                            </h2>
                            <p className="text-gray-700">
                                The exact cause of bone cancer is not fully understood, but several risk factors have been identified:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Genetic mutations</li>
                                <li>Previous radiation therapy</li>
                                <li>Inherited conditions (e.g., Li-Fraumeni syndrome)</li>
                                <li>Paget’s disease of bone</li>
                                <li>History of bone injuries or chronic inflammation</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                How is Bone Cancer Diagnosed?
                            </h2>
                            <p className="text-gray-700">Bone cancer diagnosis may involve the following steps:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Physical exam: </strong> to identify pain, lumps, or swelling</li>
                                <li><strong>Imaging tests (X-rays, MRI, CT scans): </strong> to view the tumor</li>
                                <li><strong>Biopsy: </strong> removing a tissue sample for lab analysis</li>
                                <li><strong>Bone scans: </strong> to detect bone damage or spread</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Early diagnosis improves the chances of successful treatment and recovery.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">
                                Treatment Options for Bone Cancer
                            </h2>
                            <p className="text-gray-700">
                                Treatment varies depending on the type, location, and stage of cancer. Common approaches include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Surgery
                                </li>
                                <p className="text-gray-700">
                                    The most effective way to remove cancerous tissue and preserve function.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Chemotherapy
                                </li>
                                <p className="text-gray-700">
                                    Drug treatment to kill cancer cells, often used for Ewing sarcoma and osteosarcoma.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Radiation Therapy
                                </li>
                                <p className="text-gray-700">
                                    High-energy beams target and destroy cancer cells, used before or after surgery.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">
                                    Targeted Therapy
                                </li>
                                <p className="text-gray-700">
                                    Focuses on specific molecules to block cancer growth, especially useful in advanced stages.
                                </p>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">
                                Why Early Detection is Critical?
                            </h2>
                            <p className="text-gray-700 mb-5">
                                Bone cancer symptoms often overlap with common orthopedic conditions. Recognizing persistent pain, swelling, or fractures that don’t heal is vital. Early detection leads to more treatment options and better outcomes.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">
                                Support, Recovery & Life After Bone Cancer
                            </h2>
                            <p className="text-gray-700">
                                Recovering from bone cancer is both physical and emotional. Comprehensive care includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Physical therapy to regain strength and mobility</li>
                                <li>Emotional support through counseling</li>
                                <li>Balanced nutrition and lifestyle modifications</li>
                                <li>Peer support and survivorship programs</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                With advances in medicine, many bone cancer patients go on to live full and active lives post-treatment.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                                Conclusion
                            </h2>
                            <p className="text-gray-700">
                                Bone cancer is a challenging diagnosis, but early detection and proper treatment significantly improve prognosis. Knowing the types, symptoms, and treatment options empowers patients and families to take timely action and embrace recovery with confidence.
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

export default Bone;
