import LoginContext from "./login-context";
import { useEffect, useState } from "react";

const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const isLoggedIn = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const login = (accessToken) => {
    setToken(accessToken);
    localStorage.setItem("token", accessToken);
  };

  const logout = () => {
    setToken("");
    localStorage.setItem("token", "");
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
