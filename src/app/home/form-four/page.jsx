import React from "react";
import { fetchServiceDescription } from "../../../../server/our-services/our_services";
import HomeSecFour from "@/featured/home/home-sec-four";

const page = async ({ params }) => {
  const home = await getTagline(params.id);
  if (!home) {
    return <div>Data not available</div>; // Prevents rendering with undefined data
  }
  return (
    <div>
      <HomeSecFour taglines={home} />
    </div>
  );
};

async function getTagline(id) {
  if (!id) return null;
  return fetchServiceDescription(id);
}

export default page;
