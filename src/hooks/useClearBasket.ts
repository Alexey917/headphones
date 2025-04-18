import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuantityPurchasesContext } from "../context/QuantityPurchasesContext";


export const useClearSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setQuantity } = useContext(QuantityPurchasesContext);
  const clearSession = (path: string) => {
    if (location.pathname === "/pay/formOfPayment") {
      Object.keys(sessionStorage).map((key) => sessionStorage.removeItem(key));
      setQuantity(0)
    }

    return navigate(path);
  };

  return clearSession;
}