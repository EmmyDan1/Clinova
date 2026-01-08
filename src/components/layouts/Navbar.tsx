import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Doctors", path: "/doctors" },
    { label: "Appointments", path: "/appointment" },
    { label: "Contact", path: "/#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full ">
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className="
  mt-4 flex items-center justify-between rounded-2xl border border-white/20 md:bg-[#F8F4E9] px-5 py-0 backdrop-blur-lg"
        >
     
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl tracking-tight">
              <span className="font-bold text-yellow-400 lg:text-[#273f23]">C</span>
              <span className="font-medium text-yellow-400">linova</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium text-yellow-700 transition hover:text-yellow-600"
              >
                {item.label}
              </Link>
            ))}

            <Link to="/appointment">
              <Button
                size="sm"
                className="
  bg-yellow-50 hover:text-yellow-600
  hover:bg-yellow-300
  transition-colors duration-200
  rounded-full flex items-center gap-1
"
              >
                <span>Book Appointment</span>

                <svg className="w-4 h-4 " viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M7.5 10H12.5M12.5 10L10.5 8M12.5 10L10.5 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-1 text-yellow-100/50  hover:border border-yellow-100 hover:bg-white/10"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border border-white/20 p-6 backdrop-blur-lg md:hidden">
            <div className="flex flex-col gap-6">
              {/* Mobile Logo */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-900 text-white font-semibold">
                  C
                </div> */}
                {/* 
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-yellow-700">
                    Clinova
                  </p>
                  <span className="text-xs text-yellow-600">
                    Medical Center
                  </span>
                </div> */}
              </Link>

              {/* Divider */}
              <div className="h-px w-full bg-yellow-100" />

              {/* Mobile Nav Items */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-white transition hover:text-yellow-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link to="/appointment" onClick={() => setOpen(false)}>
                <Button
                  className="
            mt-2 w-full
            bg-yellow-50 text-yellow-900
            hover:bg-yellow-300 hover:text-yellow-700
            transition-colors duration-200
            rounded-full flex items-center justify-center gap-2
          "
                >
                  <span>Book Appointment</span>

                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M7.5 10H12.5M12.5 10L10.5 8M12.5 10L10.5 12"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
