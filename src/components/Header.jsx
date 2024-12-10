import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { MenuOutlined, Close } from "@mui/icons-material";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      // Disable scrolling when sidebar is open
      document.body.style.overflow = "hidden";

      // Add event listener for outside clicks
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Restore scrolling when sidebar is closed
      document.body.style.overflow = "auto";

      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener and restore scroll
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <header>
      <div className="flex justify-between items-center mx-auto p-3">
        {/* Logos */}

        <div className="flex items-center gap-4">
          <a
            href="https://www.unist.hr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/UnistLogo.jpg"
              alt="UnistLogoImage"
              className="object-contain w-16 sm:w-24 lg:w-32 h-auto"
            />
          </a>
          <a
            href="https://www.pfst.unist.hr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/PFSTLogo.jpg"
              alt="PFSTLogoImage"
              className="object-contain w-16 sm:w-24 lg:w-32 h-auto"
            />
          </a>
          <Link to="/">
            <img
              src="/assets/AJKLogo.png"
              alt="AJKLogoImage"
              className="object-contain w-16 sm:w-24 lg:w-32 h-auto"
            />
          </Link>
        </div>

        {/* Menu bar */}
        <div className="sm:hidden flex items-center p-2 absolute right-4 fixed-position">
          <MenuOutlined
            onClick={showSidebar}
            className="cursor-pointer text-black scale-150"
          />
        </div>

        {/* Tabs */}
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-black font-medium hover:text-slate-500">
              Početna
            </li>
          </Link>
          <Link to="/o-nama">
            <li className="hidden sm:inline text-black font-medium hover:text-slate-500">
              O nama
            </li>
          </Link>
          <Link to="/nasi-projekti">
            <li className="hidden sm:inline text-black font-medium hover:text-slate-500">
              Projekti
            </li>
          </Link>
          <Link to="/partneri">
            <li className="hidden sm:inline text-black font-medium hover:text-slate-500">
              Partneri
            </li>
          </Link>
        </ul>

        {/* Sidebar */}
        <ul
          ref={sidebarRef}
          className={
            isSidebarOpen
              ? "sm:hidden absolute inset-0 h-screen left-1/3 flex flex-col items-center justify-start gap-10 p-8 bg-black/40 backdrop-blur-lg z-10"
              : "hidden"
          }
        >
          <Close
            onClick={showSidebar}
            className="cursor-pointer scale-150 text-customBrown-light hover:text-customBrown-dark mb-8"
          />

          <Link to="/" onClick={showSidebar}>
            <li className="text-customBrown-light font-medium hover:text-customBrown-dark text-2xl">
              Početna
            </li>
          </Link>
          <Link to="/o-nama" onClick={showSidebar}>
            <li className="text-customBrown-light font-medium hover:text-customBrown-dark text-2xl">
              O nama
            </li>
          </Link>
          <Link to="/nasi-projekti" onClick={showSidebar}>
            <li className="text-customBrown-light font-medium hover:text-customBrown-dark text-2xl">
              Projekti
            </li>
          </Link>
          <Link to="/partneri" onClick={showSidebar}>
            <li className="text-customBrown-light font-medium hover:text-customBrown-dark text-2xl">
              Partneri
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
