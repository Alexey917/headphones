import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};