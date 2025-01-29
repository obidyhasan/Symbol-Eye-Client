import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/dashboard",
          element: (
            <AdminRoute>
              <Dashboard></Dashboard>
            </AdminRoute>
          ),
          children: [
            {
              path: "/dashboard/profile",
              element: (
                <AdminRoute>
                  <h1>Profile</h1>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/categories",
              element: (
                <AdminRoute>
                  <h1>Categories</h1>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/products",
              element: (
                <AdminRoute>
                  <h1>Products</h1>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/services",
              element: (
                <AdminRoute>
                  <h1>Services</h1>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/faq",
              element: (
                <AdminRoute>
                  <h1>FAQ</h1>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/gallery",
              element: (
                <AdminRoute>
                  <h1>Gallery</h1>
                </AdminRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
