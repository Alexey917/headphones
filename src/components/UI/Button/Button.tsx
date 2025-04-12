import classes from "./Button.module.css"

interface IButton {
  children: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      <span className={classes.textBtn}>{children}</span>
    </button>  
  ) 
}