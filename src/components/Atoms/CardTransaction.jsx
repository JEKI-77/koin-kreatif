/* eslint-disable react/prop-types */
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
// import { useNavigate } from "react-router-dom";
import { DeleteTransaction } from "../../utils/transaction";
import EditModal from "./EditModal";
// import { useState } from "react";
// import { MdUpload } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CardTransaction = ({
  amount,
  category,
  status,
  date,
  id,
  endpoint,
  // editEnpoint,
}) => {
  // const navigateTo = useNavigate();

  const ConfirmDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui absolute top-40 left-1/2 transform text-center -translate-x-1/2 bg-white p-4 h20 rounded-lg shadow-lg max-w-sm">
            <h1>Confirm to submit</h1>
            <p>Apakah Anda yakin ingin menghapus?</p>
            <div className="button-container flex justify-evenly mt-20">
              <button onClick={onClose}>Tidak</button>
              <button
                onClick={() => {
                  DeleteTransaction(endpoint, id)
                    // eslint-disable-next-line no-unused-vars
                    .then((res) => {
                      alert("delete success");
                      window.location.reload();
                    })
                    .catch((err) => {
                      console.log("Delete Error", err);
                    });
                  onClose();
                }}
              >
                Ya
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <div className="bg-zinc-300 py-2  flex justify-between rounded-md px-4 ">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center ${
            status == false ? "text-red-600" : "text-green-600 "
          } `}
        >
          {status == false ? <MdUpload /> : <IoMdDownload />}
        </div>
        <div>
          <h1>{amount}</h1>
          <div>{category}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className="flex gap-8 justify-center items-center">
        <span
          className="cursor-pointer"
          // onClick={() => navigateTo(`/${editEnpoint}/${id}`)}
        >
          <EditModal />
        </span>
        <span className="cursor-pointer " onClick={ConfirmDelete}>
          <RiDeleteBin5Fill />
        </span>
      </div>
    </div>
  );
};

export default CardTransaction;
