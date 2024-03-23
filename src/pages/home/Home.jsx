// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
import { useEffect } from "react";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const navigateTo = useNavigate();

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/v1/transactions`
      );
      setData(response.data);
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
    <div className="w-[90%] md:w-[40%]">
      <div className=" mt-4 flex justify-center items-center">
        {/* <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          scrollableYearDropdown // membuat dropdown tahun menjadi scrollable
        /> */}
      </div>

      <Card />
      <div
        className="text-3xl cursor-pointer "
        onClick={() => navigateTo("/addTransaction")}
      >
        <span className=" items-center justify-end md:flex hidden">
          <IoMdAdd />
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
                endpoint="transactions"
                editEnpoint="editTransactions"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
