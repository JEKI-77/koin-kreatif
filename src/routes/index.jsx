import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "../pages/categories";
import AddTransaction from "../pages/addTransaction";
import Account from "../pages/account/index.";
import Laporan from "../pages/laporan";
import Home from "../pages/home/Home";
import MainApp from "../pages/mainApp";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addtransaction" element={<AddTransaction />} />
          <Route path="/account" element={<Account />} />
          <Route path="/laporan" element={<Laporan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
