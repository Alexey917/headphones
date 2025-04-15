import { createContext } from "react";
import { IGoods } from "../data/data";

interface IQuantityContext {
  quantity: number;
  setQuantity: (value: number) => void;
  total: IGoods[]
  setTotal: (good: IGoods[]) => void;
}

export const QuantityPurchasesContext = createContext<IQuantityContext>({
    quantity: 0,
    setQuantity: () => {},
    total: [],
    setTotal: () => {},
  });