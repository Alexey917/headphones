import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/UI/Layout/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      
      </Route>
    </Routes>
  )
}