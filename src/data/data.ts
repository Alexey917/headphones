import AppleBYZS8521 from "../assets/img/AppleBYZS8521.png";
import AppleEarPods from "../assets/img/AppleEarPods.png";
import AppleEarPods2 from "../assets/img/AppleEarPods2.png";
import AppleAirPods from "../assets/img/AppleAirPods.png";
import GERLAXGH04 from "../assets/img/GERLAXGH04.png";
import BOROFONEBO4 from "../assets/img/BOROFONEBO4.png";

export interface IGoods {
  img: string;
  title: string;
  price: number;
  oldPrice?: string;
  rate: number;
}

export const headphones: IGoods[] = [
  {
    img: AppleBYZS8521,
    title: "Apple BYZ S8521",
    price: 2927,
    oldPrice: "3527 ₽",
    rate: 4.7,
  },
  {
    img: AppleEarPods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: AppleEarPods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

export const wirelessHeadphones: IGoods[] = [
  {
    img: AppleAirPods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    img: GERLAXGH04,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    img: BOROFONEBO4,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];
