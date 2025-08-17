"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="text-black bg-gradient-to-r from-orange-500 to-yellow-500 flex justify-between items-center gap-4 sm:gap-6 fixed top-0 right-0 py-2 px-4 z-[100] w-full backdrop-blur-lg">
        <Link
          href="https://www.meetup.com/vanawsug/"
          target="_blank"
          className="block"
          prefetch={false}
        >
          <img src="/usergroup.png" alt="Logo" width={50} height="auto" />
        </Link>
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex flex-row justify-between items-center gap-4 sm:gap-6">
          <Link
            href="#speakers"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Speakers
          </Link>
          <Link
            href="#schedule"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Schedule
          </Link>

          <Link
            href="#location"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Location
          </Link>
        </div>
      </nav>
      {menuOpen && (
        <div className="sm:hidden fixed top-0 left-0 bg-gradient-to-r from-orange-500 to-yellow-500 w-full h-screen flex flex-col items-start pt-20 pl-4 gap-4 z-20">
          <Link
            href="#speakers"
            className="text-md font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Speakers
          </Link>
          <Link
            href="#schedule"
            className="text-md font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Schedule
          </Link>

          <Link
            href="#location"
            className="text-md font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Location
          </Link>
        </div>
      )}
    </div>
  );
}
