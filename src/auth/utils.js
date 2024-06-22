import axios from "../utils/axios";
import {jwtDecode} from "jwt-decode"

export const isValidToken = (accessToken) => {
  if (!accessToken || typeof accessToken !== "string") return false;

  try {
    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 100;
    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Грешка при декодирането на токена", error);
    return false;
  }
};

export const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");

    delete axios.defaults.headers.common["Authorization"];
  }
};
