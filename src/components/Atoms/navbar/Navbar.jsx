import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Acount</Link>
        </li>
        <li>
          <Link to="/addtransaction">addtransaction</Link>
        </li>
        <li>
          <Link to="/category">categories</Link>
        </li>
        <li>
          <Link to="/laporan">laporan</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
