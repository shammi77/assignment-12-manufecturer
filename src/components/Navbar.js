import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = ({ children }) => {
  //  for signout
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w navbar bg-base-300 p-10 m-10">
          <div className="flex-1 px-2 mx-2 text-2xl">
            Computer Parts manufacturer
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block ">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink to="/home" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/blogs" className="rounded-lg">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-portfolio" className="rounded-lg">
                  My Portfolio
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/dashboard" className="rounded-lg">
                    Dashboard
                  </NavLink>
                </li>
              )}
              {
                user && (
                  <li> 
                <div className="indicator">
                  <span className="indicator-item badge">User Name</span>
                  <input
                    type="text"
                    disabled value={user?.displayName }
                    className="input input-bordered"
                  />
                </div>
              </li>
                )
              }
              <li>
                {user ? (
                  <button className="btn btn-active btn-ghost" onClick={logout}>
                    Sign Out
                  </button>
                ) : (
                  <NavLink to="/login" className="rounded-lg">
                    Login
                  </NavLink>
                )}
              </li>
              
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/home" className="rounded-lg">
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/blogs" className="rounded-lg">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-portfolio" className="rounded-lg">
              {" "}
              My Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="rounded-lg">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
