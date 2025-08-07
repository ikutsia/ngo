import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  console.log("AuthProvider rendering...");
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserProfile(displayName) {
    return updateProfile(auth.currentUser, { displayName });
  }

  useEffect(() => {
    console.log("AuthProvider useEffect running...");
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("Auth state changed:", user);
        setCurrentUser(user);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error in AuthProvider useEffect:", error);
      setLoading(false);
    }
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
