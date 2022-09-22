import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { authentication } from "../../../firebase/firebase-config";

import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    onAuthStateChanged(authentication, (userData) => {
      if (userData) {
        setUser(userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((result) => setUser(result?.user))
      .catch((e) => {
        const errorData = e.toString();
        let errorMessage = errorData?.split(":")[2];

        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (!email) {
      setError("Error: email is required");
      setIsLoading(false);
      return;
    }

    if (password !== repeatedPassword) {
      setError("Error: password does not match");
      setIsLoading(false);
      return;
    }

    registerRequest(email, password)
      .then((result) => setUser(result?.user))
      .catch((e) => {
        const errorData = e.toString();
        let errorMessage = errorData?.split(":")[2];

        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const onLogout = () => {
    setIsLoading(true);
    setUser(null);
    signOut(authentication)
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
