import React from "react";
import Link from "next/link";
import "./admin.css";
import { fetchAllInsights } from "../../../server/insights/insights";
import { fetchAllServices } from "../../../server/services/services";
import DeleteInsightButton from "@/components/admin/insights/delete-insight-button";
import { revalidatePath } from "next/cache";
import DeleteServicesButton from "@/components/admin/insights/delete-services-button";

export default async function AdminInsights() {
  const insights = await getAllInsights();
  const services = await getAllServices();

  return (
    <div className="containerfive">
      <div className="flex justify-between items-center">
        <div className="flex-grow text-center">
          <h2 className="title">Insights</h2>
        </div>
      </div>

      {/* Insights Discription */}
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {insights.length > 0 ? (
          insights.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "(Default) HERE FOR YOUR EVERY NEED"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description ||
                  "(default) At Realinvte, we believe that exceptional real estate investment opportunities begin with a vision. Our team is dedicated to providing unparalleled service, deep market insights, and exclusive access to the world’s most coveted properties. With a passion for excellence and a commitment to our clients, we turn investment aspirations into reality."}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteInsightButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-insights");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Description Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/insights/one/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Service Names */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Our Service Names
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {services.length > 0 ? (
          services.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                {item.description || "(default), Acquisition Services"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <DeleteServicesButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-insights");
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              No Description Found
            </div>
          </div>
        )}
        <div className="buttons mt-4 flex justify-end">
          <Link
            href={"/admin/insights/two/create"}
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

async function getAllInsights() {
  return fetchAllInsights();
}

async function getAllServices() {
  return fetchAllServices();
}
