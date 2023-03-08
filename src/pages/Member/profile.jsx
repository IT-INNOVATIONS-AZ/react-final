import React from "react";
import { useGetProfile } from "../../hooks/useGetProfile";

const Profile = () => {
  const { data } = useGetProfile();

  return (
    <div>
      <h1>id: {data?.user.id}</h1>
      <h1>username: {data?.user.username}</h1>
    </div>
  );
};

export default Profile;
