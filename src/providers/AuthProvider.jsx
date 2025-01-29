import PropTypes from "prop-types";
import AuthContext from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const info = {
    user,
    loading,
    setLoading,
    handelFirebaseLogin,
    handelFirebaseLogout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        // Get token from api and store on local storage
        const userInfo = { email: currentUser?.email };
        axiosPublic
          .post("/api/jwt", userInfo)
          .then((result) => {
            if (result?.data?.token) {
              localStorage.setItem("access-token", result?.data?.token);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setUser(null);
        setLoading(false);
        // Remove token if user is logged out
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  function handelFirebaseLogin(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handelFirebaseLogout() {
    setLoading(true);
    return signOut(auth);
  }

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
