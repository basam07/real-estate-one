import React from 'react';
import './home.css';
import PropertiesTile from "@/data/properties/properties-tile";
import {fetchProperties} from "../../../server/properties/properties";


const HomeSecThree = async () => {
    const investmentData = await getData();
  return (
    <div className="section-three">
      <div className="section-three-header">
        <h2 className='sec-heading'>Highlighted Investments</h2>
      </div>

      <div 
      style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",margin:"0 auto"}}
       >
        <div className="highlightgrid" >
            {investmentData.map((data) => (
              <PropertiesTile properties={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

async function getData() {
    return fetchProperties(3);
}

export default HomeSecThree;
