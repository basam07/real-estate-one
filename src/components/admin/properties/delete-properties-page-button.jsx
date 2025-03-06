"use client"
import React from "react";
import {deleteBlog} from "../../../../server/blogs/blogs";
import {deleteProperty} from "../../../../server/properties/properties";
import axios from "axios";

export default function DeletePropertiesPageButton({slug, onDelete}) {
    return <button
        className="delete-button py-1.5 px-4 rounded bg-[#FF2929]"
        onClick={async () => {
            if (confirm('Are you sure you want to delete the property?')) {
                await axios.delete(`/api/properties/${slug}`);
                onDelete();
            }
        }}>
        Delete
    </button>;
}