import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Kidney = () => {
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
                                Kidney Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Renal cell carcinoma (RCC), another name for kidney cancer, is a kind of cancer that starts in the tissues of the kidneys, which are bean-shaped organs in the back of the abdomen that aid in blood waste removal, blood pressure regulation, and fluid balance.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                One of the top ten most prevalent cancers in adults is kidney cancer. More cases are being identified early, frequently before symptoms even manifest, as a result of improvements in imaging and treatment. Awareness is still crucial because some kidney cancers can still be aggressive, particularly if they are not discovered in time.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Kidney Cancer
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Renal cell carcinomas, which start in the lining of the kidney's tiny tubes, account for the majority of kidney cancers. Among the subtypes are:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Clear cell RCC </strong> (most common)</li>
                                <li><strong>Papillary RCC</strong></li>
                                <li><strong>Chromophobe RCC</strong></li>
                                <li><strong>Collecting duct carcinoma</strong> and  <strong>medullary carcinoma </strong>(rare and aggressive)</li>
                            </ul>


                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Other less frequent varieties include Wilms tumor, which primarily affects children, and transitional cell carcinoma, which affects the renal pelvis.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Kidney Cancer?
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The exact cause is often unclear, but several risk factors have been identified:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Smoking – </strong>increases risk by nearly double</li>
                                <li><strong>Obesity – </strong>associated with hormonal and metabolic changes</li>
                                <li><strong>High blood pressure (hypertension) – </strong>even when controlled</li>
                                <li><strong>Family history – </strong>especially of hereditary conditions like von Hippel-Lindau (VHL) disease</li>
                                <li><strong>Chronic kidney disease or long-term dialysis</strong></li>
                                <li><strong>Occupational exposures – </strong>such as asbestos, cadmium, or certain solvents</li>
                                <li><strong>Genetic mutations – </strong>either inherited or acquired over time</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                It's crucial to remember that kidney cancer can strike people who have no known risk factors.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms and Signs
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Kidney cancer frequently shows no symptoms in its early stages. During imaging for other problems, many cases are unintentionally found. But as the tumor spreads, symptoms could include:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Blood in the urine </strong>(hematuria) – may appear pink, red, or cola-coloured</li>
                                <li><strong>Flank pain – </strong>on one side of the lower back</li>
                                <li><strong>A mass or lump </strong>in the abdomen or side</li>
                                <li><strong>Unexplained weight loss</strong></li>
                                <li><strong>Persistent fatigue</strong></li>
                                <li><strong>Fever not caused by infection </strong></li>
                                <li><strong>Loss of appetite </strong></li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Coughing, bone pain, or leg swelling are signs of advanced disease that has spread to the liver, lungs, or bones.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A number of tests are performed to confirm the diagnosis and determine the severity of kidney cancer if it is suspected:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Ultrasound –</strong> often the first imaging test used</li>
                                <li><strong>CT scan or MRI –</strong> provides detailed images of the kidney and surrounding structures, and helps in staging</li>
                                <li><strong>Urinalysis and blood tests –</strong> to check kidney function and detect any abnormalities</li>
                                <li><strong>Biopsy –</strong> occasionally performed if the diagnosis is uncertain or when considering non-surgical treatment</li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Following confirmation, the cancer is categorized into stages I through IV according to the size of the tumor, local spread, and metastasis.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The stage, tumor size, general health, and patient preference all affect how kidney cancer is treated. In order to preserve as much kidney function as possible, the tumor must be removed or destroyed.
                            </p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>For the majority of localized kidney cancers, surgery is the primary treatment option.</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Partial nephrectomy –</strong> only the tumor and a tiny amount of surrounding tissue are removed. When feasible, this is the best option to maintain kidney function.</li>
                                <li><strong>Radical nephrectomy –</strong> total kidney removal, occasionally accompanied by surrounding tissues or lymph nodes if necessary.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Active surveillance, also known as watchful waiting, may be suitable for certain patients who have small tumors or several medical conditions.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Ablative Therapies
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Patients who are unable to have surgery can use less invasive methods such as cryoablation or radiofrequency ablation (RFA), which use heat or cold to destroy the tumor, respectively.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Targeted Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Targeted medications that block particular cancer growth pathways have greatly improved the prognosis for advanced or metastatic kidney cancer. These consist of:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Tyrosine kinase inhibitors (TKIs)</strong> like sunitinib, axitinib, or cabozantinib</li>
                                <li><strong>VEGF inhibitors,</strong> which block the tumour’s blood supply</li>
                            </ul>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The immune system can identify and combat cancer cells with the aid of checkpoint inhibitors like nivolumab, pembrolizumab, or combination treatments (e.g., ipilimumab + nivolumab). In many advanced cases, these are now regarded as a first choice.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Radiation and Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Conventional chemotherapy is often ineffective against kidney cancer. Instead of being used as a curative treatment, radiation is primarily used to control symptoms or relieve pain in metastatic sites (palliative care).</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Monitoring and Follow-Up
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Long-term follow-up is necessary for kidney cancer patients undergoing treatment in order to track kidney function and identify any spread or recurrence. Typically, this consists of:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Periodic <strong>imaging scans</strong> (CT or ultrasound)</li>
                                <li><strong>Blood tests</strong> to assess kidney performance</li>
                                <li><strong>Urine tests</strong> for signs of blood or protein</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>The follow-up plan is customized based on the tumor stage, treatment received, and recurrence risk.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Can Kidney Cancer Be Prevented?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Certain lifestyle changes can lower risk, even though not all kidney cancers can be prevented:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Stop smoking</strong></li>
                                <li><strong>Maintain a healthy weight</strong></li>
                                <li><strong>Control blood pressure</strong></li>
                                <li><strong>Limit exposure to toxic chemicals</strong></li>
                                <li><strong>Stay well-hydrated</strong>and follow a kidney-friendly diet if you have chronic kidney disease</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>For high-risk individuals, early detection through routine physicals and imaging may also help detect tumors at an earlier, more treatable stage.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to Seek Specialist Care
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Managing kidney cancer can be challenging, particularly when it has spread or become advanced. Urologists, oncologists, radiologists, and pathologists must all work together in a multidisciplinary manner.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Kidney cancers are actively treated systemically by medical oncologist Dr. Amit Badola. Immunotherapy and targeted agents, which have transformed the treatment of advanced renal cell carcinoma, are among his areas of expertise. To guarantee that each patient receives a customized, evidence-based treatment plan, Dr. Badola collaborates with a team.</p>
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

export default Kidney