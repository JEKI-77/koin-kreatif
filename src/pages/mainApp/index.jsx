import Header from "../../components/molecules/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/molecules/footer/Footer";

const MainApp = () => {
  return (
    <div className="flex flex-col h-screen md:w-[70%] m-auto border border-1 ">
      <Header />
      <div className="flex-1 flex justify-center items-start">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainApp;
