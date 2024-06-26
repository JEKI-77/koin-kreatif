import { useEffect, useState } from "react";
import Toggle from "../../components/Atoms/toggle";
import Alert from "../../components/Atoms/Alert";
import { GetbyIdCategory, UpdateCategory } from "../../utils/category";
import { FaEdit } from "react-icons/fa";
import Loading from "../../components/Atoms/Loading";
import Cookies from "universal-cookie";

// eslint-disable-next-line react/prop-types
const EditCategory = ({ title, id }) => {
  // State untuk mengontrol visibilitas ModalCategory
  const [ModalCategoryVisible, setModalCategoryVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [EditModalVisible, setEditModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");

  // Fungsi untuk menampilkan atau menyembunyikan ModalCategory
  const toggleModalCategory = () => {
    setModalCategoryVisible(!ModalCategoryVisible);
  };

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  const getById = async () => {
    try {
      const response = await GetbyIdCategory(id, token);
      setIsChecked(response.data.status); // Set isChecked based on status from data
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
      //   alert("get by id gagal", error);
    }
  };

  useEffect(() => {
    getById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateHandler = async (e) => {
    setEditModalVisible(true);
    e.preventDefault();
    const data = {
      category,
      status: isChecked ? "true" : "false",
    };
    setLoading(true);
    try {
      await UpdateCategory(id, data, token);

      setTimeout(() => {
        setLoading(false);
        setMessage(true);
        setTimeout(() => {
          setEditModalVisible(false);
          window.location.reload();
        }, 1000);
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("update gagal", error);
      // Logika untuk menangani kesalahan
    }
  };

  return (
    <div>
      {/* ModalCategory toggle */}
      <button
        onClick={toggleModalCategory}
        className="block text-xl rounded-full  focus:ring-4  font-medium  px-3 py-1 text-center "
        type="button"
      >
        <FaEdit />
      </button>

      {/* Main ModalCategory */}
      {ModalCategoryVisible && (
        <div
          id="crud-ModalCategory"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-md mx-auto p-6">
              {/* ModalCategory content */}
              <div className="relative">
                {/* ModalCategory header */}
                <div className="flex items-center justify-between border-b pb-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <button
                    onClick={toggleModalCategory}
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
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
                {/* ModalCategory body */}
                <form className="p-4 md:p-5 flex flex-col justify-center items-center">
                  <div className="grid gap-4  grid-cols-2">
                    <div className="col-span-2">
                      <div className=" flex gap-4 mb-6 items-start w-[50%]">
                        <span className="text-3xl">
                          <Toggle
                            value={isChecked}
                            onChange={toggleHandler}
                            checked={isChecked}
                          />
                        </span>
                        {isChecked ? (
                          <span className="text-xl">Incame</span>
                        ) : (
                          <span className="text-xl">Expense</span>
                        )}
                      </div>

                      <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        name="category"
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="category"
                        required=""
                      />
                    </div>
                  </div>

                  {loading ? (
                    <Loading />
                  ) : (
                    <button
                      onClick={updateHandler}
                      type="submit"
                      className="text-white inline-flex items-center mt-8 mb-4
                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg justify-center w-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                  )}
                  {message && <Alert message="Success Update  !" />}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCategory;
