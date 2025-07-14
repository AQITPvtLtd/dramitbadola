import React from 'react'
import DetailedBlog from './DetailedBlog'

const page = ({ params }) => {
    const { url } = params
    return (
        <div className='mt-20'>
            <DetailedBlog url={url} />
        </div>
    )
}

export default page