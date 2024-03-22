import { LiaToggleOnSolid } from "react-icons/lia";
const AddTransaction = () => {
  return (
    <div className=" w-[90%] md:w[50%] h-full bg-slate-200 flex justify-center items-center flex-col">
      <div className=" flex gap-4 items-start w-[50%]">
        <span className="text-3xl">
          <LiaToggleOnSolid />
        </span>
        <span className="text-xl">Expense</span>
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="border rounded-md  border-black py-3 px-16"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">category</label>
          <input
            type="text"
            className="border rounded-md  border-black  py-3 px-16"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">date</label>
          <input
            type="text"
            className="border rounded-md  border-black  py-3 px-16"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="bg-orange-300 rounded-md px-20 py-2">Save</button>
      </div>
    </div>
  );
};

export default AddTransaction;
