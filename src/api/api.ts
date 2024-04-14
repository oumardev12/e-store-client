import axios from "axios";
import { logInSchemaType, signUpSchemaType } from "../schemas/schemas";
import { UserInfo, checkoutType, singleUserType } from "../types/types";

// const baseURL = import.meta.env.VITE_API_BASE_URL;
const baseURL = "https://e-store-server-sg6p.onrender.com";

const signUp = async (data: signUpSchemaType) => {
  const res = await axios.post<UserInfo>("/signup", data, {
    baseURL,
    withCredentials: true,
  });

  return res;
};

const logIn = async (data: logInSchemaType) => {
  const res = await axios.post<UserInfo>("/login", data, {
    baseURL,
    withCredentials: true,
  });

  return res;
};

const getSingleUser = async (user_id: string) => {
  const { data } = await axios.get<singleUserType>(`/user-info/${user_id}`, {
    baseURL,
    withCredentials: true,
  });

  return data;
};

const logOut = async () => {
  const { data } = await axios.get<{ success: boolean }>("/logout", {
    withCredentials: true,
    baseURL,
  });
  return data;
};

const checkout = async (user_id: string, data: checkoutType) => {
  const res = await axios.post(`/checkout/${user_id}`, data, {
    baseURL,
    withCredentials: true,
  });

  console.log(res);

  return res;
};

export { signUp, logIn, getSingleUser, logOut, checkout };
