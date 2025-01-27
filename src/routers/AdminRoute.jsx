import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import LoadingLayout from "../layouts/LoadingLayout";
import useAdmin from "../hooks/useAdmin";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin } = useAdmin();

  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};

export default AdminRoute;
