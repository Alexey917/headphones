import classes from "./Section.module.css";
import  { IGoods }  from "../../data/data";
import { ProductCard } from "../ProductCard/ProductCard";
import { ElementType, useState } from "react";
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
  const [sumArr, setSumArr] = useState<number[]>([]);

  const arraySum = (index: number) => (newSum: number) => {
    setSumArr((prev) => {
      const newArr = [...prev];
      newArr[index] = newSum;
      return newArr;
    });
  };

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

        <div className={classes.purchasesWrapper}>
          {purchases &&
            Object.keys(sessionStorage).map((storageKey, index) => (
              <Purchases
                key={storageKey}
                purchase={storageKey}
                onChangeSum={arraySum(index)}
              />
            ))}
        </div>

        {component && <TotalSum sumArr={sumArr} />}
      </div>
    </section>
  );
};