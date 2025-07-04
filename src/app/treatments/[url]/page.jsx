import React from 'react';
import Treatmentdata from './Treatmentdata';

const Page = async ({ params }) => {
    const url = params.url;

    return (
        <div className="bg-gray-200">
            <Treatmentdata url={url} />
        </div>
    );
};

export default Page;
