import { ReactNode } from "react";
import classes from "./ButtonPay.module.css"
import { useLocation, useNavigate } from "react-router-dom";

interface IButtonPay {
  path: string;
  handleBtn: (path: string) => void;
  children: ReactNode;
  disabled?: boolean;
}

export const ButtonPay: React.FC<IButtonPay> = ({
  path,
  handleBtn,
  children,
  disabled,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      type="button"
      className={
        location.pathname === "/pay/formOfPayment"
          ? `${classes.btn} ${classes.btnPay}`
          : classes.btn
      }
      onClick={() => handleBtn(path)}
      disabled={disabled}
    >
      <span className={classes.btnText}>{children}</span>
    </button>
  );
};