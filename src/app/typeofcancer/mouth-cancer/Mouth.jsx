"use client";
import React from 'react';
import Image from 'next/image';
import Type from '@/components/common/Type';

const Mouth = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-gray-50">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/mouth.png"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Mouth Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl md:text-4xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: 'Roboto Slab, serif' }}
                            >
                                Mouth & Oral Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed">
                                Oral cancer refers to cancer that develops in any part of the mouth, including the lips, tongue, cheeks, gums, roof, and floor of the mouth. It is a serious condition that can be life-threatening if not detected and treated early. Most cases begin in the squamous cells lining the mouth and are strongly linked to lifestyle factors such as tobacco and alcohol use.
                            </p>

                            {/* Types of Oral Cancer */}
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Types of Oral Cancer</h2>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">Squamous Cell Carcinoma</li>
                                <p className="text-gray-700 mb-3">
                                    The most common type of oral cancer, it originates in the flat squamous cells that line the mouth and throat.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Persistent mouth ulcers or sores</li>
                                    <li>White or red patches in the mouth</li>
                                    <li>Difficulty chewing or swallowing</li>
                                    <li>Lumps or thickening in the mouth or neck</li>
                                </ul>

                                <li className="text-xl font-bold text-gray-900 mt-8 mb-3">Verrucous Carcinoma</li>
                                <p className="text-gray-700 mb-3">
                                    A rare, slow-growing type of cancer that appears as a wart-like lesion, typically affecting older individuals.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Warty growths in the mouth</li>
                                    <li>Persistent thick white patches</li>
                                    <li>Foul breath or taste</li>
                                </ul>

                                <li className="text-xl font-semibold text-gray-900 mt-8 mb-3">Minor Salivary Gland Carcinomas</li>
                                <p className="text-gray-700 mb-3">
                                    These are less common and occur in the glands found throughout the mouth and throat.
                                </p>
                                <p className="text-semibold text-gray-700">Common symptoms:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                    <li>Painful or painless swelling in the mouth</li>
                                    <li>Dry mouth</li>
                                    <li>Difficulty opening the mouth fully</li>
                                </ul>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">What Causes Oral Cancer?</h2>
                            <p className="text-gray-700">
                                Oral cancer can be caused by a combination of lifestyle and genetic factors. Common risk factors include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Tobacco use (smoking and smokeless)</li>
                                <li>Heavy alcohol consumption</li>
                                <li>Human papillomavirus (HPV) infection</li>
                                <li>Excessive sun exposure to the lips</li>
                                <li>Poor oral hygiene</li>
                                <li>Family history of cancer</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How is Oral Cancer Diagnosed?</h2>
                            <p className="text-gray-700">
                                Diagnosis begins with a clinical exam and is followed by imaging or biopsy to confirm the cancer type:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Physical exam:</strong> Inspection of mouth, throat, and neck for lumps or abnormalities</li>
                                <li><strong>Biopsy:</strong> Removal and testing of tissue to confirm cancer</li>
                                <li><strong>Imaging tests:</strong> MRI, CT scan, or X-ray to assess spread</li>
                                <li><strong>Endoscopy:</strong> Examining the throat or nose with a small camera</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Early detection is critical to prevent the spread and increase the effectiveness of treatment.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">Treatment Options for Oral Cancer</h2>
                            <p className="text-gray-700">
                                Treatment depends on the location, size, stage, and overall health of the patient. Common options include:
                            </p>
                            <ol className="list-decimal list-inside">
                                <li className="text-xl font-semibold text-gray-900 mt-2">Surgery</li>
                                <p className="text-gray-700">
                                    Surgical removal of the tumor and possibly affected tissue or lymph nodes.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Radiation Therapy</li>
                                <p className="text-gray-700">
                                    High-energy beams target and destroy cancer cells. Often used post-surgery or for early-stage cancers.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Chemotherapy</li>
                                <p className="text-gray-700">
                                    Uses drugs to kill cancer cells. Typically used for advanced or recurrent cases.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Targeted Therapy</li>
                                <p className="text-gray-700">
                                    Focuses on specific molecules involved in the cancer's growth.
                                </p>

                                <li className="text-xl font-semibold text-gray-900 mt-2">Immunotherapy</li>
                                <p className="text-gray-700 mb-5">
                                    Helps activate the immune system to recognize and fight cancer cells, especially in advanced-stage cancer.
                                </p>
                            </ol>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Why Early Detection is Critical?</h2>
                            <p className="text-gray-700 mb-5">
                                Oral cancer symptoms are often overlooked in early stages. Detecting cancer early leads to better outcomes, less invasive treatment, and a higher survival rate. Regular dental check-ups are essential.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-2">Support, Recovery & Life After Oral Cancer</h2>
                            <p className="text-gray-700">
                                Life after oral cancer involves medical and emotional support. Recovery options include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li>Speech and swallowing therapy</li>
                                <li>Reconstructive surgery (if needed)</li>
                                <li>Nutritional and psychological counseling</li>
                                <li>Smoking and alcohol cessation programs</li>
                                <li>Regular monitoring for recurrence</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                With early intervention and the right care plan, many patients recover and lead fulfilling lives.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Conclusion</h2>
                            <p className="text-gray-700">
                                Mouth and oral cancer is preventable, especially by avoiding risk factors like tobacco and alcohol. Early diagnosis, awareness of symptoms, and prompt treatment significantly improve survival rates. Maintaining good oral hygiene and routine checkups are key to prevention and early detection.
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

export default Mouth;
