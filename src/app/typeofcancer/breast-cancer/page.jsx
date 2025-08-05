import React from 'react'
import Breast from './Breast'

export const metadata = {
  title: "Breast Cancer Information & Treatment in Dehradun | Dr. Amit Badola | Medical Oncology Expert",
  description:
    "Explore detailed insights on breast cancer in Dehradun — including symptoms, causes, risk factors, diagnosis, and treatment options. Dr. Amit Badola offers advanced, personalized care for women at every stage of breast cancer.",
  keywords: [
    "breast cancer in dehradun",
    "breast cancer symptoms",
    "early signs of breast cancer",
    "breast lump dehradun",
    "causes of breast cancer",
    "breast cancer diagnosis dehradun",
    "breast cancer treatment options",
    "stages of breast cancer",
    "mammogram screening dehradun",
    "breast cancer awareness dehradun",
    "breast tumor dehradun",
    "medical oncologist for breast cancer",
    "breast cancer doctor dehradun",
    "breast cancer in women dehradun",
    "breast cancer specialist dehradun"
  ],
};

const page = () => {
  return (
    <div className='mt-20'>
      <Breast />
    </div>
  )
}

export default page