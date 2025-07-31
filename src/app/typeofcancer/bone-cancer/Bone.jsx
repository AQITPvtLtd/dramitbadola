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
                    <div className="w-full max-w-7xl px-4 relative">
                        <Image
                            src="/typeofcancer/bone-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full h-[200px] sm:h-[300px] object-cover rounded-xl shadow-md"
                            alt="bone-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Main Content */}
                        <div className="relative bg-white px-6 sm:px-10 py-10 shadow-xl rounded-3xl col-span-9 lg:-mt-40">
                            <h1 className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center font-serif">
                                Bone Cancer
                            </h1>

                            <p className="text-base text-gray-700 leading-relaxed mb-6">
                                Bone cancer is a rare but serious form of cancer that begins in the bones. It occurs when abnormal cells grow uncontrollably in the bone tissue. Bone cancer can either originate in the bones (primary) or spread from other parts of the body (secondary/metastatic). Common types include osteosarcoma, Ewing sarcoma, and chondrosarcoma.
                            </p>

                            {/* Types of Bone Cancer */}
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                                Types of Bone Cancer
                            </h2>

                            {/* Osteosarcoma */}
                            <div className="mb-3">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Osteosarcoma</h3>
                                <p className="text-base text-gray-700 leading-relaxed mb-2">
                                    Osteosarcoma is the most common type of bone cancer, often affecting children and young adults. It usually begins in the long bones like the arms and legs.
                                </p>
                                <p className="font-medium text-gray-800">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                    <li>Swelling and pain near a bone</li>
                                    <li>Increased pain with activity or at night</li>
                                    <li>Unexplained bone fractures</li>
                                </ul>
                            </div>

                            {/* Ewing Sarcoma */}
                            <div className="mb-3">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Ewing Sarcoma</h3>
                                <p className="text-base text-gray-700 leading-relaxed mb-2">
                                    Ewing sarcoma primarily occurs in children and teenagers. It typically affects the pelvis, thigh, or chest wall and may also appear in soft tissues.
                                </p>
                                <p className="font-medium text-gray-800">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                    <li>Pain and swelling</li>
                                    <li>Fever and fatigue</li>
                                    <li>Weight loss</li>
                                </ul>
                            </div>

                            {/* Chondrosarcoma */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Chondrosarcoma</h3>
                                <p className="text-base text-gray-700 leading-relaxed mb-2">
                                    Chondrosarcoma develops in the cartilage cells and is more common in adults. It typically grows slowly but can become aggressive.
                                </p>
                                <p className="font-medium text-gray-800">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                    <li>Dull, aching pain</li>
                                    <li>Swelling or a mass on the bone</li>
                                    <li>Reduced joint movement</li>
                                </ul>
                            </div>

                            {/* Causes */}
                            <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-2">
                                What Causes Bone Cancer?
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-2">
                                The exact cause of bone cancer is not fully understood, but several risk factors have been identified:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
                                <li>Genetic mutations</li>
                                <li>Previous radiation therapy</li>
                                <li>Inherited conditions (e.g., Li-Fraumeni syndrome)</li>
                                <li>Paget’s disease of bone</li>
                                <li>History of bone injuries or chronic inflammation</li>
                            </ul>

                            {/* Diagnosis */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                How is Bone Cancer Diagnosed?
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-2">
                                Bone cancer diagnosis may involve the following steps:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                                <li><strong>Physical exam:</strong> to identify pain, lumps, or swelling</li>
                                <li><strong>Imaging tests:</strong> X-rays, MRI, CT scans to view the tumor</li>
                                <li><strong>Biopsy:</strong> removing a tissue sample for lab analysis</li>
                                <li><strong>Bone scans:</strong> to detect bone damage or spread</li>
                            </ul>
                            <p className="text-base text-gray-700 mb-8">
                                Early diagnosis improves the chances of successful treatment and recovery.
                            </p>

                            {/* Treatment */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Treatment Options for Bone Cancer
                            </h2>
                            <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-4">
                                <li>
                                    <span className="font-semibold text-gray-900">Surgery:</span> The most effective way to remove cancerous tissue and preserve function.
                                </li>
                                <li>
                                    <span className="font-semibold text-gray-900">Chemotherapy:</span> Drug treatment to kill cancer cells, often used for Ewing sarcoma and osteosarcoma.
                                </li>
                                <li>
                                    <span className="font-semibold text-gray-900">Radiation Therapy:</span> High-energy beams target and destroy cancer cells, used before or after surgery.
                                </li>
                                <li>
                                    <span className="font-semibold text-gray-900">Targeted Therapy:</span> Focuses on specific molecules to block cancer growth, especially useful in advanced stages.
                                </li>
                            </ol>

                            {/* Early Detection */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Why Early Detection is Critical?
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-8">
                                Bone cancer symptoms often overlap with common orthopedic conditions. Recognizing persistent pain, swelling, or fractures that don’t heal is vital. Early detection leads to more treatment options and better outcomes.
                            </p>

                            {/* Recovery */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Support, Recovery & Life After Bone Cancer
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-3">
                                Recovering from bone cancer is both physical and emotional. Comprehensive care includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                                <li>Physical therapy to regain strength and mobility</li>
                                <li>Emotional support through counseling</li>
                                <li>Balanced nutrition and lifestyle modifications</li>
                                <li>Peer support and survivorship programs</li>
                            </ul>
                            <p className="text-base text-gray-700 mb-8">
                                With advances in medicine, many bone cancer patients go on to live full and active lives post-treatment.
                            </p>

                            {/* Conclusion */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                Conclusion
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Bone cancer is a challenging diagnosis, but early detection and proper treatment significantly improve prognosis. Knowing the types, symptoms, and treatment options empowers patients and families to take timely action and embrace recovery with confidence.
                            </p>
                        </div>

                        {/* Side Panel */}
                        <div className="col-span-3 hidden lg:block sticky top-24 h-fit">
                            <Type />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bone;
