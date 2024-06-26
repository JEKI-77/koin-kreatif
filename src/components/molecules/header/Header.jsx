import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import AddTransaction from "../../../pages/Transaction/AddTransaction";
import logo from "../../../assets/koin_kreatif_logo.png";
import { VscGraph } from "react-icons/vsc";
// import { IoIosArrowBack } from "react-icons/io";
// import { useState } from "react";

const Header = () => {
  // const { param = "laporan" } = useParams();
  // const [show, setShow] = useState(false);
  return (
    <nav className="  bg-[#204f75] flex justify-center items-center h-20 ">
      <div className="flex justify-between items-center  w-[80%] jitems-center ">
        {/* icon */}
        <div className="">
          <img src={logo} className="h-20 w-40 object-contain " alt="image" />
        </div>
        {/* desktop navbar */}
        <ul className=" gap-4 md:flex hidden mt-4 navbar_style font-semibold text-[#f5f5f5]">
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/category" activeclassname="active">
              Kategori
            </NavLink>
          </li>
          <li>
            <NavLink to="/laporan" activeclassname="active">
              Laporan
            </NavLink>
          </li>
          <li>
            <NavLink to="/ai" activeclassname="active">
              Ai
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeclassname="active">
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      {/* mobile navbar */}

      <div
        className={`md:hidden bg-[#2c628e] text-gray-200 absolute bottom-0 left-0 right-0 m-2
       shadow-md rounded-xl z-10 `}
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
