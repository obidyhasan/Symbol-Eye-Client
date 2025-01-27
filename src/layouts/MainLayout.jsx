import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import LoadingLayout from "./LoadingLayout";

const MainLayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
