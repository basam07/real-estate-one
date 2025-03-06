"use client"
import React from "react";
import axios from "axios";

export default function DeleteMissionButton({id, onDelete}) {
    return <button
        className="delete-button py-1.5 px-4 rounded bg-[#FF2929]"
        onClick={async () => {
            if (confirm('Are you sure you want to delete?')) {
                await axios.delete(`/api/our-mission/${id}`);
                onDelete();
            }
        }}>
        Delete
    </button>;
}