import React from "react";
import { fetchHomeAboutById } from "../../../../server/home-about/home_about";
import Homesection2 from "@/featured/home/home-sec-two";

const page = async ({ params }) => {
  const home = await getTagline(params?.id);

  if (!home) {
    return <div>Data not available</div>; // Prevents rendering with undefined data
  }

  return (
    <div>
      <Homesection2 taglines={home} />
    </div>
  );
};

async function getTagline(id) {
  if (!id) return null; // 🚀 Prevents Prisma error during build
  return fetchHomeAboutById(id);
}

export default page;
