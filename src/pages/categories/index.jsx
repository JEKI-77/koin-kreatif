import { IoMdAdd } from "react-icons/io";
import { LiaToggleOnSolid } from "react-icons/lia";
import CardTransaction from "../../components/Atoms/CardTransaction";

const Category = () => {
  return (
    <div className="justify-center items-center w-[90%] md:w-[50%] mt-8">
      <div className="flex justify-between">
        <span className="text-3xl">
          <LiaToggleOnSolid />
        </span>
        <span className="text-3xl">
          <IoMdAdd />
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-10 no-scrollbar overflow-y-auto h-[25em] md:h-[30em]">
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
      </div>
    </div>
  );
};

export default Category;
