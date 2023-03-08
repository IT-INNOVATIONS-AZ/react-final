import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getProfile = axios
  .get("http://localhost:8000/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((res) => res.data);

export const useGetProfile = () => useQuery(["profile"], () => getProfile);
