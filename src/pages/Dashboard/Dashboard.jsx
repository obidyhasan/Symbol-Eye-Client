import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { handelFirebaseLogout } = useAuth();

  return (
    <div className="max-width grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
      <div className="border h-min border-gray-50 rounded-md">
        <ul className="menu w-full font-medium space-y-1">
          <li>
            <NavLink to={"/dashboard/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/categories"}>Categories</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/faq"}>FAQ</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/gallery"}>Gallery</NavLink>
          </li>
          <li>
            <button
              onClick={() => handelFirebaseLogout()}
              className="btn btn-sm"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="p-4 md:col-span-2 lg:col-span-3 w-full rounded-lg bg-gray-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
