import React from 'react';
const Homemain = './homemain.png';
import './home.css';
import { fetchAllHomeAbouts } from '../../../server/home-about/home_about';

const Homesection2 = async () => {
  const homeAbouts = await getHomeTitle();

  return (
    <div className="section2">
      <div className="section2-container">
        <div className="section2-content">
          {homeAbouts.length > 0 ? (
            homeAbouts.map((item) => (
              <div key={item.id}>
                <h2 className='para-center'>{item.title || "Crafting Excellence in Real Estate Investments"}</h2>
                <p className='para-center'>
                  {item.description || "At Realinvte, we redefine luxury real estate investment. With a legacy of trust and a reputation for excellence, we empower our clients to build wealth through exclusive opportunities in the world's most coveted markets."}
                </p>
              </div>
            ))
          ) : (
            <div>
              <h2 className='para-center'>Crafting Excellence in Real Estate Investments</h2>
              <p className='para-center'>
                At Realinvte, we redefine luxury real estate investment. With a legacy of trust and a reputation for excellence, we empower our clients to build wealth through exclusive opportunities in the world's most coveted markets.
              </p>
            </div>
          )}
          <div className='btn-learn'>
            <button className='btn-learn-more'>
              Learn More
            </button>   
          </div>
        </div>
        <div className="section2-image">
          <img src={Homemain} alt="HomeMain" />
        </div>
      </div>
    </div>
  );
};

export default Homesection2;

async function getHomeTitle() {
  return fetchAllHomeAbouts();
}