// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
import { useEffect } from "react";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Modal from "../../components/Atoms/modal";
import { GetAllTransaction } from "../../utils/transaction";
import { useParams } from "react-router-dom";
// import Alert from "../../components/Atoms/Alert";
// import { useState } from "react";

const Home = () => {
  const { params } = useParams();
  console.log("paramse", params);
  const [data, setData] = useState([]);
  // const [showAlert, setShowAlert] = useState(false);

  const fetchdata = async () => {
    try {
      const response = await GetAllTransaction();
      setData(response.data);
      // console.log("data", response);
    } catch (error) {
      console.log(error);
      alert("create gagal", error);
      // Logika untuk msenangani kesalahan
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const formatDate = (date) => new Date(date).toISOString().slice(0, 10);

  return (
    <div className="w-[90%] md:w-[40%]">
      {/* {showAlert ? <Alert message="delete success" /> : ""} */}

      <div className=" mt-4 flex justify-center items-center">
        {/* <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          scrollableYearDropdown // membuat dropdown tahun menjadi scrollable
        /> */}
      </div>
      <Card />
      <div className="text-3xl cursor-pointer ">
        <span className=" items-center justify-end md:flex hidden">
          <Modal icon="+" />
        </span>
      </div>

      <div
        className="
      no-scrollbar overflow-y-auto h-[30em] md:h-[30em]"
      >
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div className="md:my-4 mt-4 " key={index}>
              <CardTransaction
                amount={item.amount}
                category={item.category}
                status={item.status}
                date={formatDate(item.date)}
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
