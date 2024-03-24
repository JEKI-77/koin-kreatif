import { useState } from "react";

const ModalCategory = () => {
  // State untuk mengontrol visibilitas ModalCategory
  const [ModalCategoryVisible, setModalCategoryVisible] = useState(false);

  // Fungsi untuk menampilkan atau menyembunyikan ModalCategory
  const toggleModalCategory = () => {
    setModalCategoryVisible(!ModalCategoryVisible);
  };

  return (
    <div>
      {/* ModalCategory toggle */}
      <button
        onClick={toggleModalCategory}
        className="block text-3xl rounded-full  bg-orange-600 focus:ring-4  font-medium  px-3 py-1 text-center "
        type="button"
      >
        +
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
                    Tambah Category
                  </h3>
                  <button
                    onClick={toggleModalCategory}
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  >
                    <span className="sr-only">Close ModalCategory</span>
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
                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        amount
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="category"
                        required=""
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center mt-12
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
                    Tambah
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCategory;
