import { ReactNode } from "react";
import classes from "./ButtonPay.module.css"
import { useLocation, useNavigate } from "react-router-dom";

interface IButtonPay {
  path: string;
  children: ReactNode;
}

export const ButtonPay: React.FC<IButtonPay> = ({ path, children }) => {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <button
      type="button"
      className={location.pathname === "/pay/formOfPayment" ? `${classes.btn} ${classes.btnPay}` : classes.btn}
      onClick={() => navigate(path)}
    >
      <span className={classes.btnText}>{children}</span>
    </button>
  )
}