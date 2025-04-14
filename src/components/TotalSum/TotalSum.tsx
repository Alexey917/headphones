import classes from "./TotalSum.module.css"

export const TotalSum = () => {
  return (
    <div className={classes.totalWrapper}>
      <div className={classes.priceWrapper}>
        <p className={classes.text}>Итого</p>
        <p className={classes.text}>&#8381; 0</p>
      </div>
      <button type="button" className={classes.btn}><span className={classes.btnText}>Перейти к оформлению</span></button>
    </div>
  )
}