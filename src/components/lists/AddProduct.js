import classes from "./AddProduct.module.css";

import { Categories } from "../enums/Enums";
import { Fragment, useState } from "react";
import DoneAnimation from "../ui/DoneAnimation";

const AddProduct = (props) => {
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(Categories.BAKERY);
  const [showDone, setShowDone] = useState(false);
  let timeout = null;

  const onSelectChange = (event) => {
    setCategory(event.target.value);
  };

  const onNameChange = (event) => {
    setShowError(false);
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setShowError(false);

    setShowDone(false);
    clearTimeout(timeout);

    if (name.trim(" ").length === 0) {
      setShowError(true);
      return;
    } else {
      setShowDone(true);
      timeout = setTimeout(() => {
        setShowDone(false);
      }, 2000);
    }

    console.log(name);
    console.log(category);

    props.updateProducts({ id: Math.random(), name: name, category: category });
  };

  const selectOptions = [];

  for (const key in Categories) {
    selectOptions.push(
      <option key={key} value={Categories[key]}>
        {Categories[key]}
      </option>
    );
  }

  return (
    <Fragment>
      {showError ? <p>Nope</p> : null}
      {showDone ? <DoneAnimation /> : null}
      <form onSubmit={submitHandler} className={classes.productForm}>
        <h2>Nazwa</h2>
        <input value={name} onChange={onNameChange} />
        <h2>Dział</h2>
        <select
          value={category}
          onChange={onSelectChange}
          name="category"
          id="category"
        >
          {selectOptions}
        </select>
        <button className={classes.button} type="submit">
          Dodaj
        </button>
      </form>
    </Fragment>
  );
};

export default AddProduct;
