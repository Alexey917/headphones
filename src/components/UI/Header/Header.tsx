import { Logo } from "../Logo/Logo"
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import favorites from "../../../assets/sprite.svg";
import basket from "../../../assets/sprite.svg";



export const Header = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <Logo />
        <ul className={classes['list-links']}>
          <li>
            <Link to="favorites">
            <svg className={classes.favorites}>
                <use href={favorites + '#favorites'}></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="basket">
              <svg className={classes.basket}>
                <use href={basket + '#basket'}></use>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}