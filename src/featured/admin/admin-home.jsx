import React from "react";
import Link from "next/link";
import "./admin.css";
import { fetchTaglines } from "../../../server/home-title/taglines";
import { fetchAllHomeAbouts } from "../../../server/home-about/home_about";
import { fetchAllTeamDescriptions } from "../../../server/our-team/our_team";
import { fetchAllServiceDescriptions } from "../../../server/our-services/our_services";
import { fetchAllAboutUs } from "../../../server/about-us/about_us";
import DeleteBlogsPageButton from "@/components/admin/home/delete-title-page-button";
import DeleteAboutButton from "@/components/admin/home/delete-about-page-button";
import DeleteTeamButton from "@/components/admin/home/delete-ourteam-page-button";
import { revalidatePath } from "next/cache";
import DeleteOurServicesButton from "@/components/admin/home/delete-ourservices-button";

export default async function AdminHome() {
  const taglines = await getTagline();
  const homeTitle = await getHomeTitle();
  const ourTeam = await getOurTeam();
  const ourServices = await getOurServices();
  const aboutUs = await getAllAboutUs();
  return (
    <div className="containerfive">
      <div className="flex justify-between items-center">
        <div className="flex-grow text-center">
          <h2 className="title">Home</h2>
        </div>
      </div>

      {/* taglines */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Taglines
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {taglines.length > 0 ? (
          taglines.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.tagline || "Elevate Your Investment Experience"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.subTagline ||
                  "Discover Curated Luxury Properties and Exceptional Investment Opportunities"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteBlogsPageButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-home");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Tagline Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/home/one/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* home about */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Home About
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {homeTitle.length > 0 ? (
          homeTitle.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "Elevate Your Investment Experience"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "Discover Curated Luxury Properties and Exceptional Investment Opportunities"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteAboutButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-home");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Home About Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/home/two/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* our team */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Our Team
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {ourTeam.length > 0 ? (
          ourTeam.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "Discover Curated Luxury Properties and Exceptional Investment Opportunities"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteTeamButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-home");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Team Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/home/three/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* our services */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Our Services
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {ourServices.length > 0 ? (
          ourServices.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "Discover Curated Luxury Properties and Exceptional Investment Opportunities"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteOurServicesButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-home");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Service Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/home/four/create"}
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

async function getTagline() {
  return fetchTaglines();
}

async function getHomeTitle() {
  return fetchAllHomeAbouts();
}

async function getOurTeam() {
  return fetchAllTeamDescriptions();
}

async function getOurServices() {
  return fetchAllServiceDescriptions();
}
async function getAllAboutUs() {
  return fetchAllAboutUs();
}
