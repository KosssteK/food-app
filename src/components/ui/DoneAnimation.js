import doneImg from "../../img/done1.png";
import classes from "./DoneAnimation.module.css";

const DoneAnimation = () => {
  return (
    <p className={classes.bump}>
      <img src={doneImg} alt="done" />
    </p>
  );
};

export default DoneAnimation;
