import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTransaction from "../pages/Transaction/Transaction";
import Laporan from "../pages/laporan";
import Home from "../pages/home/Home";
import MainApp from "../pages/mainApp";
import Register from "../pages/account/Register/Register";
import Login from "../pages/account/Login/Login";
import EditTransaction from "../pages/Transaction/EditTransaction";
import Category from "../pages/categories/category";
import EditCategory from "../pages/categories/EditCategory";
import ChatApp from "../pages/ai/chatApp";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/addtransaction" element={<AddTransaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/laporan/:param?" element={<Laporan />} />
          <Route path="/ai" element={<ChatApp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editTransactions/:id" element={<EditTransaction />} />
          <Route path="/editCategory/:id" element={<EditCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
