import { Purchases } from "../components/Purchases/Purchases";
import { Section } from "../components/Section/Section";
import { TotalSum } from "../components/TotalSum/TotalSum";

export const Basket = () => {
  return (
    <main style={{ marginBottom: "auto" }}>
      <Section title="Корзина" purchases={Purchases} component={TotalSum} />
    </main>
  );
};
