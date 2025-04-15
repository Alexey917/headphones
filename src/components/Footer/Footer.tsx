import { FooterLinks } from "../UI/FooterLinks/FooterLinks"
import { Logo } from "../UI/Logo/Logo"
import vk from "../../assets/sprite.svg";
import tg from "../../assets/sprite.svg";
import whatsapp from "../../assets/sprite.svg";
import classes from "./Footer.module.css";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <nav className={classes.nav}>
        <Logo />
        <FooterLinks
          ru="Рус"
          eng="Eng"
          kaz={location.pathname === "/basket" ? "Каз" : ""}
        />
        <ul className={classes.socialList}>
          <li>
            <a href="https://vk.com/?ysclid=m9iuh791er334873856">
              <svg className={classes.vk}>
                <use href={vk + "#vk"}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/a/">
              <svg className={classes.tg}>
                <use href={tg + "#tg"}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com/?lang=ru_RU">
              <svg className={classes.whatsapp}>
                <use href={whatsapp + "#whatsapp"}></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};