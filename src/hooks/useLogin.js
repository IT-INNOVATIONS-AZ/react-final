import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const login = ({ email = "test", password = "demo" }) => {
  return axios
    .post(
      "http://localhost:8000/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};

export const useLogin = () => {
  return useMutation(login);
};
