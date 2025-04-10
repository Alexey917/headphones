export interface IGoods {
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
}

export const headphones: IGoods[] = [
  {
    img: "",
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
  },
  {
    img: "",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

export const wirelessHeadphones: IGoods[] = [
  {
    img: "",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    img: "",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    img: "",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];