import classes from "./Element.module.css";
import { getCategoryStyle } from "../../enums/Enums";
import addImg from "../../../img/add_circle_small.png";
import removeImg from "../../../img/remove_circle_small.png";

const Element = (props) => {
  const buttonClasses = [classes.button];

  return (
    <div
      className={[classes.item, getCategoryStyle(props.category)].join(" ")}
      key={props.id}
    >
      <span className={classes.name}>{props.name}</span>
      {props.qty ? <span className={classes.qty}>{props.qty}</span> : null}
      <button
        className={buttonClasses.join(" ")}
        onClick={() => props.click(props.id)}
      >
        {props.add ? (
          <img src={addImg} alt="img" />
        ) : (
          <img src={removeImg} alt="img" />
        )}
      </button>
    </div>
  );
};

export default Element;
