import { Link, NavLink } from "react-router-dom";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import "./toggle.css";

import Profile from "../Profile/Profile";
import useAuthContext from "../../useAuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (!theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  //   handleLogOut
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Log out successfully"))
      .catch((err) => toast.error(err.message));
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "active my-2 lg:my-0 lg:mx-2 font-bold hover:text-white"
              : isPending
              ? "pending"
              : "my-2 lg:my-0 lg:mx-2 hover:text-neutral font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addProducts"}
          className={({ isActive, isPending }) =>
            isActive
              ? "active my-2 lg:my-0 lg:mx-2 font-bold hover:text-white"
              : isPending
              ? "pending"
              : " my-2 lg:my-0 lg:mx-2  hover:text-neutral font-semibold"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/cartProducts"}
          className={({ isActive, isPending }) =>
            isActive
              ? "active my-2 lg:my-0 lg:mx-2 font-bold hover:text-white"
              : isPending
              ? "pending"
              : "my-2 lg:my-0 lg:mx-2  hover:text-neutral font-semibold"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  // toggle

  return (
    <div>
      <div className="navbar shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52 "
            >
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <div>
            <img
              className="  h-10"
              src="https://klbtheme.com/machic/intro/assets/img/logo-dark.png"
              alt="Author"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          {/* toggle dark theme  */}
          <div>
            <p onClick={() => setTheme(!theme)} className="text-4xl mr-4 p-2">
              {!theme ? (
                <BsToggle2Off></BsToggle2Off>
              ) : (
                <BsToggle2On></BsToggle2On>
              )}
            </p>
          </div>
          {/* avatar div  */}
          <div>{user && <Profile></Profile>}</div>
          <div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-sm sm:btn-md btn-neutral"
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn btn-sm sm:btn-md btn-neutral">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Navbar;
