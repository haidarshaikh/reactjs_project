import { Route, Routes } from "react-router-dom";
import AjaxFiori from "./pages/AjaxFiori";
import HomePage from "./pages/HomePage";
import JCB from "./pages/JCB";
import Sanvy from "./pages/Sanvy";
import Login from "./admin/Login";
import ProductList from "./admin/ProductList";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ajaxfiori" element={<AjaxFiori />} />
          <Route path="/jcb" element={<JCB />} />
          <Route path="/sanvy" element={<Sanvy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProductList />} />
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
