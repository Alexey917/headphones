import classes from "./TotalSum.module.css"

interface ITotalSum {
  sumArr: number[];
}

export const TotalSum: React.FC<ITotalSum> = ({ sumArr }) => {
  const total = sumArr.reduce((acc, item) => acc + item, 0);

  return (
    <div className={classes.totalWrapper}>
      <div className={classes.priceWrapper}>
        <p className={classes.text}>Итого</p>
        <p className={classes.text}>&#8381; {total}</p>
      </div>
      <button type="button" className={classes.btn}>
        <span className={classes.btnText}>Перейти к оформлению</span>
      </button>
    </div>
  );
};