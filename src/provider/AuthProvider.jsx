import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  reload,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const createNewUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = async (updatedInfo) => {
    if (!auth.currentUser) {
      console.log("Invalid User");
      return;
    }
    await updateProfile(auth.currentUser, { ...updatedInfo });
    await reload(auth.currentUser);
  };
  const getUserProfileFromFirebase = () => {
    if (auth.currentUser) return auth.currentUser || null;
  };
  const authInfo = {
    createNewUserWithEmail,
    updateUserProfile,
    getUserProfileFromFirebase,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
