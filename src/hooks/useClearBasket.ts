import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuantityPurchasesContext } from "../context/QuantityPurchasesContext";
import { useVAlidationName } from "./useValidationName";

export const useClearSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setQuantity } = useContext(QuantityPurchasesContext);

  const clearSession = (
    path: string,
    validateName?: () => boolean,
    validatePhone?: () => boolean
  ) => {
    const isNameValid = validateName ? validateName() : true;
    const isPhoneValid = validatePhone ? validatePhone() : true;

    if (!isNameValid || !isPhoneValid) {
      return false;
    }

    if (location.pathname === "/pay/formOfPayment") {
      Object.keys(sessionStorage).map((key) => sessionStorage.removeItem(key));
      setQuantity(0);
    }

    return navigate(path);
  };

  return clearSession;
};