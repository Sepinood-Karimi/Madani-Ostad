import LoginContext from "./login-context";
import { useState } from "react";

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (accessToken) => {
    setIsLoggedIn(true);
  };

  const loginState = {
    login: login,
    loading: false,
    error: {},
    isLoggedIn,
  };

  return (
    <LoginContext.Provider value={loginState}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
