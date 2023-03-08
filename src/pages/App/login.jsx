import React, { useEffect, useMemo } from "react";
import axios from "axios";
import { useLogin } from "../../hooks/useLogin";
const Home = () => {
  const { mutate, data } = useLogin();

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    }
  }, [data]);

  const onLogin = () => {
    mutate({ email: "demo@demo.demo", password: "demo" });
  };
  return (
    <div>
      <h1>Login</h1>
      <input type="text" />
      <input type="password" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Home;
