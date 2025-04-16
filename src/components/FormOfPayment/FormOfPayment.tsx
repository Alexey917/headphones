import { Form } from "react-router-dom"
import classes from "./FormOfPayment.module.css"

export const FormOfPayment = () => {
  return (
    <Form method="post" action="/pay" className={classes.form}>
      <fieldset>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" />
      </fieldset>

      <fieldset>
        <label htmlFor="tel">Телефон:</label>
        <input type="tel" id="tel" name="phone"/>
      </fieldset>
      <button type="submit">Заказать</button>
    </Form>
  )
}