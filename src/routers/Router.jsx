import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
