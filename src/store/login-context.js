import React from "react";

const defaultLoginState = {
  login: () => {},
  loading: false,
  error: {},
  isLoggedIn: false,
};
const LoginContext = React.createContext(defaultLoginState);
export default LoginContext;
