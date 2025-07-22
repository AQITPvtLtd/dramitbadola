import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'

const Neuroendocrine = () => {
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
                                Neuroendocrine Tumours (NETs)
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A rare and varied class of cancers known as neuroendocrine tumors (NETs) develops from neuroendocrine cells, which are specialized cells that react to signals from the nervous system by releasing hormones into the bloodstream. Since these cells are distributed throughout the body, NETs can develop in a number of organs, but they most frequently do so in the lungs, pancreas, and gastrointestinal tract.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Due in part to increased awareness and better diagnostic tools, NETs—once thought to be uncommon and slow-growing—are now being diagnosed more frequently. Their behavior varies greatly; some can be aggressive and spread quickly, while others grow slowly and may not cause issues for years.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Are Neuroendocrine Tumours?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Cells with both nerve and endocrine (hormone-producing) characteristics give rise to NETs. These tumors can be either non-functional, meaning they don't produce any discernible hormone-related effects, or functional, meaning they secrete excess hormones that cause particular symptoms.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>NETs are categorized as follows based on their place of origin:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Gastrointestinal NETs –</strong> Frequently found in the stomach, rectum, or small intestine.</li>
                                <li><strong>Pancreatic NETs (pNETs) –</strong> Can be either functional (e.g., insulinomas, gastrinomas) or non-functional.</li>
                                <li><strong>Pulmonary NETs –</strong> Found in the lungs, including typical and atypical carcinoid tumours.</li>
                                <li><strong>Other rare NETs –</strong> Can occur in the thymus, adrenal glands, or elsewhere.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes and Risk Factors
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The precise cause of NETs is typically unknown. Nonetheless, a few environmental and genetic factors might be involved:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Genetic syndromes</strong> such as Multiple Endocrine Neoplasia type 1 (MEN1), Von Hippel-Lindau disease, and Neurofibromatosis type 1 increase the risk.</li>
                                <li>A family history of NETs or endocrine tumours may also raise susceptibility.</li>
                                <li>Prolonged inflammation in the gastrointestinal tract (such as in chronic atrophic gastritis) may increase the risk of certain NETs.</li>
                                <li>While NETs are not generally linked to smoking or alcohol like many other cancers, pulmonary NETs may have some association with tobacco use.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms and Clinical Presentation
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The location and functionality of NETs determine their symptoms.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Non-functional NETs are frequently discovered by accident during imaging or endoscopy and go unnoticed for years. When symptoms do show up, they could include:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Abdominal pain or discomfort</li>
                                <li>Changes in bowel habits</li>
                                <li>Weight loss or fatigue</li>
                                <li>A lump or mass</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify mt-4'>Conversely, functional NETs can result in certain syndromes and overproduction of hormones:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 lg:text-justify">
                                <li><strong>Carcinoid syndrome –</strong> Caused by tumors that produce serotonin, particularly those in the small intestine. Skin flushing, diarrhea, wheezing, and heart valve issues are among the symptoms.</li>
                                <li><strong>Insulinomas –</strong> Lead to low blood sugar, causing weakness, sweating, and confusion.</li>
                                <li><strong>Gastrinomas  –</strong> Cause excessive stomach acid, leading to ulcers (Zollinger-Ellison syndrome).</li>
                                <li><strong>Glucagonomas or VIPomas  –</strong> Can cause skin rashes, diarrhoea, and electrolyte imbalances.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Because symptoms may mimic more common conditions, diagnosis is often delayed.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Since NETs can differ greatly in their growth and hormone behavior, an early and precise diagnosis is crucial. There are multiple steps involved in diagnosis:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Blood and urine tests</strong> to measure hormone levels and tumour markers like chromogranin A (CgA) or 5-HIAA (in urine).</li>
                                <li><strong>Imaging tests,</strong> including CT scans, MRIs, and specialised scans such as Ga-68 DOTATATE PET-CT, which detects somatostatin receptor-positive tumours.</li>
                                <li><strong>Endoscopy or colonoscopy,</strong> if gastrointestinal NETs are suspected.</li>
                                <li><strong>Biopsy,</strong> either through endoscopy or image-guided methods, confirms the diagnosis and helps determine the tumour’s grade.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>NETs are ranked according to their rate of growth (Ki-67 index and mitotic count). Size, local spread, and metastasis—most frequently to the liver or lymph nodes—are taken into consideration when staging them.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The tumor's grade, location, functionality, and spread all affect how it is treated.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>For many localized NETs, surgical excision is still the first line of treatment. It might provide a treatment for diseases in their early stages. Surgery to remove the majority of the tumor (debulking) may be necessary even in some advanced cases.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Medical Therapy
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Somatostatin analogues (SSAs)</strong> such as lanreotide or octreotide, are used to slow the growth of tumors in receptor-positive NETs and regulate hormone symptoms.</li>
                                <li><strong>Targeted therapies,</strong> such as sunitinib or everolimus, are frequently used in cases of metastatic disease or pancreatic NETs.</li>
                                <li><strong>Chemotherapy</strong> may be applied to aggressive, high-grade NETs, particularly neuroendocrine carcinomas with poor differentiation.</li>
                            </ul>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Peptide Receptor Radionuclide Therapy (PRRT)
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>In order to specifically kill NET cells, radioactive materials are affixed to somatostatin analogs in this type of targeted radiation therapy. In patients with progressive midgut NETs, PRRT has demonstrated notable advantages.</p>
                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Supportive and Hormonal Symptom Management
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Controlling hormone-related symptoms is a crucial aspect of treatment for functional tumors. Additionally, patients may need medication to treat electrolyte imbalance, diarrhea, or ulcers.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Monitoring and Follow-up
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Because NETs grow slowly and have the potential to recur, they frequently need to be monitored over an extended period of time. Typical follow-up consists of:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Periodic imaging (CT/MRI or PET-CT)</li>
                                <li>Monitoring hormone levels or tumour markers</li>
                                <li>Assessment of quality of life and symptom control</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>To identify changes in tumor behavior, even stable NETs might require ongoing monitoring.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Outlook and Living with NETs
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Even though NETs are uncommon, they frequently have better prognoses than other cancers, particularly if detected early. Numerous low-grade NETs are treatable as long-term illnesses. Both survival and symptom control have significantly increased thanks to developments in imaging and systemic treatments.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>With the correct care and support, many patients with NETs can lead full and active lives, though living with a NET may necessitate constant medication, dietary adjustments, and routine monitoring.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Expertise Matters
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>It's critical to receive treatment from a team knowledgeable about NETs due to their complexity and variability. The best results are obtained from a customized treatment plan that incorporates supportive, surgical, and medical methods.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Neuroendocrine tumors are actively treated by medical oncologist Dr. Amit Badola. As part of an all-encompassing, multidisciplinary care model, his strategy makes use of somatostatin analogues, targeted therapy, chemotherapy, and advanced nuclear medicine options.</p>
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

export default Neuroendocrine