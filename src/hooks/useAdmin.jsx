import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const isAdmin = user?.email == `${import.meta.env.VITE_ADMIN_EMAIL}`;
  return { isAdmin };
};

export default useAdmin;
