import { IUser } from "../types";
import axiosInstance, { APPOROLE_TOKEN_NAME, saveToken } from "./config";

type RegisterUseTypes = IUser;

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUseTypes) => {
  console.log("dataRegister", name);
  try {
    const response = await axiosInstance.post("/user/create", {
      email,
      password,
      name,
    });
    return response.data.user;
  } catch (error) {
    console.log("error in registerUser", error);
    throw error;
  }
};

type LoginUserType = Omit<IUser, "name">;

export const loginUser = async ({ email, password }: LoginUserType) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    saveToken(APPOROLE_TOKEN_NAME, _token);
    return response.data.user;
  } catch (error) {
    console.log("error in loginUser", error);
    throw error;
  }
};
