import classes from "../lists/ProductList.module.css";

export const MenuEnum = {
  ADD: "add",
  PRODUCTS: "products",
  CART: "cart",
};

export const Categories = {
  BAKERY: "pieczywo",
  VEGETABLES: "warzywa/owoce",
  MEAT: "mieso",
  DRY: "suche",
  DAIRY: "nabial",
  CHEMISTRY: "srajka",
};

export const getCategoryStyle = (category) => {
  switch (category) {
    case Categories.BAKERY:
      return classes.bakery;
    case Categories.VEGETABLES:
      return classes.vegetables;
    case Categories.MEAT:
      return classes.meat;
    case Categories.DAIRY:
      return classes.dairy;
    case Categories.CHEMISTRY:
      return classes.chemistry;
    case Categories.DRY:
      return classes.dry;
    default:
      return classes.chemistry;
  }
};
