/* eslint-disable no-undef */
import axios from "axios";
// const url = "https://api-koin-kreatif.cloud";
const url = "http://localhost:4000";

export const PostCategory = (data, token) => {
  try {
    axios.post(`${url}/v1/category`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};
export const UpdateCategory = (id, data, token) => {
  try {
    axios.put(`${url}/v1/category/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const GetAllCategory = async (token) => {
  try {
    const data = await axios.get(`${url}/v1/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetbyIdCategory = async (id, token) => {
  try {
    const data = await axios.get(`${url}/v1/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteCategory = async (endpoint, id, token) => {
  try {
    const data = await axios.delete(`${url}/v1/${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
