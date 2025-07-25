import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'

const Bonetumours = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/stomach1.avif"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Blood Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Bone Tumours
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Abnormal growths that form inside bones are called bone tumors. They may be malignant (cancerous) or benign (non-cancerous). Malignant bone tumors, particularly primary bone cancers, can be aggressive and need immediate treatment, whereas benign bone tumors are more prevalent and frequently less harmful.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Although they make up less than 1% of all cancers, bone cancers are more frequently found in children, adolescents, and young adults. To improve results and maintain function, early diagnosis and specialized treatment are essential.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Are Bone Tumours?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Bone tumours are broadly classified as:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Benign bone tumours –</strong> Growths that are not cancerous and usually do not spread. Giant cell tumors, osteochondroma, and enchondroma are a few examples.</li>
                                <li><strong>Malignant bone tumours (Bone cancers) –</strong> Malignant growths that have the ability to infiltrate adjacent tissue and travel to other organs.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Malignant bone tumours are either:
                            </p>

                            <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Primary bone cancers –</strong> Originate in the bone itself.</li>
                                <li><strong>Secondary bone cancers (bone metastases) –</strong> Originate in other organs (like breast, lung, or prostate) and spread to the bone. These are more common in adults.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Common Types of Primary Bone Cancer
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Osteosarcoma –</strong> Most common primary bone cancer, usually occurs in teenagers and young adults, often around the knee.</li>
                                <li><strong>Ewing’s sarcoma –</strong> Affects children and adolescents, commonly in the pelvis, thigh, or chest wall.</li>
                                <li><strong>Chondrosarcoma –</strong> Typically occurs in adults over 40 and arises from cartilage-producing cells.</li>
                                <li><strong>Chordoma –</strong> A rare tumour found in the spine or skull base.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Each type behaves differently and requires a specific treatment approach.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes and Risk Factors
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The exact cause of bone tumours is often unknown, but certain factors can increase risk:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Genetic conditions</strong> such as Li-Fraumeni syndrome, hereditary retinoblastoma, and Rothmund-Thomson syndrome.</li>
                                <li><strong>Previous radiation therapy,</strong> especially during childhood or adolescence.</li>
                                <li><strong>Paget’s disease of bone,</strong> which causes abnormal bone growth in older adults.</li>
                                <li><strong>Bone injury or chronic inflammation –</strong> While not proven to directly cause cancer, areas of chronic irritation may be more susceptible.</li>
                            </ul>


                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Lifestyle factors like smoking and drinking alcohol are not strongly associated with bone tumors, in contrast to many other types of cancer.
                            </p>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Signs and Symptoms
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Depending on the tumor's size, location, and whether it is benign or malignant, bone tumor symptoms can change. Typical indicators include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Pain</strong> in the affected bone – initially mild and intermittent, but may become constant and severe, especially at night.</li>
                                <li><strong>Swelling or a lump</strong> over a bone.</li>
                                <li><strong>Limited movement</strong> if the tumour is near a joint.</li>
                                <li><strong>Bone fractures</strong> due to weakening of the bone structure.</li>
                                <li><strong>Fever, weight loss, or fatigue</strong> in advanced or aggressive cases.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Never write off chronic limb pain in kids and teenagers as "growing pains" if it doesn't go away.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                For the right treatment, an accurate diagnosis is essential. Evaluation usually consists of:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>X-ray –</strong> Often the first step to detect bone abnormalities.</li>
                                <li><strong>MRI –</strong> Provides detailed images of the tumour and its relation to surrounding tissue.</li>
                                <li><strong>CT scan – </strong> Useful for assessing bone structure and detecting lung metastases.</li>
                                <li><strong>Bone scan –</strong> To identify other areas of abnormal bone activity.</li>
                                <li><strong>Biopsy –</strong> Essential for confirming the diagnosis and determining the exact type and grade of the tumour.</li>
                                <li><strong>Blood tests –</strong> May include markers like alkaline phosphatase (ALP) or lactate dehydrogenase (LDH) in some cases.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Since the lungs are the most frequent site of metastasis for bone cancers, the tumor is staged after diagnosis to determine how far it has spread.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A multidisciplinary approach is necessary for the management of malignant bone tumors, frequently involving radiation specialists, medical oncologists, surgical oncologists, and rehabilitation teams.
                            </p>


                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The main treatment for localized bone cancers is typically surgical excision of the tumor. Instead of amputation, modern methods strive for limb-sparing surgery. Reconstruction with bone grafts or metal implants may be required in certain situations.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Osteosarcoma and Ewing's sarcoma require chemotherapy, particularly to reduce the tumor prior to surgery (neoadjuvant) and eradicate microscopic disease afterwards (adjuvant). Chondrosarcoma, which has a tendency to be resistant, is less frequently treated with it.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Inoperable tumors or tumor types that respond better to radiation, such as Ewing's sarcoma, may be treated with radiation. In more severe cases, it also helps with pain relief.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Targeted Therapy and Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Targeted treatments and immunotherapy are being investigated in clinical trials and a few selected cases, but they are not yet common for the majority of bone cancers, particularly in cases where the disease is advanced or metastatic.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Rehabilitation and Recovery
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Treatment for bone tumors can result in a lengthy recovery, particularly following surgery. Restoring function and quality of life requires rehabilitation.</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Physical therapy</strong> helps regain strength, mobility, and independence.</li>
                                <li><strong>Psychological support</strong>is important, especially for young patients adjusting to changes in body image or physical ability.</li>
                                <li><strong>Nutritional and general health support</strong> aids healing and strengthens the immune system.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Additionally, patients will need frequent follow-ups to check for metastases or recurrence, particularly in the lungs.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Prognosis and Survival
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The tumor's size, location, stage, type, and response to treatment all affect the prognosis.</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Osteosarcoma and Ewing’s sarcoma</strong> have a favorable prognosis when identified early and treated vigorously; in cases of localized disease, cure rates are between 60 and 70 percent.</li>
                                <li><strong>Chondrosarcoma,</strong> has a better long-term result following total surgical removal because it grows more slowly.</li>
                                <li>Recurrent or metastatic disease is more difficult to treat but newer therapies continue to offer hope.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to See a Specialist
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>It's critical to seek treatment at facilities that have experience managing sarcomas and bone cancers because of the intricacy and rarity of bone tumors. The best chance of recovery is provided by an early, precise diagnosis and professional treatment.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Medical oncologist Dr. Amit Badola is essential in the management of systemic therapies and chemotherapy for primary bone cancers. In order to provide comprehensive, multidisciplinary care that is customized to each patient's particular condition, he collaborates closely with the surgical and radiation teams.</p>
                        </div>

                        <div className="col-span-3">
                            <Type />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonetumours