import { createContext } from "react";

interface IQuantityContext {
  quantity: number;
  setQuantity: (value: number) => void;
}

export const QuantityPurchasesContext = createContext<IQuantityContext>({
  quantity: 0,
  setQuantity: () => {},
});
