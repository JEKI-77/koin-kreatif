import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "../../../utils/auth";
import Swal from "sweetalert2";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";

const Register = () => {
  const navigateTo = useNavigate();

  // State untuk menyimpan nilai email dan password
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inputRefs = {
    userName: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  // Fungsi untuk memindahkan fokus ke input berikutnya saat tombol Enter ditekan
  const handleKeyPress = (e, nextInputRef) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Menghindari submit form secara default
      nextInputRef.current.focus(); // Pindahkan fokus ke input berikutnya
    }
  };

  const data = {
    userName,
    email,
    password,
    confPassword: password,
  };

  // Fungsi untuk menangani pengiriman data Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Signup(data);
      console.log(response);
      Swal.fire({
        showConfirmButton: false,
        timer: 1500,
        title: "Registrasi berhasil",
        icon: "success",
      });
      setTimeout(() => {
        navigateTo("/login");
      }, 2000);
    } catch (error) {
      console.log("Error:", error);
      Swal.fire({
        title: "Registrasi gagal ! ",
        text: "Silahkan coba lagi ",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  return (
    <div className="max-h-full  justify-center items-center  flex w-full h-full   ">
      <div className="flex flex-col gap-8 w-full md:w-[70%]  md:px-40 py-8  m-4 mb-32 ">
        <div className="w-full ">
          <form className="w-full ">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600 "
              >
                Name
              </label>
              <input
                ref={inputRefs.userName}
                onKeyDown={(e) => handleKeyPress(e, inputRefs.email)}
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
                Email
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
                Password
              </label>
              <div className="relative flex">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="*****"
                  required
                  autoComplete="current-password"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  className="cursor-pointer p-2 mt-1 text-xl  absolute right-0 "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeSharp /> : <BsEyeSlash />}
                </span>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <button
                onClick={handleRegister}
                className="text-white text-xl px-8   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2  sm:w-auto  py-2.5 text-center bg-[#ea954a]  "
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
