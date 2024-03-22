// import DatePicker from "react-horizontal-datepicker";
import Card from "../../components/Atoms/Card";
import CardTransaction from "../../components/Atoms/CardTransaction";

const Home = () => {
  return (
    <div>
      {/* <DatePicker /> */}
      <div>calander</div>
      <Card />
      <div className="flex flex-col gap-4 mt-10">
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
