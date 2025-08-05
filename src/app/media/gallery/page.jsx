import React from 'react'
import Gallery from './Gallery'

export const metadata = {
  title: "Cancer Care Photo Gallery | Events, Awareness Drives & Patient Moments | Dr. Amit Badola",
  description:
    "Browse the cancer care photo gallery featuring Dr. Amit Badola’s patient interactions, awareness events, treatment milestones, and educational activities — reflecting compassion, dedication, and excellence in oncology.",
  keywords: [
    "cancer care photo gallery",
    "oncology events dehradun",
    "dr amit badola gallery",
    "cancer awareness photos",
    "cancer treatment journey images",
    "oncology awareness drives",
    "cancer hospital gallery dehradun",
    "patient care photos",
    "medical oncology gallery dehradun",
    "cancer support activities dehradun",
    "oncology conferences dehradun",
    "dr amit badola events",
    "photo gallery oncology dehradun",
    "cancer day events dehradun",
    "awareness campaign photos"
  ],
};

const page = () => {
  return (
    <div className='mt-50 mb-30'>
      <Gallery />
    </div>
  )
}

export default page