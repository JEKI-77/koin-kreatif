import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigateTo = useNavigate();
  return (
    <div>
      <div>Logo</div>
      <div>input email</div>
      <div>input password</div>
      <div>Login button</div>
      <div>
        belum punya akun ?{" "}
        <span
          className="cursor-pointer "
          onClick={() => navigateTo("/register")}
        >
          daftar
        </span>
      </div>
    </div>
  );
};

export default Account;
