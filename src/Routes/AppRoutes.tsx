import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Main } from "../pages/Main";
import { Basket } from "../pages/Basket";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};