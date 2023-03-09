import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

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

export const useLogin = () =>
  useMutation(login, {
    onSuccess: (data) => {
      toast.success("Xoş gəlmisiz", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("token", data.token);
      window.location.href = `/`;
    },
    onError: (error) => {
      toast.error("Xəta baş verdi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });
