import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPosts = axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((res) => res.data);

export const useGetPost = () => useQuery(["posts"], () => getPosts);
