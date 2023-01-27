import LoginContext from "./login-context";
import { useState } from "react";

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = (accessToken) => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const loginState = {
    login,
    loading,
    error: {},
    isLoggedIn,
    logout,
    setLoading,
  };

  return (
    <LoginContext.Provider value={loginState}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
