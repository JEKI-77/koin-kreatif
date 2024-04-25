import axios from "axios";

// const url = "https://api-koin-kreatif.cloud";
const url = "http://localhost:4000";

export const Signup = (data) => {
  try {
    const response = axios.post(`${url}/auth/signup`, data);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Melempar kembali kesalahan untuk penanganan lebih lanjut
  }
};

export const SignIn = (data) => {
  try {
    const response = axios.post(`${url}/auth/login`, data);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Melempar kembali kesalahan untuk penanganan lebih lanjut
  }
};
