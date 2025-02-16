import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminCategories from "../pages/Dashboard/Admin/Categories/AdminCategories";
import AdminGallery from "../pages/Dashboard/Admin/Gallery/AdminGallery";
import AdminFAQ from "../pages/Dashboard/Admin/FAQ/AdminFAQ";
import AdminServices from "../pages/Dashboard/Admin/Services/AdminServices";
import AdminProfile from "../pages/Dashboard/Admin/Profile/AdminProfile";
import AdminProducts from "../pages/Dashboard/Admin/Products/AdminProducts";

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
              path: "/dashboard",
              element: (
                <AdminRoute>
                  <AdminProfile></AdminProfile>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/categories",
              element: (
                <AdminRoute>
                  <AdminCategories></AdminCategories>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/products",
              element: (
                <AdminRoute>
                  <AdminProducts></AdminProducts>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/services",
              element: (
                <AdminRoute>
                  <AdminServices></AdminServices>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/faq",
              element: (
                <AdminRoute>
                  <AdminFAQ></AdminFAQ>
                </AdminRoute>
              ),
            },
            {
              path: "/dashboard/gallery",
              element: (
                <AdminRoute>
                  <AdminGallery></AdminGallery>
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
