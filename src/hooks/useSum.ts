import { useState } from "react";

export const useSum = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  

  return { increase, decrease, quantity } 
}