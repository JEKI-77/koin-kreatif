import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between   w-[80%]">
      {/* icon */}
      <div>
        <h1>Logo</h1>
      </div>
      {/*  navbar */}
      <ul className="flex gap-4 justify-end">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/addtransaction">Transaction</Link>
        </li>
        <li>
          <Link to="/category">categories</Link>
        </li>
        <li>
          <Link to="/laporan">laporan</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
