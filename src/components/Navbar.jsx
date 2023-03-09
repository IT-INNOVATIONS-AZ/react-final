import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
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
  const { handleLogout } = useAuth();
  if (isAuth) {
    return (
      <nav>
        {memberRoutes.map((route, index) => (
          <Link key={index} to={route.path}>
            {route.name}
          </Link>
        ))}
        <button onClick={handleLogout}>Logout</button>
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
