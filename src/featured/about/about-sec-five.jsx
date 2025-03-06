import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchAllTeamMembers } from '../../../server/team/team';
import { teamPic } from '@/data/about/aboutdata';


const AboutSecFive = async () => {
  const teamMembers = await getAllTeamMembers();

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h2 className="text-4xl font-semibold mb-12">
        Meet the Minds Behind Realinvte
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-lg bg-white shadow-md flex flex-col items-center text-center"
            style={{ backgroundColor: "var(--global-white-choco-color)" }}
          >
            <Image 
              src={teamPic[0].image}
              alt={member.name} 
              width={400}
              height={400}
              className="object-cover"
            />
            <div className="flex flex-col items-center p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-base">{member.designation}</p>
              <Link 
                href={''}
                className="mt-4 border border-black bg-black text-white py-1 px-3 hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSecFive;

async function getAllTeamMembers() {
  return fetchAllTeamMembers();
}
