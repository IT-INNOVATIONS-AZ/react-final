import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Navbar isAuth={localStorage.getItem("token")} />
      {children}
    </div>
  );
};

export default Layout;
