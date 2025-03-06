import React from 'react';
import { coreicon } from '@/data/about/aboutdata';
import { fetchAllCoreValues } from '../../../server/our-core-value/our_core_value';

const AboutSecThree = async () => {
  const coreValues = await getAllCoreValues();

  return (
    <div style={{ backgroundColor: "var(--global-raisin-black-color)" }} className="flex flex-col items-center p-12">
      <h2 className="text-4xl text-white mb-8">
        Our Core Values
      </h2>
      <div className="flex flex-wrap justify-center gap-8 py-6 max-w-[1200px]">
        {coreValues.map((value, index) => (
          <div key={index} className="flex flex-col items-center text-white max-w-[275px]">
            <div className="mb-4 flex justify-center items-center">
              {coreicon[0].icon} 
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
            <p className="text-center">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSecThree;

async function getAllCoreValues() {
  return fetchAllCoreValues();
}
