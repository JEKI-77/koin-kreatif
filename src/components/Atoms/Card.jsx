/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { GetAllTransaction } from "../../utils/transaction";
import Cookies from "universal-cookie";
// import dayjs from "dayjs";

const Card = () => {
  const [data, setData] = useState("");
  const cookies = new Cookies();
  const token = cookies.get("token");

  const fetchdata = async () => {
    try {
      const response = await GetAllTransaction(token);
      setData(response.data.data);
    } catch (error) {
      console.log(error);

      // Logika untuk msenangani kesalahan
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // Fungsi untuk menjumlahkan nilai amount berdasarkan status true
  function sumIncame() {
    if (Array.isArray(data)) {
      return data.reduce((total, transaction) => {
        if (transaction.amount && transaction.status === true) {
          return total + parseFloat(transaction.amount.replace(/\./g, ""));
        } else {
          return total;
        }
      }, 0);
    } else {
      return 0;
    }
  }

  // Fungsi untuk menjumlahkan nilai amount berdasarkan status false
  function sumExpense() {
    if (Array.isArray(data)) {
      return data.reduce((total, transaction) => {
        if (transaction.amount && transaction.status === false) {
          total += parseFloat(transaction.amount.replace(/\./g, ""));
        }
        return total;
      }, 0);
    } else {
      return 0;
    }
  }

  function sum() {
    let Incame = sumIncame();
    let Expense = sumExpense();
    let total = Incame - Expense;
    return total;
  }

  return (
    <>
      <div className="bg-[#e29755]  h-20 shadow-md  items-center flex justify-around rounded-md px-4 ">
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <span className="text-green-600 text-2xl">
              <IoMdDownload />
            </span>
          </div>
          <div>
            <span>Incame</span>
            <h1>Rp {sumIncame().toLocaleString("id-ID")}</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <span className="text-red-600 text-2xl">
              <MdUpload />
            </span>
          </div>
          <div>
            <span>Expense</span>
            <h1>Rp {sumExpense().toLocaleString("id-ID")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full text-end mt-2">
        <h1>Rp {sum().toLocaleString("id-ID")}</h1>
      </div>
    </>
  );
};

export default Card;
