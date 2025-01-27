import PropTypes from "prop-types";
import AuthContext from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const info = {
    user,
    loading,
    handelFirebaseLogin,
    handelFirebaseLogout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
