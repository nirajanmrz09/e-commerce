import axiosInstance from "../axiosInstance";

export const getCartDetails = async () => {
  const response = await axiosInstance.get("/carts");
  return response;
};
