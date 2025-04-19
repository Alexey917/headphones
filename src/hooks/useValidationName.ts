import { useState, RefObject } from "react";

interface IUseVAlidationName {
  validationName: () => boolean;
  validName: string;
}


export const useVAlidationName = (ref?: RefObject<HTMLInputElement | null>): IUseVAlidationName => {
  const [validName, setValidName] = useState<string>("");

  const validationName = (): boolean => {
    if (!ref?.current) return false;

    const nameValue = ref?.current?.value.trim() || ""; 

    if (nameValue === "") {
      setValidName("заполните поле!");
      return false;
    }

    if (nameValue.length < 3) {
      setValidName("слишком короткое имя!");
      return false;
    }

    if (
      /^\d/.test(nameValue[0]) ||
      /^[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?~`]/.test(nameValue)
    ) {
      setValidName("не с цифры и не спецсимвола!");
      return false;
    }

    setValidName("");
    return true;
  };

  return { validationName, validName };
}