import { Fragment, useState } from "react";

import cartImg from "../../img/cart1.png";
import listImg from "../../img/list.png";
import addImg from "../../img/add_box.png";
import { MenuEnum } from "../enums/Enums";

import ListButton from "./ListButton";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={classes.header}>
      <div>
        <header className={classes.controls}>
          <ListButton
            click={() => {
              setInputValue("");
              props.setShowPage(MenuEnum.ADD);
            }}
          >
            <img src={addImg} alt="img" />
          </ListButton>
          <ListButton
            click={() => {
              setInputValue("");
              props.setShowPage(MenuEnum.PRODUCTS);
            }}
          >
            <img src={listImg} alt="img" />
          </ListButton>
          <ListButton
            click={() => {
              setInputValue("");
              props.setShowPage(MenuEnum.CART);
            }}
          >
            <img src={cartImg} alt="img" />
          </ListButton>
        </header>
      </div>
      {props.showPage === MenuEnum.PRODUCTS ? (
        <input
          className={classes.search}
          placeholder="Szukaj..."
          onChange={(event) => {
            setInputValue(event.target.value);
            props.filter(event);
          }}
          value={inputValue}
        />
      ) : null}
    </div>
  );
};

export default NavBar;
