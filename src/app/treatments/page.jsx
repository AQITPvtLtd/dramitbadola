import React from 'react'
import Treatments from './Treatments'

export const metadata = {
  title: "Cancer Treatments in Dehradun | Chemotherapy, Immunotherapy & More | Dr. Amit Badola",
  description:
    "Explore a wide range of advanced cancer treatments in Dehradun, including chemotherapy, immunotherapy, targeted therapy, and more. Dr. Amit Badola offers personalized oncology care using the latest protocols and technologies.",
  keywords: [
    "cancer treatments in dehradun",
    "chemotherapy in dehradun",
    "immunotherapy in dehradun",
    "targeted therapy dehradun",
    "advanced oncology care",
    "personalized cancer treatment dehradun",
    "medical oncology services dehradun",
    "types of cancer treatments",
    "best cancer therapies dehradun",
    "cancer drugs dehradun",
    "oncology treatment options dehradun",
    "cancer therapy dehradun",
    "radiation vs chemotherapy",
    "immunotherapy specialist dehradun",
    "cancer treatment expert dehradun"
  ],
};


const page = () => {
  return (
    <div className='mt-20'>
      <Treatments />
    </div>
  )
}

export default page