import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

export const Logo = () => {
  return (
    <>
      <Link to="/" className={classes.logo}>QPICK</Link>  
    </>
  )
}