import TeamServiceCard from "@/components/team-services-card/team-service-card";
import { serviceTileData } from "@/data/services/services";
import { teamTileData } from "@/data/team/team";


export default async function HomeSecFour() {

    return (
        <div
            className="grid gap-10 md:grid-cols-[1fr_auto_1fr] sm:grid-cols-1 items-center"

        >
            {/* First card */}
            <TeamServiceCard data={teamTileData} href={'/about'} />

            {/* Vertical line */}
            <div className="h-full w-[1px] bg-[#CFCFCF] mx-auto"></div>

            {/* Second card */}
            <TeamServiceCard data={serviceTileData} href={'/our-services'} />
        </div>
    );
}