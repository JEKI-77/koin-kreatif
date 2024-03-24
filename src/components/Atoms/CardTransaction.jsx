/* eslint-disable react/prop-types */
import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import EditModal from "./EditModal";
import DeleteModal from "./ModalDelete";
// import { useState } from "react";
// import { MdUpload } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CardTransaction = ({ amount, category, status, date, id, endpoint }) => {
  return (
    <div className="bg-zinc-300 py-2  flex justify-between rounded-md px-4 ">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center text-xl ${
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
      <div className="flex gap-4  justify-center items-center">
        <span className="cursor-pointer text-blue-800">
          <EditModal id={id} />
        </span>
        <DeleteModal endpoint={endpoint} id={id} />
      </div>
    </div>
  );
};

export default CardTransaction;
