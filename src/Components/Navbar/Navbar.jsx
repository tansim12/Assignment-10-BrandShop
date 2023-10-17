import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Profile from "../Profile/Profile";
import useAuthContext from "../../useAuthContext";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = useAuthContext();
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
              ? "active my-2 lg:my-0 lg:mx-2 font-bold"
              : isPending
              ? "pending"
              : "my-2 lg:my-0 lg:mx-2"
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
              ? "active my-2 lg:my-0 lg:mx-2 font-bold"
              : isPending
              ? "pending"
              : " my-2 lg:my-0 lg:mx-2"
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
              ? "active my-2 lg:my-0 lg:mx-2 font-bold"
              : isPending
              ? "pending"
              : "my-2 lg:my-0 lg:mx-2"
          }
        >
          <p className="text-2xl">
            <BsCart4></BsCart4>
          </p>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <div>
            <img
              className="  h-10"
              src="https://klbtheme.com/machic/intro/assets/img/logo-dark.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          {/* avatar div  */}
          <div>
            {
                user && <Profile></Profile>
            }
            
          </div>
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
