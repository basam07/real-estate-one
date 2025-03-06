import React from "react";
import { fetchAllExpectations } from "../../../server/expections/expectations";

const CarrerSecSeven = async () => {
  const expectations = await getAllExpectation();

  return (
    <div
      style={{ backgroundColor: "var(--global-raisin-black-color)" }}
      className="flex flex-col items-center p-12"
    >
      <h2 className="text-4xl text-white mb-8">What We Expect From You</h2>
      <div className="flex items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6 max-w-[1200px] mx-auto justify-center text-center">
        {expectations.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white max-w-[275px]"
          >
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrerSecSeven;

async function getAllExpectation() {
  return fetchAllExpectations();
}
