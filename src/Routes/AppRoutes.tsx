import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/UI/Layout/Layout";
import { Main } from "../pages/Main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};