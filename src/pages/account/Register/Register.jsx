import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "../../../utils/auth";

const Register = () => {
  const navigateTo = useNavigate();

  // State untuk menyimpan nilai email dan password
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    userName,
    email,
    password,
    confPassword: password,
  };

  // Fungsi untuk menangani pengiriman data Register
  const handleRegister = async () => {
    try {
      const response = Signup(data);
      console.log(response);
      navigateTo("/login");
      alert("Registrasi berhasil");
    } catch (error) {
      console.log("Error:", error);
      alert("Gagal melakukan registrasi. Silakan coba lagi.");
    }
  };

  return (
    <div className="max-h-full  justify-center items-center  flex w-full h-full bg-gray-100   ">
      <div className="flex flex-col gap-8 w-full md:w-[50%]  md:px-40 py-8  m-4 mb-32 ">
        <div className="w-full ">
          <form className="w-full ">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600 "
              >
                Create your Name
              </label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="name"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500"
                placeholder="name"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600 "
              >
                Create your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600 "
              >
                Create your Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="*****"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className=" flex justify-center items-center">
              <button
                onClick={handleRegister}
                className="text-gray-800 text-xl px-8  hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2  sm:w-auto  py-2.5 text-center dark:bg-[#5CE1E6]  "
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          sudah punya akun?{" "}
          <span
            className="cursor-pointer ml-1"
            onClick={() => navigateTo("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
