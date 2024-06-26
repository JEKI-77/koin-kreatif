/* eslint-disable react-hooks/exhaustive-deps */
import CardTransaction from "../../components/Atoms/CardTransaction";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import Toggle from "../../components/Atoms/toggle";
import ModalCategory from "./AddCategory";
import { useParams } from "react-router-dom";
import { GetAllCategory } from "../../utils/category";
import Cookies from "universal-cookie";
// import axios from "axios";

const Category = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  const fetchdata = async () => {
    try {
      const response = await GetAllCategory(token);
      setData(response.data);
    } catch (error) {
      console.log(error);

      // Logika untuk msenangani kesalahan
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="justify-center items-center w-[90%] md:w-[50%] mt-8 ">
      <div className="flex justify-between">
        {/* <span className="text-3xl">
          <Toggle onChange={toggleHandler} checked={isChecked} />
        </span> */}
        <span className="text-3xl cursor-pointer ">
          <ModalCategory title="Tambah Category" icon="+" />
        </span>
      </div>
      <div
        className="
      no-scrollbar overflow-y-auto h-[30em] md:h-[45em]"
      >
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div className="md:my-4 mt-4 " key={index}>
              <CardTransaction
                amount={item.amount}
                category={item.category}
                status={item.status}
                id={item.id}
                param={category}
                endpoint="category"
                editEnpoint="editcategory"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
