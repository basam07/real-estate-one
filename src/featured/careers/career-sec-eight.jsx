import React from "react";
import { fetchAllApplies } from "../../../server/apply/apply";

const CareerSecEight = async () => {
  const applies = await getAllApply();

  return (
    <div
      className="w-full h-50vh bg-cover object-contain bg-center relative"
      style={{
        backgroundImage: `url('/carrerImage.png')`,
      }}
    >
      {/* Displaying the applies data */}
      <div className="absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 w-full max-w-[608px] text-center bg-white p-12">
        <ul className="mt-4">
          {applies.map((apply, index) => (
            <div key={index} className="mt-2">
              <h2 className="fs-32">{apply.title}</h2>
              <div className="flex justify-center fs-16 mt-6">
                <p className="max-w-[428px]">
                  {apply.description}
                </p>
              </div>
              <p className="mt-3">{apply.email}</p>
              <button className="bg-[#373938] text-white px-8 py-2 mt-3">
                Start Your Journey
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerSecEight;

async function getAllApply() {
  return fetchAllApplies();
}
