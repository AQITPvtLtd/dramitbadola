import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'

const Sarcoma = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/sarcoma.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="sarcoma"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Sarcoma
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A rare class of cancers known as sarcomas develops in the body's connective tissues, which include the bones, muscles, fat, blood vessels, nerves, and fibrous tissues. Sarcomas form in the tissues that support and connect various body parts, as opposed to carcinomas, which originate from epithelial cells (such as those in the breast, lung, or colon).
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Sarcomas can develop practically anywhere in the body due to their origin. They are frequently divided into two primary categories: soft tissue sarcomas and bone sarcomas, each of which has several subtypes. Although some types are more prevalent in one age group than the other, sarcomas can affect both adults and children.
                            </p>



                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Are the Types of Sarcoma?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Sarcomas are broadly divided into:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Soft tissue sarcomas:</strong> These include cancers of the nerves (malignant peripheral nerve sheath tumors), blood vessels (angiosarcoma), muscle (leiomyosarcoma, rhabdomyosarcoma), fat (liposarcoma), and fibrous tissue (fibrosarcoma).</li>
                                <li><strong>Bone sarcomas:</strong> Such as osteosarcoma, Ewing’s sarcoma, and chondrosarcoma.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>There are more than 70 distinct subtypes of sarcoma, and they can differ significantly in how they behave. While some are indolent and grow slowly over many years, others are aggressive and grow quickly.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Sarcoma?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The cause of sarcoma is typically unknown. Nonetheless, a few risk factors have been found:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Genetic conditions</strong> such as familial retinoblastoma, neurofibromatosis type 1, and Li-Fraumeni syndrome raise the risk.</li>
                                <li><strong>Previous radiation therapy,</strong> may eventually result in radiation-induced sarcoma, particularly in childhood or early adulthood.</li>
                                <li><strong>Exposure to certain chemicals like</strong> dioxins and vinyl chloride have been connected to uncommon types of sarcoma.</li>
                                <li><strong>Chronic swelling or lymphedema,</strong> especially after cancer treatment, can sometimes lead to angiosarcoma.</li>
                                <li> A <strong>history of bone disorders,</strong> such as Paget’s disease, may increase the risk of bone sarcoma in older adults.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>That said, most people who develop sarcoma have no identifiable risk factor.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Signs and Symptoms
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>In their early stages, sarcomas frequently show few symptoms, which makes diagnosis difficult. The most typical presentations consist of:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>A <strong>painless lump</strong> or swelling, often in the arm, leg, or abdomen</li>
                                <li>Persistent or worsening <strong>pain,</strong> especially in bone sarcomas</li>
                                <li><strong>Limited mobility</strong> or nerve compression if the tumour presses against nearby structures</li>
                                <li><strong>Fractures</strong> in bone sarcomas due to weakening of the bone</li>
                                <li><strong>Weight loss, fatigue,</strong> or general malaise in advanced disease</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>These symptoms are occasionally disregarded or initially misdiagnosed because they can mimic benign conditions like lipomas or muscle strains. Any deep, firm, and growing lump needs to be examined further.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Sarcoma diagnosis necessitates a combination of imaging, biopsy, and clinical evaluation:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>MRI</strong>is frequently the recommended imaging method for soft tissue sarcomas, particularly those that affect the limbs.</li>
                                <li><strong>CT scans</strong> may be applied to bone sarcomas or to detect metastases, especially to the lungs.</li>
                                <li><strong>PET-CT</strong> can direct treatment choices and aid in assessing the full extent of the illness.</li>
                                <li><strong>Core needle biopsy</strong> or surgical biopsy is necessary to determine the sarcoma subtype and confirm the diagnosis.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Following diagnosis, the tumor is staged and graded (low, intermediate, or high grade) to determine its aggressiveness, size, depth, and spread.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>A multidisciplinary team comprising surgical oncologists, medical oncologists, radiation oncologists, radiologists, and pathologists is frequently needed for the highly individualized treatment of sarcoma.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The mainstay of treatment for the majority of localized sarcomas is surgery. Removing the tumor while leaving a visible margin of healthy tissue is the aim. When it is feasible, limb-sparing surgery is preferred to amputation for extremity sarcomas.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Radiation Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>To lower the chance of recurrence, radiation therapy can be administered either before or after surgery. It's particularly useful when getting precise surgical margins is challenging.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Chemotherapy can be administered either before (neoadjuvant) or after surgery and is frequently used for aggressive or high-grade sarcomas. Rhabdomyosarcoma and Ewing's sarcoma are two sarcoma subtypes that are especially sensitive to chemotherapy.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Targeted Therapy and Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>According to tumor genetics and receptor status, more recent therapies like immunotherapy (e.g., immune checkpoint inhibitors in specific subtypes) or targeted therapy (e.g., pazopanib, trabectedin) may be taken into consideration in cases of advanced or metastatic disease.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Rehabilitation and Follow-Up
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Following major surgery or radiation therapy, recovery from sarcoma treatment may entail:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Physical therapy</strong> to restore mobility and strength</li>
                                <li><strong>Pain management</strong></li>
                                <li><strong>Psychological support</strong> to help cope with disfigurement or functional limitations</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Because sarcomas can recur or spread even years after initial treatment, long-term follow-up is essential. Ongoing surveillance includes routine physical examinations and imaging.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Outlook and Survival
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Prognosis in sarcoma depends on multiple factors:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Tumour size and depth</li>
                                <li>Grade and subtype</li>
                                <li>Whether it has spread (metastatic disease)</li>
                                <li>Patient’s age and overall health</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>When treated promptly, localized sarcomas have good survival rates, frequently exceeding 70–80%. Although advanced disease is more difficult to treat, many patients are finding that new treatments are giving them hope and extending their survival.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to See a Specialist
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>It is crucial to be assessed and treated at a facility with experience in treating sarcomas due to their complexity and rarity. A sarcoma specialist can be consulted early to prevent misdiagnosis and guarantee the best possible treatment planning right away.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Medical oncologist Dr. Amit Badola actively treats sarcomas systemically. For soft tissue and bone sarcomas, he specializes in chemotherapy, targeted therapy, and immunotherapy, all of which are provided as a part of an all-encompassing, team-based approach that emphasizes evidence-based and customized care.</p>
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

export default Sarcoma