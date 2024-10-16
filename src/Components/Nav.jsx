import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar shadow-lg fixed z-10 font-bold bg-base-100 md:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-2 rounded-md border-2 ${
                    isActive
                      ? "border-[#23BE0A] text-[#23BE0A]"
                      : "border-transparent hover:border-black"
                  }`
                }>
                Home
              </NavLink>

              <NavLink
                to="/Listed-books"
                className={({ isActive }) =>
                  `p-2 rounded-md border-2 ${
                    isActive
                      ? "border-[#23BE0A] text-[#23BE0A]"
                      : "border-transparent hover:border-black"
                  }`
                }>
                Listed Books
              </NavLink>
              <NavLink
                to="/Pages-to-Read"
                className={({ isActive }) =>
                  `p-2 rounded-md border-2 ${
                    isActive
                      ? "border-[#23BE0A] text-[#23BE0A]"
                      : "border-transparent hover:border-black"
                  }`
                }>
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal flex items-center gap-5 mr-5 px-5 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 rounded-md border-2 ${
                  isActive
                    ? "border-[#23BE0A] text-[#23BE0A]"
                    : "border-transparent hover:border-black"
                }`
              }>
              Home
            </NavLink>

            <NavLink
              to="/Listed-books"
              className={({ isActive }) =>
                `p-2 rounded-md border-2 ${
                  isActive
                    ? "border-[#23BE0A] text-[#23BE0A]"
                    : "border-transparent hover:border-black"
                }`
              }>
              Listed Books
            </NavLink>
            <NavLink
              to="/Pages-to-Read"
              className={({ isActive }) =>
                `p-2 rounded-md border-2 ${
                  isActive
                    ? "border-[#23BE0A] text-[#23BE0A]"
                    : "border-transparent hover:border-black"
                }`
              }>
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="btn bg-[#23BE0A] hover:bg-[#3ea32f] ">Sign In</a>
          <a className="btn btn-accent">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
