import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useGetProfile } from "../../hooks/useGetProfile";

const Profile = () => {
  const { userData } = useAuth();
  const {
    user: { id, username },
  } = userData || {
    user: { id: 1, username: "demo" },
  };
  console.log(userData);
  return (
    <div>
      <h1>id: {id}</h1>
      <h1>username: {username}</h1>
    </div>
  );
};

export default Profile;
