import { IGoods } from "../../data/data"
import classes from "./ProductCard.module.css"
import star from "../../assets/sprite.svg"
import { Button } from "../UI/Button/Button"
import { useState } from "react"
import { useContext } from "react";
import { QuantityPurchasesContext } from "../../context/QuantityPurchasesContext";

interface IProductCard {
  good: IGoods;
  showOldPrice: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({ good, showOldPrice }) => {
  const [purchases, setPurchases] = useState<IGoods[]>([]);
  const { quantity, setQuantity } = useContext(QuantityPurchasesContext);

  const addBasket = (): void => {
    if (sessionStorage.getItem(`purchases_${good.img}`)) {
      alert("Товар уже в корзине!");
      return;
    }

    const buy = [...purchases, good];
    sessionStorage.setItem(`purchases_${good.img}`, JSON.stringify(good));
    setPurchases(buy);
    setQuantity(quantity + 1);
  };

  return (
    <div className={classes.card}>
      <img
        src={good.img}
        alt="Картинка товара"
        className={
          good.title === "BOROFONE BO4" ? classes.borofone : classes.imgAirPods
        }
      />
      <div className={classes.info}>
        <div className={classes.titleAndRate}>
          <p className={classes.cardTitle}>{good.title}</p>
          <div className={classes.rateWrapper}>
            <svg className={classes.star}>
              <use href={star + "#star"}></use>
            </svg>
            <p className={classes.cardRate}>{good.rate}</p>
          </div>
        </div>

        <div className={classes.priceAndBuy}>
          <div
            className={
              showOldPrice ? classes.oldPriceWrapper : classes.priceWrapper
            }
          >
            <p className={classes.cardPrice}>{good.price} &#8381;</p>
            {showOldPrice ? (
              <p className={good.oldPrice ? classes.cardOldPrice : classes.mb}>
                {good.oldPrice}
              </p>
            ) : (
              ""
            )}
          </div>
          <Button onClick={addBasket}>Купить</Button>
        </div>
      </div>
    </div>
  );
};