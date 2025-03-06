import React from 'react'
import {sections} from '@/data/privacy/privacy-data'
const PrivacySecTwo = () => {

//   


  return (
    <div className='xs:p-[20px] sm:p-[100px]'>
      {sections.map((section, index) => (
        <div key={index} className='mt-6'>
          {section.heading && <h1 className='fs-40 font-bold '>{section.heading}</h1>}

        <div className='margin-privacyScreen'>
        <h2 className='fs-32  font-bold'>{section.title}</h2>
        </div>
          <div className='pad-privacyScreen'>
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className='mt-6'>
                <h3 className='fs-24 font-bold'>{subsection.title}</h3>
                <p className='fs-16 mt-3'>{subsection.content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivacySecTwo;
