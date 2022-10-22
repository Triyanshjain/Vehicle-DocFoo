import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      {/* ------------------------NAVBAR------------------------ */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <Link to="/signup" className="btn btn-ghost normal-case text-xl">
            Sign Up
          </Link>
        </div>
      </div>

      {/* --------------------------LOGIN------------------------ */}
      <div className="hero-container">
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col gap-5 lg:flex-row-reverse gap-x-9">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold ">Login now!</h1>
              <p className="py-6 font-pop ">
                Be a part of the best Web-app to fulfill all your vehicle needs.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body ml-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <button href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </button>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <Link to="/db" className="btn btn-primary">
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
