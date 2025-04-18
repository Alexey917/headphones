import { useState } from "react";
import { useContext } from "react";
import { IGoods, ISpecifications } from "../data/data"
import { QuantityPurchasesContext } from "../context/QuantityPurchasesContext";

export const useAddBasketIGoods = (good: IGoods<ISpecifications>) => {
  const [purchases, setPurchases] = useState<IGoods<ISpecifications>[]>([]);
  const { quantity, setQuantity } = useContext(QuantityPurchasesContext);

  const addBasket = (): void => {
    if (sessionStorage.getItem(`purchases_${good.img}`)) {
      alert("Товар уже в корзине!");
      return;
    }

    const buy = [...purchases, good];
    sessionStorage.setItem(`purchases_${good.img}`, JSON.stringify(good));
    setPurchases(buy);
    setQuantity(quantity + 1);
  };

  return addBasket;
}