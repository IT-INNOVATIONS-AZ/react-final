import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const memberRoutes = [
  {
    path: "/",
    name: "Profile",
  },
  {
    path: "post",
    name: "Post",
  },
  {
    path: "post/:id",
    name: "PostDetail",
  },
];

const appRoutes = [
  {
    path: "/",
    name: "Login",
  },
];

const Navbar = ({ isAuth }) => {
  const { mutate } = useLogout();
  if (isAuth) {
    return (
      <nav>
        {memberRoutes.map((route, index) => (
          <Link key={index} to={route.path}>
            {route.name}
          </Link>
        ))}
        <button
          onClick={() => {
            mutate();
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </nav>
    );
  }
  return (
    <nav>
      {appRoutes.map((route, index) => (
        <Link key={index} to={route.path}>
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
