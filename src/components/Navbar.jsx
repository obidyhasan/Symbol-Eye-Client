import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";
import { LuUserRound } from "react-icons/lu";

const Navbar = () => {
  const navbarLink = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink>Products</NavLink>
      </li>
      <li>
        <NavLink>Services</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 sticky top-0 z-50 shadow">
      <div className="max-width">
        <div className="py-4 navbar flex justify-between px-0">
          <div className="flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-4 cursor-pointer lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navbarLink}
              </ul>
            </div>
            <Link className="text-xl font-bold flex items-center gap-1">
              <img
                src={logo}
                className="w-10 h-10 hidden lg:block object-contain"
                alt="logo"
              />{" "}
              Symbol Eye
            </Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarLink}</ul>
          </div>
          <div className="">
            <div className="cursor-pointer border w-10 h-10 rounded-full flex items-center justify-center border-base-300">
              <LuUserRound className="text-xl"></LuUserRound>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
