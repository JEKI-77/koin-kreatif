/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Toggle from "./toggle";
import { GetbyIdTransaction, UpdateTransaction } from "../../utils/transaction";
import Alert from "./Alert";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";

const EditModal = () => {
  // State untuk mengontrol visibilitas EditModal
  const [EditModalVisible, setEditModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState("false");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [showMessage, setshowMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const currentDate = new Date(); // Mengambil tanggal saat ini
  const formattedDate = currentDate.toISOString().split("T")[0];

  const toggleHandler = () => {
    setIsChecked(!isChecked);
    setStatus(isChecked ? "false" : "true");
  };

  const { id } = useParams();

  const getById = async () => {
    try {
      const response = await GetbyIdTransaction(id);
      setStatus(response.data.status); // Set isChecked based on status from data
      setAmount(response.data.amount);
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
      //   alert("get by id gagal", error);
    }
  };

  useEffect(() => {
    getById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateHandler = async (e) => {
    EditModalVisible(true);
    e.preventDefault();
    const data = {
      amount,
      category,
      status, // Menggunakan status yang sudah diperbarui
      date: formattedDate,
    };

    if (amount !== "" || category !== "") {
      try {
        await UpdateTransaction(id, data);
        setshowMessage(true);
        setAmount("");
        setCategory("");
        setDate("");
        setshowMessage(true);
        setShowAlert(true);
        setTimeout(() => {
          EditModalVisible(false);
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.log(error);
        alert("create gagal", error);
        // Logika untuk menangani kesalahan
      }
    } else {
      setShowAlert(true);
      showMessage(false);
    }
  };

  return (
    <div>
      {/* EditModal toggle */}
      <button
        onClick={() => setEditModalVisible(!EditModalVisible)}
        className="block text-xl rounded-full  focus:ring-4  font-medium  px-3 py-1 text-center "
        type="button"
      >
        <FaEdit />
      </button>

      {/* Main EditModal */}
      {EditModalVisible && (
        <div
          id="crud-EditModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-md mx-auto p-6">
              {/* EditModal content */}
              <div className="relative">
                {/* EditModal header */}
                <div className="flex items-center justify-between border-b pb-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Edit transaksi
                  </h3>
                  <button
                    onClick={() => setEditModalVisible(!EditModalVisible)}
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    <span className="sr-only">Close EditModal</span>
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
                {/* EditModal body */}
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
                        type="number"
                        name="number"
                        id="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Amount"
                        required=""
                      />
                    </div>
                    {/* date */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        date
                      </label>
                      <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option value="">Select category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                      </select>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-4 justify-center items-center mt-8">
                    <button
                      onClick={updateHandler}
                      type="submit"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Update
                    </button>
                    {showAlert ? (
                      showMessage ? (
                        <Alert message="Success Add Transaction!" />
                      ) : (
                        <Alert message="Input data masih kosong!" />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;