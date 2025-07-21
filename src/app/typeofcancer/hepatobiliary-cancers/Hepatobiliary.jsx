import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'

const Hepatobiliary = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/hepatobiliary1.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="Blood Cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40 ">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Hepatobiliary Cancers
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                A class of cancers known as hepatobiliary cancers affects the liver, gallbladder, and bile ducts—organs essential to metabolism and digestion. These cancers are frequently aggressive and might not show any symptoms until they have progressed to a more advanced stage. However, prompt intervention can have a major impact on outcomes and quality of life thanks to advancements in diagnostic methods and treatment options.
                            </p>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                What Causes Head and Neck Cancer?
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                This group includes:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Hepatocellular carcinoma (HCC): </strong>The most prevalent kind of primary liver cancer, which usually develops in patients who already have cirrhosis or liver disease.</li>
                                <li><strong>Cholangiocarcinoma (Bile duct cancer): </strong>An uncommon but dangerous type of cancer that develops in the bile ducts, either extrahepatically or intrahepatically.</li>
                                <li><strong>Gallbladder cancer: </strong>A rather uncommon cancer that is frequently found by chance when gallstone surgery is performed.</li>
                                <li><strong>Combined hepatocellular-cholangiocarcinoma (cHCC-CCA): </strong>A rare kind that combines characteristics of bile duct and liver cancer.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify mt-4">
                                Because of their close anatomical and functional ties, these cancers are collectively referred to as hepatobiliary malignancies.
                            </p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Causes and Risk Factors
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Numerous chronic illnesses and environmental exposures have an impact on hepatobiliary cancers. Among the main risk factors are:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Chronic viral hepatitis (Hepatitis B or C): </strong>A major contributor to hepatocellular carcinoma, particularly in sub-Saharan Africa and Asia.</li>
                                <li><strong>Cirrhosis: </strong>Caused by chronic liver infections, non-alcoholic fatty liver disease (NAFLD), or alcohol misuse.</li>
                                <li><strong>Primary sclerosing cholangitis (PSC): </strong>A condition that raises the risk of bile duct cancer and is frequently linked to inflammatory bowel disease.</li>
                                <li><strong>Gallstones and chronic gallbladder inflammation: </strong>Linked to gallbladder cancer.</li>
                                <li><strong>Parasitic infections and liver fluke infestations: </strong>Frequently found in endemic areas and linked to cholangiocarcinoma.</li>
                                <li><strong>Family history or genetic disorders: </strong>Such as hemochromatosis or Wilson’s disease.</li>
                                <li><strong>Exposure to toxins: </strong>Including aflatoxins (mold found in stored grains), thorium dioxide, or certain industrial chemicals.</li>
                            </ul>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Symptoms and Early Warning Signs
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Many hepatobiliary cancers don't show any symptoms until they've spread.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Nonetheless, some indicators ought to trigger a medical assessment:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Persistent pain in the upper right abdomen or back</li>
                                <li>Unexplained weight loss or loss of appetite</li>
                                <li>Yellowing of the skin and eyes (jaundice)</li>
                                <li>Swelling of the abdomen (ascites)</li>
                                <li>Nausea or vomiting</li>
                                <li>Pale stools and dark urine</li>
                                <li>Fatigue or general weakness</li>
                                <li>Fever, especially in bile duct cancer</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify mt-4'>Liver tumors can occasionally be unintentionally discovered while imaging for another illness. Regular surveillance is recommended for patients with known liver disease in order to identify cancer early.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Blood tests, imaging, and tissue sampling are all used in the diagnosis process:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li> <strong className="whitespace-nowrap"> Liver function tests (LFTs) </strong> and <strong> tumor markers </strong> such as alpha-fetoprotein (AFP) for liver cancer or CA 19-9 for cholangiocarcinoma.</li>
                                <li> <strong> Ultrasound, CT scan, or MRI </strong> to detect and assess the size, location, and spread of tumors.</li>
                                <li><strong> PET-CT scans </strong> may be used in certain cases to evaluate for metastasis.</li>
                                <li> <strong className="whitespace-nowrap"> Biopsy </strong> may be required to confirm the type of cancer, although in some liver cancers, imaging and blood markers may be sufficient.</li>
                                <li> <strong> Endoscopic procedures </strong> like ERCP or cholangioscopy may be used for bile duct cancers.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify mt-4'>When choosing a treatment plan, staging the cancer is essential because it establishes whether surgery is practical or if systemic therapy is required.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The type, size, location, liver function, and spread of the cancer all influence treatment approaches. Hepatologists, oncologists, radiologists, and surgeons are frequently involved in a multidisciplinary approach, which is essential.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The best chance of recovery for eligible patients is surgical resection, particularly for early-stage cancers of the liver, gallbladder, or bile duct. Liver transplantation may be an option in certain hepatocellular carcinoma cases.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Ablative Therapies
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Without requiring extensive surgery, radiofrequency ablation (RFA) or microwave ablation can be used to kill cancer cells in small liver tumors.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Transarterial Chemoembolization (TACE) and Y-90 Radioembolization
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>These minimally invasive techniques, which are particularly helpful in intermediate-stage HCC, directly administer chemotherapy or radiation to the liver tumor through its blood supply.</p>


                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>For cholangiocarcinoma and gallbladder cancer that is advanced or incurable, systemic chemotherapy is frequently the standard treatment. Commonly used medications include cisplatin and gemcitabine.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                5. Targeted Therapy and Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>For advanced liver cancer, therapies like sorafenib, lenvatinib, and atezolizumab with bevacizumab have become commonplace in recent years. Tumor molecular testing can assist in determining a patient's eligibility for immune checkpoint inhibitors or targeted agents.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Recovery, Monitoring & Support
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Patients need to be closely monitored with routine imaging, liver function tests, and symptom checks after treatment. Supportive care, including pain management, nutrition, and emotional health, is just as vital.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>In order to manage underlying illnesses like cirrhosis or hepatitis, patients with liver disease may also require continuous care. Long-term follow-up is crucial for patients undergoing major surgery or transplantation.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Can These Cancers Be Prevented?
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Although some hepatobiliary cancers cannot be avoided, there are a number of ways to lower the risk:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Vaccination against hepatitis B</strong> </li>
                                <li><strong>Prompt treatment of hepatitis B or C infections </strong> </li>
                                <li><strong>Avoiding alcohol abuse and managing fatty liver</strong> </li>
                                <li><strong>Maintaining a healthy weight and balanced diet</strong> </li>
                                <li><strong>Avoiding exposure to aflatoxins and industrial chemicals</strong></li>
                                <li><strong>Regular screening</strong> for high-risk individuals, especially those with cirrhosis or PSC</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to Seek Specialist Care
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>It is crucial to seek advice from experts who have experience treating hepatobiliary cancers due to their complexity. Decisions regarding systemic therapy, clinical trials, or palliative care when necessary can be guided by the early involvement of a medical oncologist.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Hepatobiliary cancers are treated holistically by medical oncologist Dr. Amit Badola. As part of a team-based, evidence-based approach to cancer care, he treats liver, bile duct, and gallbladder cancers with immunotherapy, chemotherapy, and targeted therapies.</p>

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

export default Hepatobiliary