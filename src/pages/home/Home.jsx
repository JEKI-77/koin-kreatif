// import DatePicker from "react-horizontal-datepicker";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";

const Home = () => {
  return (
    <div className="w-[90%] md:w-[40%] mt-8">
      {/* <DatePicker /> */}
      <div>calander</div>
      <Card />
      <div className="flex flex-col gap-4 mt-10 no-scrollbar overflow-y-auto h-[25em] md:h-[30em] ">
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
