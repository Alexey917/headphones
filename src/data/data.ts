import AppleBYZS8521 from "../assets/img/AppleBYZS8521.png";
import AppleEarPods from "../assets/img/AppleEarPods.png";
import AppleEarPods2 from "../assets/img/AppleEarPods2.png";
import AppleAirPods from "../assets/img/AppleAirPods.png";
import GERLAXGH04 from "../assets/img/GERLAXGH04.png";
import BOROFONEBO4 from "../assets/img/BOROFONEBO4.png";

export interface ISpecifications {
  name: string;
  specification: string;
}

export interface IGoods<T> {
  img: string;
  title: string;
  price: number;
  oldPrice?: string;
  rate: number;

  connection: T;
  bluetooth?: T;
  microphone?: T;
  frequencyRange?: T;
  color: T;
  workingHours?: T;
}

export const headphones: IGoods<ISpecifications>[] = [
  {
    img: AppleBYZS8521,
    title: "Apple BYZ S8521",
    price: 2927,
    oldPrice: "3527 ₽",
    rate: 4.7,

    connection: { name: "Интерфейс поключения", specification: "Jack 3.5" },
    microphone: { name: "Микрофон", specification: "Да, на кабеле" },
    frequencyRange: {
      name: "Частотный диапазон",
      specification: "20-20000 Гц",
    },
    color: { name: "Цвет", specification: "Белый" },
  },
  {
    img: AppleEarPods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,

    connection: { name: "Интерфейс поключения", specification: "Lightning" },
    microphone: { name: "Микрофон", specification: "Да" },
    frequencyRange: {
      name: "Частотный диапазон",
      specification: "20-20000 Гц",
    },
    color: { name: "Цвет", specification: "Белый" },
  },
  {
    img: AppleEarPods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,

    connection: { name: "Интерфейс поключения", specification: "USB Type-C" },
    color: { name: "Цвет", specification: "Белый" },
  },
];

export const wirelessHeadphones: IGoods<ISpecifications>[] = [
  {
    img: AppleAirPods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,

    connection: { name: "Интерфейс поключения", specification: "Bluetooth" },
    bluetooth: { name: "Bluetooth", specification: "Да" },
    microphone: { name: "Микрофон", specification: "Да, встроенный" },
    frequencyRange: {
      name: "Частотный диапазон",
      specification: "20-20000 Гц",
    },
    color: { name: "Цвет", specification: "Белый" },
    workingHours: { name: "Время работы", specification: "4ч" },
  },
  {
    img: GERLAXGH04,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,

    connection: { name: "Интерфейс поключения", specification: "Bluetooth" },
    bluetooth: { name: "Bluetooth", specification: "Да" },
    microphone: { name: "Микрофон", specification: "Да" },
    frequencyRange: {
      name: "Частотный диапазон",
      specification: "20-20000 Гц",
    },
    color: { name: "Цвет", specification: "Белый" },
    workingHours: { name: "Время работы", specification: "6.5ч" },
  },
  {
    img: BOROFONEBO4,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,

    connection: { name: "Интерфейс поключения", specification: "Bluetooth" },
    bluetooth: { name: "Bluetooth", specification: "Да" },
    microphone: { name: "Микрофон", specification: "Да" },
    frequencyRange: {
      name: "Частотный диапазон",
      specification: "20-20000 Гц",
    },
    color: { name: "Цвет", specification: "Чёрный" },
    workingHours: { name: "Время работы", specification: "80ч" },
  },
];
