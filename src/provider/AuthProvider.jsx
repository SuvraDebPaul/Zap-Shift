import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  reload,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createNewUserWithEmail = async (email, password) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const updateUserProfile = async (updatedInfo) => {
    try {
      setLoading(true);
      if (!auth.currentUser) {
        console.log("Invalid User");
        return;
      }
      await updateProfile(auth.currentUser, { ...updatedInfo });
      await reload(auth.currentUser);
      setUser(auth.currentUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getUserProfileFromFirebase = () => {
    if (auth.currentUser) return auth.currentUser || null;
  };

  const signUserWithEmail = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createNewUserWithEmail,
    updateUserProfile,
    getUserProfileFromFirebase,
    signUserWithEmail,
    signOutUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
