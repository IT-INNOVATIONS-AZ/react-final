import React from "react";

import Layout from "../components/layout";
import App from "./App";
import Member from "./Member";

const Pages = () => {
  const token = localStorage.getItem("token");

  return <Layout>{!token ? <App /> : <Member />}</Layout>;
};

export default Pages;


 