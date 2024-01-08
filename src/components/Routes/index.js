import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}

export default AppRoutes;
