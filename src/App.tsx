import React from 'react';
import { RouterProvider } from "react-router-dom";
import "./styles/app.css";
import { QuantityPurchasesContext } from "./context/QuantityPurchasesContext";
import { useState } from "react";
import { router } from "./Routes/AppRoutes";

function App() {
  const [quantity, setQuantity] = useState<number>(() => {
    const basket = Object.keys(sessionStorage).filter((key) =>
      key.startsWith("purchases_")
    );
    return basket.length;
  });

  return (
    <div className="App" style={{ backgroundColor: "#EAEAEA" }}>
      <QuantityPurchasesContext.Provider value={{ quantity, setQuantity }}>
        <RouterProvider router={router} />
      </QuantityPurchasesContext.Provider>
    </div>
  );
}

export default App;
