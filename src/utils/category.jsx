/* eslint-disable no-undef */
import axios from "axios";

export const PostCategory = (data) => {
  try {
    axios.post(`${import.meta.env.VITE_APP_URL}/v1/category`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};
export const UpdateCategory = (id, data) => {
  try {
    axios.put(`${import.meta.env.VITE_APP_URL}/v1/category/${id}`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const GetAllCategory = async () => {
  try {
    const data = await axios.get(`${import.meta.env.VITE_APP_URL}/v1/category`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetbyIdCategory = async (id) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_APP_URL}/v1/category/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteCategory = async (endpoint, id) => {
  try {
    const data = await axios.delete(
      `${import.meta.env.VITE_APP_URL}/v1/${endpoint}/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
