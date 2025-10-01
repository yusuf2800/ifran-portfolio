"use client";
import { useState } from "react";

const Header = ({ onNavClick }: { onNavClick: (label: string) => void }) => {
  const navLabels = ["Home", "Skills", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-transparent/10 px-6 py-3 backdrop-blur-3xl">
      <div className="flex-shrink-0">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[85px] sm:w-[120px] cursor-pointer"
          onClick={() => onNavClick("Home")}
        />
      </div>

      <nav className="hidden gap-9 font-medium text-[#191970] md:flex absolute left-1/2 top-1/2 -translate-1/2">
        {navLabels.map((label, i) => (
          <li
            key={i}
            className="cursor-pointer list-none hover:text-blue-600"
            onClick={() => onNavClick(label)}
          >
            {label}
          </li>
        ))}
      </nav>

      <div className="hidden gap-4 md:flex">
        <button
          className="cursor-pointer rounded-sm bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onClick={() => onNavClick("hire")}
        >
          Hire
        </button>
        <a href="/CV.pdf" download="irfanCV.pdf">
          <button className="cursor-pointer rounded-sm border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-100">
            Download CV
          </button>
        </a>
      </div>

      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-[#191970]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLabels.map((label, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => {
                  onNavClick(label);
                  setMenuOpen(false);
                }}
              >
                {label}
              </li>
            ))}
            <div className="flex flex-col gap-y-2.5 mt-5">
              <li>
                <button
                  className="h-[40px] w-[130px] cursor-pointer rounded-sm bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => {
                    onNavClick("hire");
                    setMenuOpen(false);
                  }}
                >
                  Hire
                </button>
              </li>
              <li>
                <a href="/CV.pdf" download="irfanCV.pdf">
                  <button className="h-[40px] w-[130px] cursor-pointer rounded-sm border border-blue-600 text-blue-600 hover:bg-blue-100">
                    Download CV
                  </button>
                </a>
              </li>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
