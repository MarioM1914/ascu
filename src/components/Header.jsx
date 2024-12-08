import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center mx-auto p-3">
        <Link to="/">
        <div className="flex items-center gap-4">
        <img
          src="/assets/UnistLogo.jpg"
          alt="UnistLogoImage"
          className="object-contain w-16 sm:w-24 lg:w-32 h-auto"
        />
        <img
          src="/assets/PFSTLogo.jpg"
          alt="PFSTLogoImage"
          className="object-contain w-16 sm:w-24 lg:w-32 h-auto"
        />
        <img
          src="/assets/AJKLogo.png"
          alt="AJKLogoImage"
          className="object-contain w-16 sm:w-24 lg:w-32 h-auto"
        />
        </div>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-blue-700 font-medium hover:text-slate-500">
              Početna
            </li>
          </Link>
          <Link to="/mi-smo">
            <li className="text-blue-700 font-medium hover:text-slate-500">
              O nama
            </li>
          </Link>
          <Link to="/nasi-projekti">
            <li className="text-blue-700 font-medium hover:text-slate-500">
              Projekti
            </li>
          </Link>
          <Link to="/partneri">
            <li className="text-blue-700 font-medium hover:text-slate-500">
              Partneri
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
