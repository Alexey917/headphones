import classes from "./TotalSum.module.css";
import { useNavigate } from "react-router-dom";

interface ITotalSum {
  total: number;
}

export const TotalSum: React.FC<ITotalSum> = ({ total }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.totalWrapper}>
      <div className={classes.priceWrapper}>
        <p className={classes.text}>Итого</p>
        <p className={classes.text}>&#8381; {total}</p>
      </div>
      <button
        type="button"
        className={classes.btn}
        onClick={() => navigate("/pay/formOfPayment")}
      >
        <span className={classes.btnText}>Перейти к оформлению</span>
      </button>
    </div>
  );
};
