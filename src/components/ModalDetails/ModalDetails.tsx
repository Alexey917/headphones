import classes from "./ModalDetails.module.css";
import { IGoods } from "../../data/data";
import { ISpecifications } from "../../data/data";

interface IDetails {
  good: IGoods<ISpecifications>;
}

export const ModalDetails: React.FC<IDetails> = ({ good }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <img src={good.img} alt="Наушники" />
        <ul className={classes.info}>
          {
            Object.entries(good).map(([key, value]) => {
              if(key === 'img') {
                return null
              } else if(typeof value === 'string' || typeof value ==='number') {
                return <li key={key}>{value}</li>
              } else if(typeof value === 'object' && value !== null ) {
                return (
                  <div key={key}>
                    <li>{value.name}</li>
                    <li>{value.specification}</li>
                </div>
               )
              }           
            })
          }
        </ul>
      </div>
    </div>
    
  )
}