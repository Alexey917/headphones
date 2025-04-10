import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
    </div>
  );
};