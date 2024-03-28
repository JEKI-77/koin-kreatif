import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";

const Card = () => {
  return (
    <>
      <div className="bg-[#a9ccd7] h-20 shadow-md  items-center flex justify-around rounded-md px-4 ">
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <span className="text-green-600 text-2xl">
              <IoMdDownload />
            </span>
          </div>
          <div>
            <span>Incame</span>
            <h1>Rp.20.000</h1>
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
            <h1>Rp.20.000</h1>
          </div>
        </div>
      </div>
      <div className="w-full text-end mt-2">
        <h1>Rp.20.000</h1>
      </div>
    </>
  );
};

export default Card;
