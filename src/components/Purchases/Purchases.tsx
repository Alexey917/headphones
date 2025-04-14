import classes from "./Purchases.module.css";
import del from "../../assets/sprite.svg"
import minus from "../../assets/sprite.svg"
import plus from "../../assets/sprite.svg"
import { IGoods } from "../../data/data";
import { useSessionStorage } from "../../hooks/useSessionStorage";

interface IPurchases {
  purchase: string | null;
}

export const Purchases: React.FC<IPurchases> = ({ purchase }) => {

  let data = useSessionStorage<IGoods>(purchase);

  if(!data) return null

  return (
    <div className={classes.purchase}>
      <div className={classes.imgWrapper}>
        <img src={data.img} alt="Картинка товара" className={classes.img} />
        <div className={classes.btnWrapper}>
          <button className={classes.btnQuantity}>
            <svg className={classes.minus}>
              <use href={minus + "#minus"}></use>
            </svg>
          </button>
          <p className={classes.quantity}>1</p>
          <button type="button" className={classes.btnQuantity}>
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
        <button type="button" className={classes.btnDel}>
          <svg className={classes.del}>
            <use href={del + "#del"}></use>
          </svg>
        </button>
        <p className={classes.totalPrice}>{data.price} &#8381;</p>
      </div>
    </div>
  )
}