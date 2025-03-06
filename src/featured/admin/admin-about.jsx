import React from "react";
import Link from "next/link";
import "./admin.css";
import { fetchAllAboutUs } from "../../../server/about-us/about_us";
import { fetchAllCoreValues } from "../../../server/our-core-value/our_core_value";
import { fetchAllMissions } from "../../../server/our-mission/our_mission";
import { fetchAllTeamMembers } from "../../../server/team/team";
import DeleteAboutUsButton from "@/components/admin/about/delete-aboutus-button";
import { revalidatePath } from "next/cache";
import DeleteCoreValuesButton from "@/components/admin/about/delete-corevalues-button";
import DeleteMissionButton from "@/components/admin/about/delete-mission-button";
import DeleteTeamButton from "@/components/admin/about/delete-team-button";

export default async function AdminAbout() {
  const aboutUs = await getAllAboutUs();
  const coreValues = await getAllCoreValues();
  const missions = await getAllMissions();
  const teamMembers = await getAllTeamMembers();

  return (
    <div className="containerfive">
      <div className="flex justify-between items-center">
        <div className="flex-grow text-center">
          <h2 className="title">About Us</h2>
        </div>
      </div>

      {/* About Us */}
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {aboutUs.length > 0 ? (
          aboutUs.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "(Default) Committed to You"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "(default) At Realinvte, we believe that exceptional real estate investment opportunities begin with a vision. Our team is dedicated to providing unparalleled service, deep market insights, and exclusive access to the world’s most coveted properties. With a passion for excellence and a commitment to our clients, we turn investment aspirations into reality."}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteAboutUsButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-about");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No About Us Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/about/one/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Our Core Values */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Our Core Values
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {coreValues.length > 0 ? (
          coreValues.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "(Default) Integrity"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "(default) We strive for excellence in every aspect of our work, from client service to team collaboration."}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <DeleteCoreValuesButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-about");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No About Us Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/about/two/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Our Mission */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Our Mission
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {missions.length > 0 ? (
          missions.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "(Default) Integrity"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "(default) We strive for excellence in every aspect of our work, from client service to team collaboration."}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <DeleteMissionButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-about");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Mission Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/about/three/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Meet the Minds Behind Realinvte */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Meet the Minds Behind Realinvte
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {teamMembers.length > 0 ? (
          teamMembers.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.name || "(Default) Sophie Brown"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.designation || "(default) President of Sales"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <DeleteTeamButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-about");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Mission Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/about/four/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

async function getAllAboutUs() {
  return fetchAllAboutUs();
}

async function getAllCoreValues() {
  return fetchAllCoreValues();
}

async function getAllMissions() {
  return fetchAllMissions();
}

async function getAllTeamMembers() {
  return fetchAllTeamMembers();
}
