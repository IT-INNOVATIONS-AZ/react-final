import React from "react";

import { Route, Routes } from "react-router-dom";

import PostDetail from "./post-detail";
import Post from "./post";
import Profile from "./profile";

const Member = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="post" element={<Post />} />
      <Route path="post/:id" element={<PostDetail />} />
    </Routes>
  );
};

export default Member;
