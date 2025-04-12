import classes from "./Section.module.css";
import  { IGoods }  from "../../data/data";
import { ProductCard } from "../ProductCard/ProductCard";
import { ElementType } from "react";

interface IMainSection {
  title?: string; 
  goods?: never;
  purchases?: any[];
  component?: ElementType;
}

interface IBasketSection {
  title?: string; 
  goods?: IGoods[];
  purchases?: never;
  component?: never;
}

type ISection = IMainSection | IBasketSection

export const Section:React.FC<ISection> = ({ title, goods }) => {
  return (
    <section className={classes.section}>
      { title && <h2 className={classes.title}>{title}</h2> }
      <div className={classes.wrapper}>
        {
          goods && goods.map(good => (
            <ProductCard  key={good.img} good={good} showOldPrice={title ? true : false}/>
          ))
        }
      </div>
    </section>
  )
}