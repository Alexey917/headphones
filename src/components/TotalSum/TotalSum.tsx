import { ButtonPay } from "../UI/ButtonPay/ButtonPay";
import classes from "./TotalSum.module.css";

interface ITotalSum {
  total: number;
}

export const TotalSum: React.FC<ITotalSum> = ({ total }) => {
  return (
    <div className={classes.totalWrapper}>
      <div className={classes.priceWrapper}>
        <p className={classes.text}>Итого</p>
        <p className={classes.text}>&#8381; {total}</p>
      </div>
      <ButtonPay
        children={<span className={classes.btnText}>Перейти к оформлению</span>}
        path="/pay/formOfPayment"
      />
    </div>
  );
};
