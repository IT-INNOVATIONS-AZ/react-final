import React, { useEffect, useMemo } from "react";
import {useLocation,useNavigate} from "react-router-dom";
import queryString from 'query-string';
import { useLogin } from "../../hooks/useLogin";
const Home = () => {
  const { mutate, data } = useLogin();
 
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
