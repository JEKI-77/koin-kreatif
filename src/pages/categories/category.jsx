import CardTransaction from "../../components/Atoms/CardTransaction";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Toggle from "../../components/Atoms/toggle";
import ModalCategory from "../../components/Atoms/ModalCategory";
// import axios from "axios";

const Category = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState([]);
  // const navigateTo = useNavigate();

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/v1/category`
      );
      setData(response.data);
      console.log("data", response);
    } catch (error) {
      console.log(error);
      alert("create gagal", error);
      // Logika untuk msenangani kesalahan
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="justify-center items-center w-[90%] md:w-[50%] mt-8">
      <div className="flex justify-between">
        <span className="text-3xl">
          <Toggle onChange={toggleHandler} checked={isChecked} />
        </span>
        <span className="text-3xl cursor-pointer ">
          <ModalCategory />
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