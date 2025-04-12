import { FooterLinks } from "../UI/FooterLinks/FooterLinks"
import { Logo } from "../UI/Logo/Logo"
import vk from "../../assets/sprite.svg";
import tg from "../../assets/sprite.svg";
import whatsapp from "../../assets/sprite.svg";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <nav className={classes.nav}>
        <Logo />
        <FooterLinks />
        <ul className={classes.socialList}>
          <li>
            <svg className={classes.vk}>
              <use href={vk + '#vk'}></use>
            </svg>
          </li>
          <li>
            <svg className={classes.tg}>
              <use href={tg + '#tg'}></use>
            </svg>
          </li>
          <li>
            <svg className={classes.whatsapp}>
              <use href={whatsapp + '#whatsapp'}></use>
            </svg>
          </li>
        </ul>
      </nav>
    </footer>
  )
}