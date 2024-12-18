import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const newUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    newUser,
    userLogin,
    userLogout,
    userGoogleLogin,
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("State captured", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`https://job-seekerz-server.vercel.app/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("login", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://job-seekerz-server.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("Logout", res.data);
            setLoading(false);
          });
      }

      return () => {
        unsubcribe();
      };
    });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
