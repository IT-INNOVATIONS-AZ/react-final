import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPostById = (id) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);

export const useGetPostById = (id) =>
  useQuery(["post", id], () => getPostById(id));
