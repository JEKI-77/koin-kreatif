/* eslint-disable react-hooks/exhaustive-deps */
// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
import { useEffect } from "react";
// import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { GetAllTransaction } from "../../utils/transaction";
// import { useParams } from "react-router-dom";
import AddTransaction from "../Transaction/AddTransaction";
import Cookies from "universal-cookie";
import dayjs from "dayjs";
import { GetAllCategory } from "../../utils/category";
// import Card from "../../components/Atoms/Card";
// import ReactDatePicker from "react-datepicker";
// import { DrawerPicker } from "../../components/Atoms/DrawerPicker";
// import Alert from "../../components/Atoms/Alert";

const Laporan = () => {
  // const { params } = useParams();
  const [stateName, setStateName] = useState("");
  const [data, setData] = useState([]);
  console.log("data laporan", data);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  console.log(category);
  const [categoryData, setCategoryData] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  // console.log("startdate", dayjs(startDate).format("D MMM YYYY"));

  const fetchdata = async () => {
    try {
      const response = await GetAllTransaction(
        token,
        startDate,
        endDate,
        category
      );
      setData(response.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setStateName(cookies.get("userName"));
    fetchdata();
  }, [startDate, endDate, category]);

  const fetchCategory = async () => {
    const response = await GetAllCategory(token);
    setCategoryData(response.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="w-[90%] md:w-[40%]">
      <div className="mt-4">Hi {stateName}</div>
      {/* 
      <div className=" mt-4 flex justify-center items-center">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          scrollableYearDropdown // membuat dropdown tahun menjadi scrollable
        />
      </div> */}

      <div className="flex gap-8 mt-8 justify-center ">
        <div>
          <div>start</div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <div>end</div>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      {/* category */}
      <div className="col-span-2 sm:col-span-1 my-8">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          className="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option value="">Select category</option>
          {categoryData.map((info, index) => (
            <option key={index} value={info.category}>
              {info.category}
            </option>
          ))}
        </select>
      </div>
      {/* <Card /> */}

      <div
        className="
      no-scrollbar overflow-y-auto h-[25em] md:h-[30em]"
      >
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div className="md:my-4 mt-4 " key={index}>
              <CardTransaction
                amount={item.amount}
                category={item.category}
                status={item.status}
                date={dayjs(item.date).format("D MMM YYYY")}
                id={item.id}
                endpoint="transactions"
                editEnpoint="editTransactions"
              />
            </div>
          ))}
      </div>
      <div className="text-3xl cursor-pointer absolute  w-[40%]   ">
        <span className=" items-center justify-end md:flex hidden">
          <AddTransaction icon="+" />
        </span>
      </div>
    </div>
  );
};

export default Laporan;
