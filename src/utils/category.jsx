/* eslint-disable no-undef */
import axios from "axios";
// const url = "https://api-koin-kreatif.cloud";
const url = "http://localhost:4000";

export const PostCategory = (data) => {
  try {
    axios.post(`${url}/v1/category`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};
export const UpdateCategory = (id, data) => {
  try {
    axios.put(`${url}/v1/category/${id}`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const GetAllCategory = async () => {
  try {
    const data = await axios.get(`${url}/v1/category`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetbyIdCategory = async (id) => {
  try {
    const data = await axios.get(`${url}/v1/category/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteCategory = async (endpoint, id) => {
  try {
    const data = await axios.delete(`${url}/v1/${endpoint}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
