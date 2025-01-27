import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { handelFirebaseLogout } = useAuth();

  return (
    <div className="max-width grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
      <div className="border h-min border-gray-50 rounded-md">
        <ul className="menu w-full font-medium space-y-1">
          <li>
            <NavLink>Dashboard</NavLink>
          </li>
          <li>
            <NavLink>Add Category</NavLink>
          </li>
          <li>
            <NavLink>Add Product</NavLink>
          </li>
          <li>
            <NavLink>Add Services</NavLink>
          </li>
          <li>
            <NavLink>Add FAQ</NavLink>
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
      <div className="md:col-span-2 lg:col-span-3 w-full min-h-screen rounded-lg bg-gray-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
