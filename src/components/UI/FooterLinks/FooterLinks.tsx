import { Link } from "react-router-dom";
import classes from "./FooterLinks.module.css";
import lang from "../../../assets/sprite.svg";
import { useState } from "react";

interface ILang {
  ru: string;
  eng: string;
  kaz?: string;
}

export const FooterLinks: React.FC<ILang> = ({ ru, eng, kaz }) => {
  const [value, setValue] = useState<string>(ru);

  const active = (lang: string) => {
    setValue(lang);
  };

  return (
    <ul className={classes.footerLinks}>
      <li>
        <Link to="favorites" className={classes.footerLink}>
          Избранное
        </Link>
      </li>
      <li>
        <Link to="basket" className={classes.footerLink}>
          Корзина
        </Link>
      </li>
      <li>
        <Link to="contacts" className={classes.footerLink}>
          Контакты
        </Link>
      </li>
      <li>
        <Link to="service" className={classes.footerLink}>
          Условия сервиса
        </Link>
      </li>
      <li>
        <ul className={classes.languageSettings}>
          <li>
            <svg className={classes.lang}>
              <use href={lang + "#lang"}></use>
            </svg>
          </li>
          <li>
            <button
              type="button"
              className={`${classes.btnLang} ${
                value === ru ? classes.active : ""
              }`}
              onClick={() => active(ru)}
            >
              {ru}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${classes.btnLang} ${
                value === eng ? classes.active : ""
              }`}
              onClick={() => active(eng)}
            >
              {eng}
            </button>
          </li>
          {kaz ? (
            <li>
              <button
                type="button"
                className={`${classes.btnLang} ${
                  value === kaz ? classes.active : ""
                }`}
                onClick={() => active(kaz)}
              >
                {kaz}
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </li>
    </ul>
  );
};