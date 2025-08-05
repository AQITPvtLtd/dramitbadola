import React from 'react'
import Blog from './Blog'

export const metadata = {
    title: "Cancer Blog Articles & Patient Insights | Latest Oncology Updates in Dehradun | Dr. Amit Badola",
    description:
        "Stay informed with the latest cancer blogs in Dehradun — including expert insights, treatment updates, patient stories, and awareness tips. Curated by Dr. Amit Badola to guide patients and families through their cancer journey.",
    keywords: [
        "cancer blog in dehradun",
        "oncology articles dehradun",
        "cancer awareness blog",
        "latest cancer treatments dehradun",
        "cancer updates dehradun",
        "expert cancer advice dehradun",
        "patient cancer stories dehradun",
        "cancer prevention blogs",
        "cancer symptoms blog dehradun",
        "chemotherapy blog dehradun",
        "immunotherapy updates dehradun",
        "oncology insights dehradun",
        "cancer care blog",
        "cancer education blog dehradun",
        "Dr. Amit Badola blog"
    ],
};

const page = () => {
    return (
        <div className='mt-[120px]'>
            <Blog />
        </div>
    )
}

export default page