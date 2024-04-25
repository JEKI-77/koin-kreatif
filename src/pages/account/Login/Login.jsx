import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../../../utils/auth";

const Login = () => {
  const navigateTo = useNavigate();

  // State untuk menyimpan nilai userName dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  // Fungsi untuk menangani pengiriman data login
  const handleLogin = () => {
    // Memeriksa apakah email dan password tidak kosong
    if (email && password) {
      try {
        SignIn(data);
        navigateTo("/");
        alert("Login berhasil");
      } catch (error) {
        console.log("Error:", error);
        alert("Gagal melakukan login. Silakan coba lagi.");
      }
    } else {
      alert("Kolom input masih kosong");
    }
  };

  return (
    <div className=" justify-center  flex w-full h-full   bg-gray-100   ">
      <div className="flex flex-col gap-8 w-full md:w-[50%]  md:px-40 py-20  m-4 bg-gray-100    ">
        <div className="w-full">
          <form className="w-full">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600  "
              >
                Insert your email
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
                className="block mb-2 text-sm font-medium ml-1 text-gray-600  "
              >
                Insert Your Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                id="password"
                placeholder="*****"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className=" flex justify-center items-center">
              <button
                onClick={handleLogin}
                className="text-gray-800 text-xl px-8  hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2  sm:w-auto  py-2.5 text-center dark:bg-[#5CE1E6]  "
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center">
          Belum punya akun?{" "}
          <span
            className="cursor-pointer ml-1"
            onClick={() => navigateTo("/register")}
          >
            Daftar
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
