import axios from "axios";
const url = "http://localhost:4000";

export const PostOpenAi = async (data) => {
  try {
    // const token = "sk-proj-P8BU4cksoF12Aga2OBxbT3BlbkFJnb6H85WHsWxBvUY2drJ2";
    const token = "sk-proj-QPLq9c2TwviGygtqaE3MT3BlbkFJXZRsopUxub3fXRl48xex";
    const response = await axios.post(`${url}/openai`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Menyertakan token dalam header Authorization
      },
    });
    return response; // Mengembalikan data respons dari server
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data from server");
  }
};
