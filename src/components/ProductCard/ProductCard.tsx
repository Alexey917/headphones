import { IGoods } from "../../data/data"
import { ISpecifications } from "../../data/data";
import classes from "./ProductCard.module.css";
import star from "../../assets/sprite.svg";
import details from "../../assets/sprite.svg";
import { Button } from "../UI/Button/Button";
import { useState } from "react";
import { ModalDetails } from "../ModalDetails/ModalDetails";
import { useAddBasketIGoods } from "../../hooks/useAddBasket";

interface IProductCard {
  good: IGoods<ISpecifications>;
  showOldPrice: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({ good, showOldPrice }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const addBasket = useAddBasketIGoods(good);

  return (
    <>
      <div className={classes.card}>
        <img
          src={good.img}
          alt="Картинка товара"
          className={
            good.title === "BOROFONE BO4"
              ? classes.borofone
              : classes.imgAirPods
          }
        />
        <div className={classes.info}>
          <div className={classes.titleAndRate}>
            <div className={classes.rateWrapper}>
              <button
                type="button"
                className={classes.btnDetails}
                onClick={() => setIsModal(true)}
              >
                <svg className={classes.details}>
                  <use href={details + "#details"}></use>
                </svg>
              </button>
              <p className={classes.cardTitle}>{good.title}</p>
            </div>

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
                <p
                  className={good.oldPrice ? classes.cardOldPrice : classes.mb}
                >
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
      {isModal && <ModalDetails good={good} setIsModal={setIsModal} />}
    </>
  );
};