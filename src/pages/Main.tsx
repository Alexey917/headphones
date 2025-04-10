import { Headphones } from "../components/UI/Headphones/Headphones";
import { headphones, wirelessHeadphones } from "../data";

export const Main = () => {
  return (
    <main>
      <Headphones title='Наушники' goods={headphones} />
    </main>
  )
}