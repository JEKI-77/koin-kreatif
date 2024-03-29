/* eslint-disable no-undef */
import axios from "axios";
const url = "api-koin-kreatif.cloud";

export const PostTransaction = (data) => {
  try {
    axios.post(`${url}/v1/transactions`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};
export const UpdateTransaction = (id, data) => {
  try {
    axios.put(`${url}/v1/transactions/${id}`, data);
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const GetAllTransaction = async () => {
  try {
    const data = await axios.get(`${url}/v1/transactions`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetbyIdTransaction = async (id) => {
  try {
    const data = await axios.get(`${url}/v1/transactions/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteTransaction = async (endpoint, id) => {
  try {
    const data = await axios.delete(`${url}/v1/${endpoint}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
