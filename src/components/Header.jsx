import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-slate-700 font-bold text-sm sm:text-xl">ASCU</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to='/'>
            <li className="text-slate-700 hover:underline">Početna</li>
          </Link>
          <Link to='/mi-smo'>
            <li className="text-slate-700 hover:underline">Mi Smo</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
