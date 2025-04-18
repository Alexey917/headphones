import { ButtonPay } from "../UI/ButtonPay/ButtonPay";
import classes from "./TotalSum.module.css";
import { useClearSession } from "../../hooks/useClearBasket";

interface ITotalSum {
  total: number;
  sessionKeys: string[];
}

export const TotalSum: React.FC<ITotalSum> = ({ total, sessionKeys }) => {
  const clearSession = useClearSession();

  return (
    <div className={classes.totalWrapper}>
      <div className={classes.priceWrapper}>
        <p className={classes.text}>Итого</p>
        <p className={classes.text}>&#8381; {total}</p>
      </div>
      <ButtonPay
        children={<span className={classes.btnText}>Перейти к оформлению</span>}
        path="/pay/formOfPayment"
        disabled={sessionKeys.length > 0 ? false : true}
        handleBtn={clearSession}
      />
    </div>
  );
};
