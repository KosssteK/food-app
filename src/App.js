import "./App.css";
import { useState, useEffect } from "react";
import { MenuEnum } from "./components/enums/Enums";
import NavBar from "./components/header/NavBar";
import ProductList from "./components/lists/ProductList";
import AddProduct from "./components/lists/AddProduct";

function App() {
  const [showPage, setShowPage] = useState(MenuEnum.CART);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  useEffect(() => {
    fetch("https://food-b922a-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.sort(function (a, b) {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
            return 1;
          }
          return 0;
        });

        setProducts([...data]);
        setFilteredProducts([...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://food-b922a-default-rtdb.firebaseio.com/cart.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.sort(function (a, b) {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
            return 1;
          }
          return 0;
        });
        setCart([...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateCart = (newCart) => {
    fetch("https://food-b922a-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify([...newCart]),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const updateProducts = (newProduct) => {
    if (products.indexOf((el) => el.name === newProduct.name) === -1) {
      const newProducts = [...products, newProduct];
      newProducts.sort(function (a, b) {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      setProducts([...newProducts]);
      setFilteredProducts([...newProducts]);

      fetch("https://food-b922a-default-rtdb.firebaseio.com/products.json", {
        method: "PUT",
        body: JSON.stringify([...newProducts]),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response);
      });
    }
  };

  const addProductToCartHandler = (id) => {
    let newState = [...cart];

    if (newState.findIndex((el) => el.id === id) !== -1) {
      const product = newState.find((el) => el.id === id);
      product.qty += 1;
    } else {
      const product = { ...products.find((el) => el.id === id) };
      product.qty = 1;
      newState = [...newState, product];
    }

    newState.sort(function (a, b) {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });

    setCart([...newState]);
    updateCart([...newState]);
  };

  const removeProductFromCartHandler = (id) => {
    const newCart = [...cart];
    const product = newCart.find((el) => el.id === id);
    if (product.qty > 1) {
      product.qty -= 1;
    } else {
      newCart.splice(
        newCart.findIndex((el) => el.id === id),
        1
      );
    }
    setCart([...newCart]);
    updateCart([...newCart]);
  };

  const filterProducts = (event) => {
    setFilteredProducts(
      products.filter((el) =>
        el.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <NavBar
        showPage={showPage}
        setShowPage={setShowPage}
        filter={filterProducts}
      />
      <div className="empty"></div>

      {showPage === MenuEnum.ADD && (
        <AddProduct updateProducts={updateProducts} />
      )}
      {showPage === MenuEnum.CART && (
        <ProductList
          products={cart}
          clickAction={removeProductFromCartHandler}
        />
      )}
      {showPage === MenuEnum.PRODUCTS && (
        <ProductList
          products={filteredProducts}
          clickAction={addProductToCartHandler}
        />
      )}
    </div>
  );
}

export default App;
