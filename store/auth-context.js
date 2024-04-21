import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export default function AuthContextPrivoder({ children }) {
  const [authToken, setAuthToken] = useState();
  const authenticate = (token) => {
    setAuthToken(toekn);
  };
  const logout = () => {
    setAuthToken(null);
  };
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
