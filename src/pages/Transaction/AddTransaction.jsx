/* eslint-disable react/prop-types */
import { useState } from "react";
import Toggle from "../../components/Atoms/toggle";
import { PostTransaction } from "../../utils/transaction";
import Alert from "../../components/Atoms/Alert";
import Loading from "../../components/Atoms/Loading";
import { GetAllCategory } from "../../utils/category";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { MdAdd } from "react-icons/md";

const AddTransaction = () => {
  // State untuk mengontrol visibilitas modal
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState("false");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  const currentDate = new Date(); // Mengambil tanggal saat ini
  const formattedDate = currentDate.toISOString().split("T")[0];

  const toggleHandler = () => {
    setIsChecked(!isChecked);
    setStatus(isChecked ? "false" : "true");
  };

  const onSubmitHandler = async (e) => {
    setModalVisible(true);
    e.preventDefault();

    if (amount.trim() !== "" && category.trim() !== "") {
      // Menggunakan trim() untuk menghapus spasi yang tidak diinginkan

      const data = {
        amount,
        category,
        status,
        date: formattedDate,
      };

      setLoading(true);
      try {
        await PostTransaction(data, token);
        setAmount("");
        setCategory("");
        setDate("");

        setTimeout(() => {
          setLoading(false);
          setMessage(true);
          setTimeout(() => {
            setModalVisible(false);
            window.location.reload();
          }, 1000);
        }, 2000);
      } catch (error) {
        setLoading(false);
        setModalVisible(true);
        console.log(error);
        alert("create gagal", error);
      }
    } else {
      // Jika kedua bidang kosong, beri tahu pengguna
      setLoading(false);
      setMessage(false);
    }
  };

  const fetchCategory = async () => {
    const response = await GetAllCategory(token);
    setCategoryData(response.data);
  };

  useEffect(() => {
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Modal toggle */}
      <button
        onClick={() => setModalVisible(!modalVisible)}
        className="flex justify-center items-center rounded-full text-md bg-[#eda363] text-white focus:ring-2 text-center transition duration-300 ease-in-out shadow-lg hover:border-transparent"
        type="button"
        style={{ width: "50px", height: "50px" }} // Added inline style for width and height
      >
        <MdAdd />
        {/* <span className="text-3xl">+</span> */}
      </button>

      {/* Main modal */}
      {modalVisible && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-md mx-auto p-6">
              {/* Modal content */}
              <div className="relative">
                {/* Modal header */}
                <div className="flex items-center justify-between border-b pb-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Tambah transaksi
                  </h3>
                  <button
                    onClick={() => setModalVisible(!modalVisible)}
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    <span className="sr-only">Close modal</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* Modal body */}
                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className=" flex gap-4 items-start w-[50%]">
                      <span className="text-3xl">
                        <Toggle onChange={toggleHandler} checked={isChecked} />
                      </span>
                      {isChecked ? (
                        <span className="text-xl">Incame</span>
                      ) : (
                        <span className="text-xl">Expense</span>
                      )}
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        amount
                      </label>
                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="text"
                        name="text"
                        id="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Amount"
                        required=""
                      />
                    </div>
                    {/* date */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                      >
                        date
                      </label>
                      <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border justify-center items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="date"
                        required=""
                      />
                    </div>

                    {/* category */}
                    <div className="col-span-2 sm:col-span-1">
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
                  </div>
                  <div className=" flex flex-col gap-4 justify-center items-center mt-8 mb-4">
                    {loading ? (
                      <Loading /> //
                    ) : (
                      <button
                        onClick={onSubmitHandler}
                        type="submit"
                        className="text-white inline-flex items-center  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-500 "
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                  {message && <Alert message="Success add Transaction!" />}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTransaction;
