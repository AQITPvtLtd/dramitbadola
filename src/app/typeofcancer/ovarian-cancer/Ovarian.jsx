import React from 'react'
import Image from 'next/image'
import Type from '@/components/common/Type'
const Ovarian = () => {
    return (
        <div>
            <div className="mx-auto py-12 bg-[#f2efef]">
                <div className="flex flex-col items-center">
                    {/* Image Section */}
                    <div className="w-full max-w-8xl px-5 relative mt-20">
                        <Image
                            src="/typeofcancer/ovarian-cancer.jpg"
                            width={1000}
                            height={500}
                            className="w-full lg:h-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                            alt="ovarian-cancer"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-10 mt-4 px-5 w-full max-w-7xl">
                        <div className="relative bg-white px-8 py-10 shadow-lg rounded-2xl col-span-9 lg:-mt-40">
                            <h1
                                className="font-bold text-3xl text-[#d0342c] underline mb-6 text-center"
                                style={{ fontFamily: "Roboto Slab, serif" }}
                            >
                                Ovarian Cancer
                            </h1>

                            {/* Introduction */}
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The ovaries, which are tiny, almond-shaped organs on either side of the uterus that produce eggs and hormones like estrogen and progesterone, are where ovarian cancer starts. Ovarian cancer is frequently referred to as a "silent killer," and because its early symptoms are ambiguous and easily missed, it is typically discovered at an advanced stage.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                It is the most lethal of gynecological cancers and the fifth most common cause of cancer-related deaths among women globally. However, there is growing optimism for better results and survival due to increased awareness, better diagnostic tools, and changing treatment approaches.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Types of Ovarian Cancer
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Based on the type of cells it starts in, ovarian cancer can be classified into multiple types:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Epithelial ovarian cancer – </strong>The most prevalent kind, making up roughly 90% of all cases. It begins in the ovary's outermost layer.</li>
                                <li><strong>Germ cell tumours –</strong>They are more prevalent in young women and teenagers and start in the cells that produce eggs.</li>
                                <li><strong>Sex cord-stromal tumours –</strong>Originate from cells that produce hormones and are comparatively uncommon.</li>
                            </ul>


                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Since each type exhibits unique behavior, accurate diagnosis and classification are essential for individualized treatment.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Risk Factors and Causes
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Although the precise cause of ovarian cancer is frequently unknown, a number of factors are linked to an increased risk:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Family history </strong>of ovarian, breast, or colorectal cancer</li>
                                <li><strong>Inherited gene mutations, </strong>such as BRCA1 or BRCA2</li>
                                <li><strong>Increasing age, </strong>particularly post-menopause</li>
                                <li><strong>Early menstruation or late menopause </strong></li>
                                <li><strong>Infertility or never having been pregnant</strong></li>
                                <li><strong>Hormone replacement therapy</strong>(especially long-term, unopposed estrogen use)</li>
                                <li><strong>Endometriosis</strong></li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Conversely, protective factors that lower the lifetime number of ovulations include breastfeeding, multiple pregnancies, and the use of oral contraceptives.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Signs and Symptoms
                            </h2>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The symptoms of ovarian cancer are frequently mild, which delays diagnosis. Among the early warning indicators are:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Bloating or abdominal swelling</strong></li>
                                <li><strong>Pelvic or abdominal pain</strong></li>
                                <li><strong>Feeling full quickly while eating</strong></li>
                                <li><strong>Frequent or urgent need to urinate</strong></li>
                                <li><strong>Changes in bowel habits</strong></li>
                                <li><strong>Unexplained weight loss or fatigue </strong></li>
                                <li><strong>Menstrual irregularities </strong></li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Medical help should be sought if these symptoms last longer than a few weeks, particularly in women over 40. Ovarian cancer in its early stages may not exhibit any symptoms at all.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Diagnosis and Evaluation
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Since there is currently no reliable test for ovarian cancer screening in the general population, it is particularly critical to be aware of the symptoms and risk factors. The diagnostic procedure typically entails the following steps when ovarian cancer is suspected:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Pelvic examination –</strong> To check for lumps or abnormalities.</li>
                                <li><strong>Ultrasound (transvaginal or abdominal) –</strong> To visualize the ovaries.</li>
                                <li><strong>Blood tests – </strong> Including <strong>CA-125,</strong>  a tumour marker often elevated in ovarian cancer (though not specific).</li>
                                <li><strong>CT or MRI scans –</strong> To evaluate spread to other organs.</li>
                                <li><strong>Paracentesis or biopsy –</strong> May be performed if fluid or tissue samples are needed for confirmation.</li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                When the tumor is removed during surgery and sent for histopathological examination, a definitive diagnosis is frequently made.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Staging
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                The four stages of ovarian cancer are Stage I (confined to the ovaries) and Stage IV (spread to distant organs). Unfortunately, the disease has already spread throughout the abdomen by the time many women receive a diagnosis at Stage III or IV.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Treatment Options
                            </h2>
                            <p className="text-gray-700 leading-relaxed lg:text-justify">
                                Depending on the patient's stage, type, and general health, treatment usually consists of a mix of chemotherapy and surgery.
                            </p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                1. Surgery
                            </h2>

                            <p className='text-gray-700 text-base lg:text-justify'>Surgery is both diagnostic and therapeutic. It may involve:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Total hysterectomy</strong> (removal of uterus)</li>
                                <li><strong>Bilateral salpingo-oophorectomy</strong> (removal of both ovaries and fallopian tubes)</li>
                                <li><strong>Omentectomy</strong> (removal of fatty tissue in the abdomen)</li>
                                <li><strong>Debulking surgery –</strong> Removing as much tumour as possible, especially in advanced stages</li>
                            </ul>
                            <p className='text-gray-700 text-base lg:text-justify'>The goal is to achieve “no visible disease” after surgery whenever possible.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                2. Chemotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>The majority of ovarian cancer patients need chemotherapy, usually paclitaxel and carboplatin. It could be provided:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>After surgery (adjuvant chemotherapy)</strong> to eliminate remaining cancer cells</li>
                                <li><strong>Before surgery (neoadjuvant chemotherapy)</strong> in patients with advanced or inoperable disease</li>
                            </ul>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                3. Targeted Therapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Targeted treatments for certain ovarian cancers, especially those with homologous recombination deficiency (HRD) or BRCA mutations, include:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>PARP inhibitors</strong> (e.g., olaparib, niraparib)</li>
                                <li><strong>Bevacizumab – </strong> A drug that inhibits blood supply to tumours</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>These therapies may be used as maintenance treatment after chemotherapy to delay recurrence.</p>

                            <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                                4. Immunotherapy
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Early trials indicate promise in certain cases, but ovarian cancer is still being investigated.</p>


                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Follow-Up and Monitoring
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Regular follow-up is necessary after treatment to identify recurrence, which regrettably happens to many patients. This usually consists of:</p>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 lg:text-justify">
                                <li><strong>Physical exams</strong></li>
                                <li><strong>CA-125 monitoring</strong></li>
                                <li><strong>Imaging tests,</strong>if new symptoms arise</li>
                            </ul>

                            <p className='text-gray-700 text-base lg:text-justify'>Additionally, patients should be supported in managing their psychological well-being, fertility issues, and menopause symptoms, particularly following surgery.</p>

                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                Living with Ovarian Cancer
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Ovarian cancer is a life-altering diagnosis, but with the right care, consistent monitoring, and supportive care, many women survive for years. With new medication options and repeated lines of therapy, advanced ovarian cancer is increasingly treated like a chronic illness, increasing survival and quality of life.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>The patient journey can be greatly impacted by access to clinical trials, support groups, and genetic counseling, particularly for BRCA mutations.</p>
                            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                                When to See a Specialist
                            </h2>
                            <p className='text-gray-700 text-base lg:text-justify'>Treatment for ovarian cancer is complicated, so receiving care from a multidisciplinary cancer team or gynecologic oncologist guarantees the best results. Careful planning should go into the decisions regarding long-term follow-up, chemotherapy, and surgery.</p>
                            <p className='text-gray-700 text-base lg:text-justify'>Gynecologic cancers, including ovarian cancer, are actively treated by medical oncologist Dr. Amit Badola. As part of a team-based, evidence-based approach to care, he provides chemotherapy, targeted therapy, and maintenance plans customized to each patient's genetic and clinical profile.</p>

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

export default Ovarian