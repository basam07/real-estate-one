"use client";
import React from "react";
import Left from "@/components/footer/_partials/_left";
import Middle from "@/components/footer/_partials/_middle";
import Right from "@/components/footer/_partials/_right";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) return null;

  return (
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-20 px-5 py-12">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}
