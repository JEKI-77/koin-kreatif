/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../../../utils/auth";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
// import Alert from "../../../components/Atoms/Alert";

const Login = () => {
  const navigateTo = useNavigate();
  const cookies = new Cookies();

  // State untuk menyimpan nilai email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setIsLogin(true); // Jika token tersedia, set status login menjadi true
    }
  }, []);

  const data = {
    email,
    password,
  };

  // Fungsi untuk menangani pengiriman data login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await SignIn(data);
        const setToken = response.data.data.token;
        const setUserName = response.data.data.userName;
        cookies.set("token", setToken);
        cookies.set("userName", setUserName);
        setIsLogin(true); // Set status login ke true
        Swal.fire({
          showConfirmButton: false,
          timer: 1500,
          title: "Login Success",
          icon: "success",
        });
        setTimeout(() => {
          navigateTo("/");
        }, 2000);
      } catch (error) {
        setIsLogin(false); // Set status login ke false
        console.log("Error:", error);
        Swal.fire({
          title: "Email atau passwond salah silahkan coba lagi !",
          icon: "warning",
          confirmButtonColor: "#3085d6",
        });
      }
    } else {
      Swal.fire({
        title: "Email atau password masih kosong !",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      console.log("Kolom input masih kosong");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    cookies.remove("token");
    cookies.remove("userName");
    setIsLogin(false); // Set status login ke false
    Swal.fire({
      showConfirmButton: false,
      timer: 1500,
      title: "Logout Success",
      icon: "success",
    });
  };

  return (
    <div className="justify-center flex w-full h-full ">
      <div className="flex flex-col gap-8 w-full md:w-[70%] md:px-40 py-20 m-4">
        <div className="w-full">
          <form className="w-full">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                autoComplete="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium ml-1 text-gray-600"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="*****"
                autoComplete="current-password"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="flex justify-center items-center mb-4 ">
              {isLogin ? (
                <button
                  onClick={handleLogout}
                  className="text-white text-xl px-8 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2 sm:w-auto py-2.5 text-center bg-[#ea954a]"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-white text-xl px-8 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2 sm:w-auto py-2.5 text-center bg-[#ea954a] "
                >
                  Login
                </button>
              )}
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
