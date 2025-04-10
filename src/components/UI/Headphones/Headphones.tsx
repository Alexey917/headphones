import classes from "./Headphones.module.css";
import  { IGoods }  from "../../../data";
import { ProductCard } from "../ProductCard/ProductCard";

interface IHeadphones {
  title : string; 
  goods: IGoods[];
}

export const Headphones:React.FC<IHeadphones> = ({ title, goods }) => {
  return (
    <section>
      <h2 className={classes.title}>{title}</h2>
      {
        goods.map(good => (
          <ProductCard {...good} />
        ))
      }
    </section>
  )
}