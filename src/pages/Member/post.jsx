import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetPost } from "../../hooks/useGetPost";

const Post = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetPost();

  const onPostDetail = (id) => {
    console.log(id);
    navigate(`/post/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">UserId</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onPostDetail(item.id)}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>{item.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Post;
