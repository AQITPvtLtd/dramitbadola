import React from 'react';
import Treatmentdata from './Treatmentdata';
import { data } from '@/data/info';

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
    const content = data.find((item) => item.url === params.url);

    return {
        title: content.meta_title,
        description: content.meta_desc,
        keywords: content.keyword,
    };
}

const Page = async ({ params }) => {
    const url = params.url;

    return (
        <div className="mt-20">
            <Treatmentdata url={url} />
        </div>
    );
};

export default Page;
