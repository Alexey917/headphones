import { useNavigate } from "react-router-dom";
import { Button } from "../components/UI/Button/Button";

export const Success = () => {
  const navigate = useNavigate()

  const goBack = () => navigate('/')

  return (
    <main style={{ alignSelf: "center", display: 'flex', flexDirection: 'column',  justifyContent: 'center' }}>
      <h1>Заказ оформлен. Спасибо за покупку!</h1>
      <Button children="Вернуться на главную" onClick={goBack} />
    </main>
  );
  
  
}