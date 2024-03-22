import { LiaToggleOnSolid } from "react-icons/lia";
const AddTransaction = () => {
  return (
    <div className="w-[50%] h-full bg-slate-200 flex justify-center items-center flex-col">
      <div className="flex ">
        <span className="text-3xl mr-4">
          <LiaToggleOnSolid />
        </span>
        <span className="text-xl">Expense</span>
      </div>
      <div className="">
        <div className="flex flex-col">
          <label htmlFor="amount">amount</label>
          <input type="text" className="border rounded-md  border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">category</label>
          <input type="text" className="border rounded-md  border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">date</label>
          <input type="text" className="border rounded-md  border-black" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="bg-orange-300 rounded-md px-6 py-2">Save</button>
      </div>
    </div>
  );
};

export default AddTransaction;
