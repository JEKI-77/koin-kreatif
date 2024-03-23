import { useState } from "react";
import Toggle from "../../components/Atoms/toggle";
import axios from "axios";
const AddTransaction = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  // const [date, setDate] = useState("");

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  console.log(isChecked);
  const data = {
    amount,
    category,
    status: isChecked,
  };

  const onSubmitHandler = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_URL}/v1/transactions`, data);
      alert("create success");
    } catch (error) {
      console.log(error);
      alert("create gagal", error);
      // Logika untuk menangani kesalahan
    }
  };

  return (
    <div className=" w-[90%] md:w[50%] h-full bg-slate-200 flex justify-center items-center flex-col">
      <h1>add transactions</h1>
      <div className=" flex gap-4 items-start w-[50%]">
        <span className="text-3xl">
          <Toggle onChange={toggleHandler} checked={isChecked} />
        </span>
        {isChecked ? (
          <span className="text-xl">Incame</span>
        ) : (
          <span className="text-xl">Expense</span>
        )}
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="border rounded-md  border-black py-3 px-16"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">category</label>
          <input
            type="text"
            className="border rounded-md  border-black  py-3 px-16"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="date">date</label>
          <input
            type="text"
            className="border rounded-md  border-black  py-3 px-16"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div> */}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="bg-orange-300 rounded-md px-20 py-2"
          onClick={onSubmitHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
