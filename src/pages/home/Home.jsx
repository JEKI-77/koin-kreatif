// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
import { useEffect } from "react";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useState } from "react";
// import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/v1/transactions`
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
    <div className="w-[90%] md:w-[40%]">
      <div className=" mt-4 flex justify-center items-center">
        {/* <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          scrollableYearDropdown // membuat dropdown tahun menjadi scrollable
        /> */}
      </div>

      <Card />
      <div>
        {Array.isArray(data) &&
          data.map((item) => (
            <div className="my-4" key={item.key}>
              <CardTransaction
                amount={item.amount}
                category={item.category}
                status={item.status}
                
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
