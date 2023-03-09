import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () =>
  useMutation(() => axios.post("http://localhost:8000/logout"));
