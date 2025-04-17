import { Form } from "react-router-dom"
import classes from "./FormOfPayment.module.css"
import { ButtonPay } from "../UI/ButtonPay/ButtonPay";

export const FormOfPayment = () => {
  return (
    <Form method="post" action="/pay" className={classes.form}>
      <fieldset className={classes.fieldset}>
        <label htmlFor="name" className={classes.label}>
          Имя:
        </label>
        <input type="text" id="name" name="name" className={classes.input} />
      </fieldset>

      <fieldset className={classes.fieldset}>
        <label htmlFor="tel" className={classes.label}>
          Телефон:
        </label>
        <input type="tel" id="tel" name="phone" className={classes.input} />
      </fieldset>
      <ButtonPay
        children={<span className={classes.btnText}>Заказать</span>}
        path="/success"
      />
    </Form>
  );
};