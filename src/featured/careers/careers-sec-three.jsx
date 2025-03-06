import Image from "next/image";
import Client from '../../../public/careers/client-1.png';
import { realInvite } from "@/data/careers/careers";
import { fetchAllCareerRealinvte } from "../../../server/career-realivte/career_realinvte";


export default async function CareersSecThree() {
    const careerRealinvte = await getAllCareerRealinvte();
    return (
        <div className='w-9/12 mx-auto my-24'>
            <div className='grid grid-cols-6 gap-[40px]'>
                <div className='col-span-full md:col-span-2'>
                    <Image src={Client} alt={'client'} />
                </div>
                <div className='col-span-full md:col-span-4'>
                    <h3 className='text-[40px] font-bold mb-8'>Why Realinvte?</h3>
                    {
                        careerRealinvte.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h4 className='text-[24px] my-2 font-bold'>{item.realinvteTitle}</h4>
                                    <p className='text-[20px]'>{item.realinvteDescription}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

async function getAllCareerRealinvte() {
  return fetchAllCareerRealinvte();
}