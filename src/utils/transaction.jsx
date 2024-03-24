/* eslint-disable no-undef */
import axios from "axios";

export const PostTransaction = (data) => {
  try {
    axios.post(`${import.meta.env.VITE_APP_URL}/v1/transactions`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};
export const UpdateTransaction = (data, id) => {
  try {
    axios.post(`${import.meta.env.VITE_APP_URL}/v1/transactions/${id}`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const GetAllTransaction = async () => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_APP_URL}/v1/transactions`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetbyIdTransaction = async (id) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_APP_URL}/v1/transactions/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteTransaction = async (endpoint, id) => {
  try {
    const data = await axios.delete(
      `${import.meta.env.VITE_APP_URL}/v1/${endpoint}/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
