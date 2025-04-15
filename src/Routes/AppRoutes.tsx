import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Main } from "../pages/Main";
import { Basket } from "../pages/Basket";
import { useState } from "react";
import { QuantityPurchasesContext } from "../context/QuantityPurchasesContext";
import { Favorites } from "../pages/Favorites";
import { Contacts } from "../pages/Contacts";
import { Service } from "../pages/Service";
import { IGoods } from "../data/data";
import { PageNotFound } from "../pages/PageNotFound";

export const AppRoutes = () => {
  const [quantity, setQuantity] = useState<number>(() => {
    const basket = Object.keys(sessionStorage).filter((key) =>
      key.startsWith("purchases_")
    );
    return basket.length;
  });

  const [total, setTotal] = useState<IGoods[]>([]);

  return (
    <QuantityPurchasesContext.Provider
      value={{ quantity, setQuantity, total, setTotal }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="basket" element={<Basket />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="service" element={<Service />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </QuantityPurchasesContext.Provider>
  );
};

