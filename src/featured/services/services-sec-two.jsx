import React from 'react';
import Image from 'next/image';
import { fetchAllInsights } from '../../../server/insights/insights';
const AboutImage = '/AboutImage.png';

const ServicesSecTwo = async () => {
    const insights = await getAllInsights();
    return (
        <div className="flex flex-col md:flex-row justify-around items-center m-8 md:m-24 space-y-8 md:space-y-0 md:space-x-8">
            <div className="max-w-xl text-center md:text-left">
                {/* Map over insights and display them */}
                {/* <div className="mt-6"> */}
                    {insights.map((insight, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="fs-32">{insight.title}</h2>
                            <p className="mt-6 fs-16">{insight.description}</p>
                        </div>
                    ))}
                {/* </div> */}
            </div>

            <div className="max-w-md">
                <Image src={AboutImage} alt="About Us Image" width={515} height={525} />
            </div>
        </div>
    );
};

export default ServicesSecTwo;

async function getAllInsights() {
    return fetchAllInsights();
}