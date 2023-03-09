import { createContext } from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { mutate: login, isLoading: loginLoading, data } = useLogin();
  const { data: userData, isLoading: userLoading } = useGetProfile();
  const { mutate: logout } = useLogout();

  const handleLogin = ({ email, password }) => {
    login({ email, password });
    if (data) {
      localStorage.setItem("token", data.token);
    }
    window.location.href = "/";
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const value = {
    handleLogin,
    loginLoading,
    userData,
    userLoading,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
