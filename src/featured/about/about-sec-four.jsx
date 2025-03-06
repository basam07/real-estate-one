import React from 'react';
import Image from 'next/image';
import { fetchAllMissions } from '../../../server/our-mission/our_mission';
const AboutImage = '/AboutImage.png';

const AboutSecFour = async () => {
    const missions = await getAllMissions();
    return (
        <div className="flex flex-col md:flex-row justify-around items-center m-8 md:m-24 space-y-8 md:space-y-0 md:space-x-8">
            <div className="max-w-xl text-center md:text-left">
                <div className="text-2xl font-semibold">
                    Our Mission
                </div>
                {missions.map((mission, index) => (
                    <p key={index} className="mt-6 text-base">
                        {mission.title}: {mission.description}
                    </p>
                ))}
            </div>

            {/* Vertical Divider */}
            <hr className="vertical-line hidden md:block" />

            <div className="max-w-md">
                <Image src={AboutImage} alt="About Us Image" width={515} height={525} />
            </div>
        </div>
    );
};

export default AboutSecFour;

async function getAllMissions() {
    return fetchAllMissions();
}
