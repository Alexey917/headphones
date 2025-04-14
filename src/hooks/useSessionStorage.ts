import { useState, useEffect } from "react"

export const useSessionStorage = <T>(key: string | null): T | null => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    if (!key) return

    try {
      let data = sessionStorage.getItem(key);
      if(data) {
        setValue(JSON.parse(data))
        console.log(data)
      } 
    } catch(error) {
      console.error('Ошибка чтения из sessionStorage:', error)
    }
  }, [key])

  return value;
}