import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigateTo = useNavigate();

  // State untuk menyimpan nilai email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi untuk menangani pengiriman data login
  const handleLogin = () => {
    // Lakukan validasi login atau pengiriman data ke server di sini
    // Setelah login berhasil, Anda dapat menavigasi ke halaman beranda atau halaman lain yang sesuai
    console.log("Email:", email);
    console.log("Password:", password);
    // Contoh: Jika login berhasil, navigasikan ke halaman beranda
    // navigateTo("/");
  };

  return (
    <div className="flex flex-col gap-8 bg-slate-300 w-full justify-center items-center h-full px-20  ">
      <div className="text-center">Logo</div>
      <div
        className="w-[50%]
       "
      >
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
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
              className="block mb-2 text-sm font-medium "
            >
              Password
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
          <div className="flex items-start mb-5">
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div className=" flex justify-center items-center">
            <button
              onClick={handleLogin}
              type="submit"
              className="text-white px-12  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div>
        Belum punya akun?{" "}
        <span
          className="cursor-pointer"
          onClick={() => navigateTo("/register")}
        >
          Daftar
        </span>
      </div>
    </div>
  );
};

export default Login;
