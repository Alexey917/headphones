import { Section } from "../components/Section/Section";
import { headphones, wirelessHeadphones } from "../data/data";

export const Main = () => {
  return (
    <main>
      <Section title="Наушники" goods={headphones} />
      <Section goods={headphones} />
      <Section title="Беспроводные наушники" goods={wirelessHeadphones} />
    </main>
  );
};
