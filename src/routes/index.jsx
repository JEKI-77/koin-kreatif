import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "../pages/categories";
import AddTransaction from "../pages/Transaction";
import Laporan from "../pages/laporan";
import Home from "../pages/home/Home";
import MainApp from "../pages/mainApp";
import Register from "../pages/account/Register/Register";
import Login from "../pages/account/Login/Login";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addtransaction" element={<AddTransaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
