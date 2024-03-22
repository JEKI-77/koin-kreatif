import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" w-[80%] h-16">
      <div className="flex justify-between items-center ">
        {/* icon */}
        <div className="">
          <h1 className="text-3xl">Logo</h1>
        </div>
        {/* desktop navbar */}
        <ul className=" gap-4 md:flex hidden mt-4">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/addtransaction">Transaction</Link>
          </li>
          <li>
            <Link to="/category">categories</Link>
          </li>
          {/* <li>
          <Link to="/laporan">laporan</Link>
        </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      {/* mobile navbar */}
      <div className="md:hidden bg-green-500 absolute bottom-0 left-0 right-0 ">
        <ul className="flex justify-around items-center h-20  ">
          <li className="text-2xl">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="/category">
              <BiCategory />
            </Link>
          </li>

          <li className="text-5xl absolute mb-20  ">
            <Link to="/addtransaction">
              <span className="text-center ">
                <IoAddCircle />
              </span>
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="/laporan">
              <AiOutlineTransaction />
            </Link>
          </li>

          <li className="text-2xl">
            <Link to="/login">
              <IoPersonCircleOutline />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
