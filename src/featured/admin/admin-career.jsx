import React from "react";
import Link from "next/link";
import "./admin.css";
import { fetchAllCareerDescriptions } from "../../../server/career-description/career_descriptions";
import { fetchAllCareerRealinvte } from "../../../server/career-realivte/career_realinvte";
import { fetchAllexperience } from "../../../server/experience/experiences";
import { fetchAllExpectations } from "../../../server/expections/expectations";
import { fetchAllApplies } from "../../../server/apply/apply";
import DeleteCareerButton from "@/components/admin/career/delete-career-button";
import { revalidatePath } from "next/cache";
import DeleteRealinvteButton from "@/components/admin/career/delete-realinvte-button";
import DeleteExperiencesButton from "@/components/admin/career/delete-experiences-button";
import DeleteExpectButton from "@/components/admin/career/delete-expect-button";
import DeleteApplyButton from "@/components/admin/career/delete-apply-button";

export default async function AdminHome() {
  const careerDescriptions = await getAllCareer();
  const careerRealinvte = await getAllCareerRealinvte();
  const experience = await getAllExperience();
  const expectations = await getAllExpectation();
  const applies = await getAllApply();

  return (
    <div className="containerfive">
      <div className="flex justify-between items-center">
        <div className="flex-grow text-center">
          <h2 className="title">Career</h2>
        </div>
      </div>

      {/* Career Description */}
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {careerDescriptions.length > 0 ? (
          careerDescriptions.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                {item.careerDescription || "(default), Acquisition Services"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteCareerButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-career");
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
            href={"/admin/career/one/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Career Realinvte */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Why Realinvte?
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {careerRealinvte.length > 0 ? (
          careerRealinvte.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.realinvteTitle || "(Default) HERE FOR YOUR EVERY NEED"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.realinvteDescription || "(default), Acquisition Services"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteRealinvteButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-career");
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
            href={"/admin/career/two/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Our Core Values */}
      <div
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "red",
        }}
      >
        Our Core Values change from About Us
      </div>
      <br />

      {/* Experiences */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Experiences
      </div>

      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {experience.length > 0 ? (
          experience.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.experTitle || "(Default) HERE FOR YOUR EVERY NEED"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.experDescription || "(default), Acquisition Services"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteExperiencesButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-career");
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
            href={"/admin/career/three/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* What We Expect From You */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        What We Expect From You
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {expectations.length > 0 ? (
          expectations.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "(Default) HERE FOR YOUR EVERY NEED"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description || "(default), Acquisition Services"}
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteExpectButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-career");
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
            href={"/admin/career/four/create"}
            style={{ backgroundColor: "#90D26D" }}
            className="edit-button text-white py-2 px-4 rounded mr-2"
          >
            Create
          </Link>
        </div>
      </div>

      {/* Apply Today */}
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        Apply Today
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        className="bg-[#ECE3D7] mb-5"
      >
        {applies.length > 0 ? (
          applies.map((item) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {item.title || "(Default) HERE FOR YOUR EVERY NEED"}
              </div>
              <br />
              <p style={{ fontSize: "1.1rem" }}>
                {item.description || "(default), Acquisition Services"}
              </p>
              <br />
              <div style={{ fontSize: "1.1rem" }}>
                {item.email || "(Default) name@example.com"}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <DeleteApplyButton
                  id={item.id}
                  onDelete={async () => {
                    "use server";
                    revalidatePath("/admin/admin-career");
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
            href={"/admin/career/five/create"}
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

async function getAllCareer() {
  return fetchAllCareerDescriptions();
}

async function getAllCareerRealinvte() {
  return fetchAllCareerRealinvte();
}

async function getAllExperience() {
  return fetchAllexperience();
}

async function getAllExpectation() {
  return fetchAllExpectations();
}

async function getAllApply() {
  return fetchAllApplies();
}
