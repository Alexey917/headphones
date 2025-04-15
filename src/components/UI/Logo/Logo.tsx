import { useNavigate } from "react-router-dom";
import classes from "./Logo.module.css";

export const Logo = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button type="button" className={classes.logo} onClick={() => goBack()}>
        QPICK
      </button>
    </>
  );
};
