import { Logo } from "../UI/Logo/Logo"
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import favorites from "../../assets/sprite.svg";
import basket from "../../assets/sprite.svg";
import { QuantityPurchasesContext } from "../../context/QuantityPurchasesContext";
import { useContext } from "react";

export const Header = () => {
  const { quantity } = useContext(QuantityPurchasesContext);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Logo />
        <ul className={classes.listLinks}>
          <li className={classes.favoritesRelative}>
            <Link to="favorites">
              <svg className={classes.favorites}>
                <use href={favorites + "#favorites"}></use>
              </svg>
            </Link>
            {/* <div className={classes.quantityFavorites}>
              <span></span>
            </div> */}
          </li>
          <li className={classes.basketRelative}>
            <Link to="basket">
              <svg className={classes.basket}>
                <use href={basket + "#basket"}></use>
              </svg>
            </Link>
            {quantity > 0 ? (
              <div className={classes.quantityBasket}>
                <span className={classes.quantity}>{quantity}</span>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};