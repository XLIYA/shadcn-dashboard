// api/courseApi.ts

import { api } from "./axios";

export const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};

export const getEvent = async () => {
  const response = await api.get("/events");
  return response.data;
};
