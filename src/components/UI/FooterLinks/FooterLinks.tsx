import { Link } from "react-router-dom";
import classes from "./FooterLinks.module.css";
import lang from "../../../assets/sprite.svg"

export const FooterLinks = () => {
  return (
    <ul className={classes.footerLinks}>
      <li><Link to="favorites" className={classes.footerLink}>Избранное</Link></li>
      <li><Link to="basket" className={classes.footerLink}>Корзина</Link></li>
      <li><Link to="contacts" className={classes.footerLink}>Контакты</Link></li>
      <li><Link to="service" className={classes.footerLink}>Условия сервиса</Link></li>
      <li>
        <ul className={classes.languageSettings}>
          <li>
            <svg className={classes.lang}>
              <use href={lang + '#lang'}></use>
            </svg>
          </li>
        </ul>
      </li>
      
    </ul>
  )
}