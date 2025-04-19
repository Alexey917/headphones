import { useState, RefObject } from "react";

interface IUseVAlidationPhone {
  validationPhone: () => boolean;
  validPhone: string;
}


export const useVAlidationPhone = (ref?: RefObject<HTMLInputElement | null>): IUseVAlidationPhone => {
  const [validPhone, setValidPhone] = useState<string>("");

  const validationPhone = (): boolean => {
    if (!ref?.current) return false;

    const phoneValue = ref?.current?.value.trim() || ""; 

    if (!phoneValue.match(/^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) {
      setValidPhone("Формат +X (XXX) XXX-XX-XX");
      return false;
    }

    setValidPhone("");
    return true;
  };

  return { validationPhone, validPhone };
}