// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const linkIdle =
    "text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto 2xl:max-w-10/12 md:w-11/12 px-4 ">
        <div className="grid grid-cols-3 items-center gap-4 py-3">
          {/* Left: Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="inline-flex items-center gap-2"
            >
              <span className="text-xl">
                <img src="/icons8-logo-50.png" alt="" className="h-8 w-8" />
              </span>
              <span className="text-lg font-bold text-gray-900">
                Builderz
              </span>
            </NavLink>
          </div>

          <ul className="hidden md:flex justify-center items-center gap-6">
            <li>
              <button
                type="button"
                className={linkBase + " " + linkIdle}
                onClick={() => {
                  const el = document.getElementById("hero_part");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  closeMenu();
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className={linkBase + " " + linkIdle}
                onClick={() => {
                  const el = document.getElementById("advertisement");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  closeMenu();
                }}
              >
                Adversite
              </button>
            </li>
            <li>
              <button
                type="button"
                className={linkBase + " " + linkIdle}
                onClick={() => {
                  const el = document.getElementById("support");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  closeMenu();
                }}
              >
                Supports
              </button>
            </li>
            <li>
              <button
                type="button"
                className={linkBase + " " + linkIdle}
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  closeMenu();
                }}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                type="button"
                className={linkBase + " " + linkIdle}
                onClick={() => {
                  const el = document.getElementById("aboutUs");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  closeMenu();
                }}
              >
                AboutUs
              </button>
            </li>
          </ul>
          <div className="hidden md:flex justify-end">
            <NavLink
              to="/register"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-[#8D448B] border-1 border-[#8D448B] hover:bg-[#8D448B] hover:text-white  transition duration-300  focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Register
            </NavLink>
          </div>

          <div className="flex  ml-45 justify-end md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-gray-900 transition-transform ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-900 transition-transform ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 pt-2 pb-3">
            <ul className="flex flex-col gap-1">
              <li>
                <button
                  type="button"
                  className={linkBase + " " + linkIdle}
                  onClick={() => {
                    const el = document.getElementById("hero_part");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                    closeMenu();
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={linkBase + " " + linkIdle}
                  onClick={() => {
                    const el = document.getElementById("aboutUs");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                    closeMenu();
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={linkBase + " " + linkIdle}
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                    closeMenu();
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={linkBase + " " + linkIdle}
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                    closeMenu();
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="mt-3">
              <NavLink
                to="/register"
                onClick={closeMenu}
                className="block w-full text-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-[#8D448B] hover:[#8D448B] focus:outline-none focus:ring-2 focus:ring-gray-900/30"
              >
                Register
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
