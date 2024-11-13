import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center mx-auto p-3">
        <Link to="/">
          <h1 className="text-blue-700 font-bold text-sm sm:text-xl">ASCU</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to='/'>
            <li className="text-blue-700 font-medium hover:text-slate-500">Početna</li>
          </Link>
          <Link to='/mi-smo'>
            <li className="text-blue-700 font-medium hover:text-slate-500">Mi Smo</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
