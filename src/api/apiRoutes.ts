import axios from "axios";
import { LoginUserProps, RegisterUserProps } from "../types";

const baseUrl = "http://localhost:3001/api/auth";

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterUserProps) => {
  const data = await axios.post(`${baseUrl}/register`, {
    firstName,
    lastName,
    email,
    password,
  });
  return data.data;
};

export const login = async ({ email, password }: LoginUserProps) => {
  const data = await axios.post(
    `${baseUrl}/login`,
    { email, password },
    { withCredentials: true }
  );
  return data.data;
};

export const authStatus = async () => {
  return await axios.get(`${baseUrl}/status`);
};

export const logout = async () => {
  return await axios.post(`${baseUrl}/logout`);
};
