import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
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

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
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
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
