'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../assets/logo.png';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Burger Menu for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="text-black p-2 rounded-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-[var(--global-cultured-color)] text-black h-full w-64 md:w-72 z-20 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="bg-black p-4 flex justify-between items-center">
          <Link href="/admin">
            <Image src={Logo} alt="Logo" className="w-full" />
            
          </Link>
          {/* Close Icon for Mobile */}
          <button
            onClick={toggleSidebar}
            className="text-white md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-4">
            {/* Properties Link */}
            <li>
              <Link
                href="/admin/properties"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--global-white-choco-color)] text-black"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ion-bag text-2xl"></i>
                <span className="text-lg">Properties</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/blogs"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--global-white-choco-color)] text-black"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ion-bag text-2xl"></i>
                <span className="text-lg">Blogs</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/home"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--global-white-choco-color)] text-black"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ion-bag text-2xl"></i>
                <span className="text-lg">Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/about"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--global-white-choco-color)] text-black"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ion-bag text-2xl"></i>
                <span className="text-lg">About Us</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/insights"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--global-white-choco-color)] text-black"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ion-bag text-2xl"></i>
                <span className="text-lg">Insights</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/career"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--global-white-choco-color)] text-black"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="ion-bag text-2xl"></i>
                <span className="text-lg">Career</span>
              </Link>
            </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
