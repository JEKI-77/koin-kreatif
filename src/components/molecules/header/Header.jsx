import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import AddTransaction from "../../../pages/Transaction/AddTransaction";
import logo from "../../../assets/koin_kreatif_logo.png";
import { VscGraph } from "react-icons/vsc";

const Header = () => {
  return (
    <nav className="  bg-[#5CE1E6] flex justify-center items-center h-20 ">
      <div className="flex justify-between items-center  w-[80%] jitems-center ">
        {/* icon */}
        <div className="">
          <img src={logo} className="h-20 w-full object-cover " alt="image" />
        </div>
        {/* desktop navbar */}
        <ul className=" gap-4 md:flex hidden mt-4 navbar_style font-semibold text-gray-700">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/category" activeClassName="active">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/laporan" activeClassName="active">
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      {/* mobile navbar */}
      <div
        className="md:hidden bg-[#5CE1E6] absolute bottom-0 left-0 right-0 m-2
       shadow-md rounded-xl "
      >
        <ul className="flex justify-around items-center h-20  ">
          <li className="text-3xl">
            <NavLink to="/">
              <FaHome />
            </NavLink>
          </li>
          <li className="text-3xl">
            <NavLink to="/category">
              <BiCategory />
            </NavLink>
          </li>

          <li className="text-5xl absolute mb-20  ">
            <span className="text-center ">
              <AddTransaction />
            </span>
          </li>
          <li className="text-3xl ml-12">
            <NavLink to="/laporan">
              <VscGraph />
            </NavLink>
          </li>

          <li className="text-3xl">
            <NavLink to="/login">
              <IoPersonCircleOutline />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
