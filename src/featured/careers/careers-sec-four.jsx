import { fetchAllexperience } from "../../../server/experience/experiences";

export default async function CareersSecFour() {
  const experience = await getAllExperience();
  
  return (
    <div className="w-5/12 mx-auto my-24 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-[40px] w-full">
        <div>
          {experience.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-[24px] font-bold mb-8">{item.experTitle}</h3>
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <p className="text-[20px]">{item.experDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[937px] w-full bg-[#ECE3D7] px-20 py-12 mt-12 flex flex-col items-center justify-center gap-[20px]">
        <h3 className="text-[24px] font-bold text-center">
          Why may the right company for you
        </h3>
        <p className="text-[18px] font-bold text-center">Contact Us</p>
        <button className="bg-[#373938] text-white px-8 py-2">
          Upload Your CV
        </button>
      </div>
    </div>
  );
}

async function getAllExperience() {
  return fetchAllexperience();
}