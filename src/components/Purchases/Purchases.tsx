import classes from "./Purchases.module.css";
import del from "../../assets/sprite.svg"
import minus from "../../assets/sprite.svg"
import plus from "../../assets/sprite.svg"
import { IGoods } from "../../data/data";
import { ISpecifications } from "../../data/data";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useMemo, useEffect } from "react";
import { useSum } from "../../hooks/useSum";

interface IPurchases {
  purchase: string | null;
  onChangeSum: (sum: number) => void;
  deletePurchases: (key: string, index: number) => void;
  index: number;
}

export const Purchases: React.FC<IPurchases> = ({
  purchase,
  onChangeSum,
  deletePurchases,
  index,
}) => {
  let data = useSessionStorage<IGoods<ISpecifications>>(purchase);

  const { increase, decrease, quantity } = useSum();

  const sum = useMemo(() => {
    return data ? data.price * quantity : 0;
  }, [data, quantity]);

  useEffect(() => {
    onChangeSum(sum);
  }, [sum]);

  if (!data) return null;

  const dataKey = `purchases_${data.img}`;

  return (
    <div className={classes.purchase}>
      <div className={classes.imgWrapper}>
        <img src={data.img} alt="Картинка товара" className={classes.img} />
        <div className={classes.btnWrapper}>
          <button className={classes.btnQuantity} onClick={() => decrease()}>
            <svg className={classes.minus}>
              <use href={minus + "#minus"}></use>
            </svg>
          </button>
          <p className={classes.quantity}>{quantity}</p>
          <button
            type="button"
            className={classes.btnQuantity}
            onClick={() => increase()}
          >
            <svg className={classes.plus}>
              <use href={plus + "#plus"}></use>
            </svg>
          </button>
        </div>
      </div>

      <div className={classes.titleWrapper}>
        <p className={classes.title}>{data.title}</p>
        <p className={classes.price}>{data.price} &#8381;</p>
      </div>

      <div className={classes.priceWrapper}>
        <button
          type="button"
          className={classes.btnDel}
          onClick={() => deletePurchases(dataKey, index)}
        >
          <svg className={classes.del}>
            <use href={del + "#del"}></use>
          </svg>
        </button>
        <p className={classes.totalPrice}>{sum} &#8381;</p>
      </div>
    </div>
  );
};