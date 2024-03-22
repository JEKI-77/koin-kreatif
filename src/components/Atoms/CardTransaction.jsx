import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
// import { MdUpload } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CardTransaction = ({ amount }) => {
  return (
    <div className="bg-zinc-300 py-2  flex justify-between rounded-md px-4 ">
      <div className="flex gap-4">
        <div className="flex justify-center items-center">
          <IoMdDownload />
          {/* <MdUpload /> */}
        </div>
        <div>
          <h1>{amount}</h1>
          <span>pendidikan</span>
        </div>
      </div>
      <div className="flex gap-8 justify-center items-center">
        <span className="cursor-pointer">
          <FaEdit />
        </span>
        <span className="cursor-pointer">
          <RiDeleteBin5Fill />
        </span>
      </div>
    </div>
  );
};

export default CardTransaction;
