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
    navigateTo("/home");
  };

  return (
    <div className="flex flex-col gap-8 bg-slate-300 w-[50%] justify-center items-center h-full px-20 ">
      <div className="text-center">Logo</div>
      {/* Input email */}
      <input
        className="border border-black px-4 rounded-sm"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Input password */}
      <input
        className="border border-black px-4 rounded-sm"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Tombol login */}
      <button
        className="bg-orange-500 rounded-md text-white px-6"
        onClick={handleLogin}
      >
        Login
      </button>
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
