import { redirect } from "react-router-dom";

export const getAuthToken = () => localStorage.getItem("token");

export const tokenLoader = () => getAuthToken();

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) return redirect("/auth");

  return null;
};
