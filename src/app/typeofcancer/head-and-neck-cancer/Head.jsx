import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Head = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative">
                        <Image
                            src="/typeofcancer/head-and-neck.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="head-and-neck"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40 ">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Head and Neck Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A collection of cancers that arise in or near the throat, larynx (voice box), nose, sinuses, and mouth are collectively referred to as head and neck cancer. These cancers are grouped together due to similar risk factors, symptoms, and treatment modalities. The majority of these cancers start in the squamous cells lining the moist surfaces inside the head and neck.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Despite not being among the most prevalent cancers, head and neck cancers can have a significant impact because they impair vital everyday abilities like breathing, swallowing, and speaking. The quality of life and results can be greatly improved by early detection and suitable treatment.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Head and Neck Cancer?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>There are several known risk factors for head and neck cancers, many of which are related to lifestyle:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Tobacco use </strong> (chewing or smoking) is the leading cause of head and neck cancers. A history of tobacco use is present in more than 80% of patients with these cancers.</li>
                                <li><strong>Excessive alcohol consumption </strong> makes the mucosal lining more vulnerable to substances that cause cancer, which raises the risk even more, particularly when combined with tobacco.</li>
                                <li><strong>Human papillomavirus (HPV)</strong> infection, particularly type 16, is currently a major contributor to oropharyngeal cancer, which is cancer of the tonsils and back of the tongue, particularly in younger, nonsmoking people.</li>
                                <li>Other contributing factors include poor oral hygiene, exposure to certain chemicals (such as wood dust, asbestos, and paint fumes), extended sun exposure (associated with lip and skin cancers), and Epstein-Barr virus (EBV) in certain nasopharyngeal cancers.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Common Symptoms
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Depending on the precise region impacted, head and neck cancer symptoms can vary, but the following indicators should never be disregarded:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>A persistent sore throat or change in voice (especially hoarseness)</li>
                                <li>A sore or lump in the mouth or throat that doesn’t heal</li>
                                <li>Difficulty or pain while swallowing</li>
                                <li>Unexplained weight loss</li>
                                <li>A swelling or lump in the neck</li>
                                <li>Ear pain without infection</li>
                                <li>Nasal congestion or frequent nosebleeds (especially for nasal or sinus tumors)</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>These symptoms are frequently confused with dental issues or common infections. A medical evaluation is highly recommended, though, if any of them persist for longer than two to three weeks.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Head and Neck Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The region of origin determines the classification of head and neck cancers:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Oral cavity cancer:</strong> affects the lips, tongue, gums, and inner cheeks.</li>
                                <li><strong>Pharyngeal cancer: </strong> occurs in the throat (pharynx), which includes the nasopharynx, oropharynx, and hypopharynx.</li>
                                <li><strong>Laryngeal cancer:</strong> begins in the voice box.</li>
                                <li><strong>Salivary gland cancer:</strong> arises in the glands that produce saliva; relatively rare.</li>
                                <li><strong>Nasal cavity and sinus cancers:</strong> develop in the air-filled spaces of the face.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>Although each type has unique difficulties and methods of treatment, many have similar symptoms and diagnostic processes.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Staging
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>A physical examination is typically the first step in the diagnosis process. Imaging tests like CT, MRI, or PET-CT scans are then used to determine the tumor's extent. Most of the time, a biopsy is necessary to confirm cancer, and an endoscopy is used to view difficult-to-reach areas.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Choosing the appropriate course of treatment requires staging the cancer, or figuring out how far it has spread. Because HPV-positive tumors typically respond better to treatment, HPV testing is frequently advised for oropharyngeal cancers.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The location, stage, HPV status, and general health of the patient are some of the variables that affect treatment. The case is usually managed by a multidisciplinary team that includes radiation specialists, medical oncologists, and ENT surgeons.</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Surgery:</strong> Frequently applied to early-stage cancers, particularly those of the mouth. In more severe cases, the removal of the tumor may be followed by reconstructive surgery to restore appearance and function.</li>
                                <li><strong>Radiation therapy:</strong> Destroys cancer cells with high-energy beams. It can be taken either by itself or in conjunction with chemotherapy.</li>
                                <li><strong>Chemotherapy:</strong> Used as a neoadjuvant to reduce tumor size prior to radiation or surgery, or concurrent chemoradiation in cases of locally advanced disease.</li>
                                <li><strong>Targeted therapy and immunotherapy:</strong> These more recent therapies target particular cancer cell mechanisms or strengthen the immune system's reaction to cancer in order to treat some advanced or recurrent cancers.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>The objective is to preserve vital abilities like speech and swallowing in addition to removing or reducing the tumor.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Recovery and Rehabilitation
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Head and neck cancer treatment can be emotionally and physically taxing. Changes in voice, trouble swallowing, dry mouth, or facial disfigurement are possible side effects. Rehabilitation entails:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Speech and swallowing therapy</strong></li>
                                <li><strong>Nutritional support </strong></li>
                                <li><strong>Dental care,</strong> especially for patients receiving radiation</li>
                                <li><strong>Psychological counseling,</strong> as body image and social anxiety may become concerns</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>In order to monitor long-term health, identify any recurrence early, and enhance the patient's quality of life, supportive care and follow-up visits are crucial.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Prevention and Outlook
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The risk of head and neck cancer can be considerably decreased by abstaining from tobacco, consuming alcohol in moderation, practicing good oral hygiene, shielding skin from the sun, and getting the HPV vaccine, even though not all cases can be prevented.</p>

                            <p className='text-gray-700 text-base lg:text-justify'>Survival rates are rising, particularly for oropharyngeal cancers that are HPV-positive, thanks to early detection and individualized treatment. The stage of the cancer, the response to treatment, and general health all affect long-term results.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Expert Care Matters
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Getting the right medical advice is essential for navigating treatment options and results if you or a loved one has head and neck cancer. Head and neck cancers are treated holistically by medical oncologist Dr. Amit Badola. In order to provide individualized, evidence-based care, he collaborates with a multidisciplinary team to deliver targeted therapies, immunotherapy, and chemotherapy.</p>
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

export default Head