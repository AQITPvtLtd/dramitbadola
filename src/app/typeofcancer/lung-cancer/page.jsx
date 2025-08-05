import React from 'react'
import Lung from './Lung'

export const metadata = {
  title: "Lung Cancer Information & Treatment in Dehradun | Dr. Amit Badola | Medical Oncology Expert",
  description:
    "Discover comprehensive information on lung cancer in Dehradun — including its types, symptoms, causes, diagnosis, and advanced treatment options. Dr. Amit Badola provides expert, individualized care for all stages of lung cancer.",
  keywords: [
    "lung cancer in dehradun",
    "lung cancer symptoms",
    "types of lung cancer",
    "non-small cell lung cancer dehradun",
    "small cell lung cancer dehradun",
    "causes of lung cancer",
    "lung cancer diagnosis dehradun",
    "lung cancer treatment options",
    "lung cancer stages",
    "signs of lung cancer",
    "best doctor for lung cancer dehradun",
    "chest tumor dehradun",
    "medical oncologist for lung cancer",
    "lung cancer care dehradun",
    "advanced lung cancer therapy"
  ],
};

const page = () => {
  return (
    <div className='mt-20'>
      <Lung />
    </div>
  )
}

export default page