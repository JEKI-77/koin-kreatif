/* eslint-disable no-undef */
import axios from "axios";
// const url = "https://api-koin-kreatif.cloud";
const url = "http://localhost:4000";

export const PostTransaction = (data, token) => {
  try {
    axios.post(`${url}/v1/transactions`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const UpdateTransaction = (id, data, token) => {
  try {
    axios.put(`${url}/v1/transactions/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);

    // Logika untuk menangani kesalahan
  }
};

export const GetAllTransaction = async (
  token,
  startDate = "",
  endDate = "",
  categories = "",
  status = ""
) => {
  try {
    const data = await axios.get(
      `${url}/v1/transactions?startDate=${startDate}&endDate=${endDate}&category=${categories}&status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetbyIdTransaction = async (id, token) => {
  try {
    const data = await axios.get(`${url}/v1/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteTransaction = async (endpoint, id, token) => {
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
