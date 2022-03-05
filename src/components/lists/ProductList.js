import Element from "./element/Element";
import { Categories } from "../enums/Enums";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const categoryList = [];

  for (const key in Categories) {
    const categoryContent = props.products
      .filter((el) => el.category === Categories[key])
      .map((el, index) => (
        <Element
          key={index}
          id={el.id}
          name={el.name}
          click={props.clickAction}
          category={el.category}
          qty={el.qty}
          add={!el.qty}
        />
      ));
    if (categoryContent.length > 0) {
      categoryList.push(
        <div key={key}>
          <p className={classes.category}>
            <b>{Categories[key].toUpperCase()}</b>
          </p>
          {categoryContent}
        </div>
      );
    }
  }

  return (
    <div>{props.products.length > 0 ? categoryList : <span>Pusto</span>}</div>
  );
};

export default ProductList;
