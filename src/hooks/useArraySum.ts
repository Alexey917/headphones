import { useState } from "react";

export const useArraySum = () => {
  const [sumArr, setSumArr] = useState<number[]>([]);

  const arraySum = (index: number) => (newSum: number) => {
    setSumArr((prev) => {
      const newArr = [...prev];
      newArr[index] = newSum;
      return newArr;
    });
  };

  return { sumArr, setSumArr, arraySum }
}