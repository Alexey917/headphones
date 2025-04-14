import classes from "./Section.module.css";
import  { IGoods }  from "../../data/data";
import { ProductCard } from "../ProductCard/ProductCard";
import { ElementType } from "react";
import { Purchases } from "../Purchases/Purchases";
import { TotalSum } from "../TotalSum/TotalSum";

interface IMainSection {
  title?: string;
  goods?: IGoods[];
  purchases?: never;
  component?: never;
}

interface IBasketSection {
  title?: string;
  goods?: never;
  purchases?: ElementType;
  component?: ElementType;
}

type ISection = IMainSection | IBasketSection;

export const Section: React.FC<ISection> = ({
  title,
  goods,
  purchases,
  component,
}) => {
  return (
    <section className={classes.section}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <div className={classes.wrapper}>
        {goods &&
          goods.map((good) => (
            <ProductCard
              key={good.img}
              good={good}
              showOldPrice={title ? true : false}
            />
          ))}

        {purchases &&
          Object.keys(sessionStorage).map((storageKey) => (
            <Purchases key={storageKey} purchase={storageKey} />
          ))}

        {component && <TotalSum />}
      </div>
    </section>
  );
};