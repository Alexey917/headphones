import classes from "./ModalDetails.module.css";
import { IGoods } from "../../data/data";
import { ISpecifications } from "../../data/data";
import close from "../../assets/sprite.svg";

interface IDetails {
  good: IGoods<ISpecifications>;
  isModal: boolean;
  setIsModal: (bool: boolean) => void;
}

export const ModalDetails: React.FC<IDetails> = ({
  good,
  isModal,
  setIsModal,
}) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <button className={classes.btnClose} onClick={() => setIsModal(false)}>
          <svg className={classes.close}>
            <use href={close + "#close"}></use>
          </svg>
        </button>
        <img src={good.img} alt="Наушники" className={classes.img} />
        <ul className={classes.info}>
          {Object.entries(good).map(([key, value]) => {
            if (typeof value === "string" || typeof value === "number") {
              return null;
            } else if (typeof value === "object" && value !== null) {
              return (
                <li key={key}>
                  <ul className={`${classes.info} ${classes.specifications}`}>
                    <li className={classes.infoItem}>
                      <span className={classes.text}>{value.name}:</span>
                    </li>
                    <li className={classes.infoItem}>
                      <span className={classes.text}>
                        {value.specification}
                      </span>
                    </li>
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};