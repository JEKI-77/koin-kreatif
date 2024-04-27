/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { DeleteTransaction } from "../../utils/transaction";
import Cookies from "universal-cookie";

function DeleteModal({ endpoint, id }) {
  const [openModal, setOpenModal] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("token");

  return (
    <>
      <button
        className="cursor-pointer text-red-700 text-xl "
        onClick={() => setOpenModal(true)}
      >
        <RiDeleteBin5Fill />
      </button>
      {openModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-40"></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-md mx-auto p-6">
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Apakah anda yakin ingin menghapus?
                </h3>
                <div className="flex justify-center gap-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => {
                      DeleteTransaction(endpoint, id, token)
                        // eslint-disable-next-line no-unused-vars
                        .then((res) => {
                          setOpenModal(false);
                          window.location.reload();
                        })
                        .catch((err) => {
                          console.log("Delete Error", err);
                        });
                    }}
                  >
                    iya
                  </button>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    Tidak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteModal;
