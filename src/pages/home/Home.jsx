// import DatePicker from "react-horizontal-datepicker";
// import ReactDatePicker from "react-datepicker";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";
import "react-datepicker/dist/react-datepicker.css";
// import { useState } from "react";

const Home = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  return (
    <div className="w-[90%] md:w-[40%]">
      <div className=" mt-4 flex justify-center items-center">
        {/* <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          scrollableYearDropdown // membuat dropdown tahun menjadi scrollable
        /> */}
      </div>

      <Card />
      <div className="flex flex-col gap-4 mt-8 no-scrollbar overflow-y-auto h-[25em] md:h-[25em] ">
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
        <CardTransaction amount="20000" />
      </div>
    </div>
  );
};

export default Home;
