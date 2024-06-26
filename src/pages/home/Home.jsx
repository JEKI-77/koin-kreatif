/* eslint-disable react-hooks/exhaustive-deps */
// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
import { useEffect } from "react";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { GetAllTransaction } from "../../utils/transaction";
// import { useParams } from "react-router-dom";
import AddTransaction from "../Transaction/AddTransaction";
import Cookies from "universal-cookie";
import { RiWechatChannelsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import { DrawerPicker } from "../../components/Atoms/DrawerPicker";
// import Alert from "../../components/Atoms/Alert";
// import dayjs from "dayjs";

const Home = () => {
  const navigateTo = useNavigate();
  const [stateName, setStateName] = useState("");
  const [data, setData] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  const fetchdata = async () => {
    try {
      const response = await GetAllTransaction(token);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setStateName(cookies.get("userName"));
    fetchdata();
  }, []);

  return (
    <div className="w-[90%] md:w-[40%]">
      <div className="mt-4">Hi {stateName}</div>

      <div className=" mt-4 flex justify-center items-center"></div>
      <Card />
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
                // date={dayjs(item.date).format("d MMM YYYY")}
                id={item.id}
                endpoint="transactions"
                editEnpoint="editTransactions"
              />
            </div>
          ))}
      </div>

      {/* ai */}
      <div
        onClick={() => navigateTo("/ai")}
        className={
          "absolute bottom-0 flex md:hidden right-0 mb-24 mr-4 m-4 text-3xl  text-red-400 bg-slate-100 shadow-md  p-2  rounded-full"
        }
      >
        <RiWechatChannelsLine />
      </div>

      <div className="text-3xl cursor-pointer absolute  w-[40%]   ">
        <span className=" items-center justify-end md:flex hidden">
          <AddTransaction icon="+" />
        </span>
        {/* <DrawerPicker /> */}
      </div>
    </div>
  );
};

export default Home;
