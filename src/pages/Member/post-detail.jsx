import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostById } from "../../hooks/useGetPostById";
const PostDetail = () => {
  const { id } = useParams();
  const [postId, setPostId] = useState(id);
  const { data, isSuccess } = useGetPostById(postId);

  console.log(data);

  return (
    isSuccess && (
      <div>
        <button onClick={() => setPostId(+postId + 1)}>{postId}</button>
        <h1>Post Detail</h1>
        <ul>
          <li>Title:{data.title} </li>
          <li>Body:{data.body} </li>
        </ul>
      </div>
    )
  );
};

export default PostDetail;
