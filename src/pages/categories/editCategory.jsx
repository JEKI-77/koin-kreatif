import { useState, useEffect } from "react";
import Toggle from "../../components/Atoms/toggle";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const [data, setData] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();

  console.log(data);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  const getById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/v1/category/${id}`
      );
      setData(response.data);
      setIsChecked(response.data.status); // Set isChecked based on status from data
      setAmount(response.data.amount);
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
      alert("get by id gagal", error);
    }
  };

  useEffect(() => {
    getById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Trigger useEffect when id changes

  const updateCategory = async () => {
    const dataUpdate = {
      amount,
      category,
      status: isChecked,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_APP_URL}/v1/category/${id}`,
        dataUpdate
      );
      alert("update success");
    } catch (error) {
      console.log(error);
      alert("update gagal", error);
    }
  };

  return (
    <div className=" w-[90%] md:w[50%] h-full bg-slate-200 flex justify-center items-center flex-col">
      <h1>Edit Cetegory</h1>
      <div className=" flex gap-4 items-start w-[50%]">
        <span className="text-3xl">
          <Toggle onChange={toggleHandler} checked={isChecked} />
        </span>
        {isChecked ? (
          <span className="text-xl">Income</span>
        ) : (
          <span className="text-xl">Expense</span>
        )}
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col"></div>
        <div className="flex flex-col">
          <label htmlFor="category">category</label>
          <input
            type="text"
            className="border rounded-md  border-black  py-3 px-16"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="bg-orange-300 rounded-md px-20 py-2"
          onClick={updateCategory}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditCategory;
