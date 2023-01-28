import LoginContext from "./login-context";
import { useState } from "react";

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const login = (accessToken) => {
    setIsLoggedIn(true);
    setToken(accessToken);
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
    token,
  };

  return (
    <LoginContext.Provider value={loginState}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
