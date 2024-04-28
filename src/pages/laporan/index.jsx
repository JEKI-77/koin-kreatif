/* eslint-disable react-hooks/exhaustive-deps */
// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
// import Card from "../../components/Atoms/Card";
// import ReactDatePicker from "react-datepicker";
// import { DrawerPicker } from "../../components/Atoms/DrawerPicker";
// import Alert from "../../components/Atoms/Alert";
import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { GetAllTransaction } from "../../utils/transaction";
import Cookies from "universal-cookie";
import { GetAllCategory } from "../../utils/category";
import Table from "../../components/Atoms/Table";

const Laporan = () => {
  // const { params } = useParams();
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  console.log("category selected", category);
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
    <div className="w-[90%] md:w-[40%] shadow-standard mt-10 ">
      <div className="flex gap-8 mt-12 mb-8 justify-evenly items-center   ">
        <div>
          <input
            name="dfdf"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {/* category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 "
        >
          <option value="">Select category</option>
          {categoryData.map((info, index) => (
            <option key={index} value={info.category}>
              {info.category}
            </option>
          ))}
        </select>
      </div>
      <Table data={data} />
    </div>
  );
};

export default Laporan;
