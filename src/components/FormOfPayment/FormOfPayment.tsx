import { Form } from "react-router-dom"
import classes from "./FormOfPayment.module.css"
import { ButtonPay } from "../UI/ButtonPay/ButtonPay";
import { useClearSession } from "../../hooks/useClearBasket";
import { useVAlidationName } from "../../hooks/useValidationName";
import { useVAlidationPhone } from "../../hooks/useValidationPhone";
import { useRef } from "react";

export const FormOfPayment = () => {
  const clearSession = useClearSession();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const { validName, validationName } = useVAlidationName(nameRef);
  const { validPhone, validationPhone } = useVAlidationPhone(phoneRef);

  const handleBtn = (): void => {
    clearSession("/success", validationName, validationPhone);
  };

  return (
    <Form method="post" action="/pay" className={classes.form}>
      <fieldset className={classes.fieldset}>
        <label htmlFor="name" className={classes.label}>
          {validName}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={classes.input}
          placeholder="Имя:"
          ref={nameRef}
        />
      </fieldset>

      <fieldset className={classes.fieldset}>
        <label htmlFor="tel" className={classes.label}>
          {validPhone}
        </label>
        <input
          type="tel"
          id="tel"
          name="phone"
          className={classes.input}
          placeholder="Телефон +X (XXX) XXX-XX-XX:"
          ref={phoneRef}
        />
      </fieldset>
      <ButtonPay
        children={<span className={classes.btnText}>Заказать</span>}
        handleBtn={handleBtn}
        path="/success"
      />
    </Form>
  );
};