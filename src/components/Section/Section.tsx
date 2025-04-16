import classes from "./Section.module.css";
import  { IGoods }  from "../../data/data";
import { ProductCard } from "../ProductCard/ProductCard";
import { ElementType, useState, useEffect } from "react";
import { Purchases } from "../Purchases/Purchases";
import { TotalSum } from "../TotalSum/TotalSum";
import { useContext } from "react";
import { QuantityPurchasesContext } from "../../context/QuantityPurchasesContext";

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
  const { quantity, setQuantity } = useContext(QuantityPurchasesContext);
  const [sumArr, setSumArr] = useState<number[]>([]);
  const [sessionKeys, setSessionKeys] = useState<string[]>(
    Object.keys(sessionStorage)
  );
  const [total, setTotal] = useState<number>(0);

  const arraySum = (index: number) => (newSum: number) => {
    setSumArr((prev) => {
      const newArr = [...prev];
      newArr[index] = newSum;
      return newArr;
    });
  };

  useEffect(() => {
    setTotal(sumArr.reduce((acc, item) => acc + (item || 0), 0));
  }, [sumArr]); // Пересчитываем при каждом изменении sumArr

  const deletePurchases = (key: string, index: number) => {
    const delKey = Object.keys(sessionStorage).filter(
      (storageKey) => storageKey !== key
    );

    setSessionKeys(delKey);
    setQuantity(quantity - 1);
    sessionStorage.removeItem(key);
    setTotal(sumArr.reduce((acc, item) => acc + item, 0));

    setSumArr((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1); // Удаляем элемент по индексу
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
            sessionKeys.map((storageKey, index) => (
              <Purchases
                key={storageKey}
                purchase={storageKey}
                onChangeSum={arraySum(index)}
                deletePurchases={deletePurchases}
                index={index}
              />
            ))}
        </div>

        {component && <TotalSum total={total} />}
      </div>
    </section>
  );
};