import { useState, useEffect } from "react"

export const useSessionStorage = <T>(key: string | null): T | null => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    if (!key) return

    if (key.startsWith("purchases_")) {
      try {
        let data = sessionStorage.getItem(key);
        if (data) {
          setValue(JSON.parse(data));
        }
      } catch (error) {
        console.error("Ошибка чтения из sessionStorage:", error);
      }
    }

    
  }, [key])

  return value;
}