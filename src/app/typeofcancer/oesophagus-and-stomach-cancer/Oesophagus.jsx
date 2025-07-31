import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Oesophagus = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/oesophagus-and-stomach-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="oesophagus-and-stomach-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Oesophagus and Stomach Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Serious gastrointestinal cancers that impact the upper portion of the digestive system are esophageal and stomach cancers, sometimes referred to as gastric cancer. Even though early diagnosis can be difficult, many patients now have better prognoses thanks to advancements in treatment and a better understanding of risk factors.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Early detection is challenging because both cancers frequently exhibit nebulous initial symptoms. Multidisciplinary management and prompt recognition, however, can greatly enhance results.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Understanding Esophageal Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The lengthy, muscular tube that joins the throat and stomach is where esophageal cancer begins. It typically manifests in one of two ways:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Squamous cell carcinoma:</strong> Typically impacts the middle and upper esophageal regions.</li>
                                <li><strong>Adenocarcinoma:</strong> More prevalent in the lower esophagus, close to the stomach-esophageal junction. This kind has grown more common, particularly among urban and Western populations.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Risk Factors for Esophageal Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Numerous medical and lifestyle factors can contribute to the development of esophageal cancer:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Chronic acid reflux or <strong> gastroesophageal reflux disease (GERD)</strong></li>
                                <li><strong>Barrett’s esophagus,</strong>	 a condition where the lining of the esophagus changes due to prolonged acid exposure</li>
                                <li>Smoking and excessive alcohol consumption</li>
                                <li>Obesity, particularly for adenocarcinoma</li>
                                <li>Consumption of very hot beverages or preserved foods (common in squamous cell carcinoma)</li>
                                <li>Genetic predisposition or history of head and neck cancers</li>
                            </ul>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Understanding Stomach (Gastric) Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Usually starting in the stomach's inner lining, stomach cancer progresses gradually over time. The majority of cases are adenocarcinomas, which develop from the stomach lining's glandular cells.</p>

                            <p className='text-gray-700 text-base lg:text-justify'>The incidence of this cancer varies by geographic region, with higher rates in parts of Asia and Eastern Europe. It is more common in older people, especially men.</p>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Risk Factors for Stomach Cancer
                            </h2>
                            <p className='text-gray-700 text-base'>Key contributing factors include:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong> Helicobacter pylori (H. pylori)</strong>  infection, which can cause chronic inflammation</li>
                                <li>Diet high in salted, smoked, or pickled foods and low in fresh fruits and vegetables</li>
                                <li>Smoking and long-term alcohol use</li>
                                <li>Family history of gastric cancer</li>
                                <li>History of chronic gastritis or gastric ulcers</li>
                                <li>Prior stomach surgery or conditions like pernicious anemia</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Recognizing the Symptoms
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The fact that early symptoms of stomach and esophageal cancers are frequently vague or mild presents one of the main obstacles.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Common Symptoms of Esophageal Cancer
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Difficulty swallowing (dysphagia), often starting with solids and progressing to liquids</li>
                                <li>A sensation of food getting stuck in the chest or throat</li>
                                <li>Unintentional weight loss</li>
                                <li>Chest discomfort or burning</li>
                                <li>Hoarseness or chronic cough</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Common Symptoms of Stomach Cancer
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li>Persistent indigestion or heartburn</li>
                                <li>A feeling of fullness after eating small amounts</li>
                                <li>Nausea or vomiting (sometimes with blood)</li>
                                <li>Abdominal pain or discomfort</li>
                                <li>Loss of appetite</li>
                                <li>Fatigue and weight loss</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>Common digestive issues can be mistaken for these symptoms. A medical evaluation is required, though, if they worsen or last longer than a few weeks.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>A number of tests are needed for both cancers in order to confirm the diagnosis and establish the stage:</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Upper GI endoscopy</strong> is the main diagnostic tool for identifying stomach or esophageal tumors and enables biopsy.</li>
                                <li><strong>Endoscopic ultrasound (EUS)</strong> may be used to assess the depth of tumor invasion and involvement of nearby lymph nodes.</li>
                                <li><strong>CT scan or PET-CT</strong> aids in determining whether other organs have been affected by the cancer.</li>
                                <li><strong>Barium swallow X-ray</strong> may be applied for preliminary assessment on occasion.</li>
                                <li>In gastric cancer, testing for <strong> H. pylori </strong> and checking for anemia are also important components.</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>In order to determine the best course of treatment and forecast prognosis, staging is essential.</p>
                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Treatment Options
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The tumor's location, kind, and stage, as well as the patient's general health, all influence the course of treatment. Typically, a multidisciplinary strategy combining radiation, medical, and surgical oncology is used.</p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                                <li><strong>Surgery</strong> is the foundation for treatment that may be curative in cases that are early or locally advanced. Although they are major procedures, esophectomy (removal of part or all of the esophagus) and gastrectomy (removal of part or all of the stomach) can save lives.</li>
                                <li><strong>Chemotherapy</strong> is frequently used as an adjuvant or neoadjuvant before or after surgery to shrink tumors and stop them from coming back.</li>
                                <li><strong>Chemoradiation </strong> (a combination of chemotherapy and radiation therapy) may be applied to esophageal cancers, particularly in cases where surgery is not feasible right away.</li>
                                <li><strong>Targeted therapy</strong> (such as HER2-directed drugs) and <strong> immunotherapy </strong> (such as checkpoint inhibitors like pembrolizumab) are new choices based on tumor molecular testing for cases that are advanced or metastatic.</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>Throughout the course of treatment, supportive care—which includes symptom management and nutritional support—is essential.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Rehabilitation and Follow-up
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Long-term dietary changes may be necessary for post-treatment recovery, particularly following major surgeries. For patients to maintain proper nutrition, feeding assistance or supplements may be necessary. Regular follow-up scans or endoscopies, emotional counseling, and swallowing therapy are frequently required to check for complications or recurrence.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                Prevention and Outlook
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Before they cause cancer, some risk factors, like an H. pylori infection, can be treated. You can reduce your risk by managing acid reflux, cutting back on alcohol, quitting smoking, changing your diet, and getting regular checkups if you have risk factors.</p>

                            <p className='text-gray-700 text-base lg:text-justify'>The stage at diagnosis has a significant impact on the results. While advanced cases can be effectively managed with contemporary treatments aimed at improving quality and prolonging life, early-stage cancers have higher survival rates.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                                When to Seek Expert Care
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>It is crucial to get medical help as soon as possible if you are dealing with chronic digestive discomfort, unexplained weight loss, or persistent swallowing difficulties.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Consulting with a qualified specialist is crucial for patients receiving treatment or evaluation. Medical oncologist <strong> Dr. Amit Badola </strong> treats gastrointestinal cancers, such as those of the stomach and esophagus. As part of an all-encompassing, team-based approach to care, his work focuses on immunotherapy, targeted therapies, and chemotherapy.</p>

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

export default Oesophagus