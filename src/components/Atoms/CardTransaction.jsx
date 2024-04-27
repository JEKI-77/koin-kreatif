/* eslint-disable react/prop-types */
import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import DeleteModal from "./ModalDelete";
import EditCategory from "../../pages/categories/EditCategory";
import EditTransaction from "../../pages/Transaction/EditTransaction";
// import { useState } from "react";
// import { MdUpload } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CardTransaction = ({
  amount,
  category,
  status,
  id,
  endpoint,
  param,
  date,
}) => {
  return (
    <div className="bg-slate-100 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between rounded-md px-4 mx-1 ">
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
          {param == "category" ? (
            <EditCategory title="Edit Category" id={id} />
          ) : (
            <EditTransaction endpoint={endpoint} id={id} />
          )}
        </span>
        <DeleteModal endpoint={endpoint} id={id} />
      </div>
    </div>
  );
};

export default CardTransaction;
