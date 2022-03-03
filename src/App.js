import './App.css';
import {useState, useEffect} from 'react';
import {MenuEnum} from './components/enums/Enums';
import NavBar from './components/header/NavBar';
import ProductList from './components/lists/ProductList';
import AddProduct from './components/lists/AddProduct';
import Cart from './components/lists/Cart';

function App() {

  const [showCart, setShowCart] = useState(MenuEnum.CART);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://food-b922a-default-rtdb.firebaseio.com/products.json')
    .then(response =>{
      return response.json();
    })
    .then(data =>{
      console.log(data);
      setProducts([...data]);
    })
    .catch(err => console.log(err));
  },[]);

  useEffect(()=>{
    fetch('https://food-b922a-default-rtdb.firebaseio.com/cart.json')
    .then(response =>{
      return response.json();
    })
    .then(data =>{
      setCart([...data]);
    })
    .catch(err => console.log(err));
  },[]);


  
  const updateCart = newCart => {
      fetch('https://food-b922a-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify([...newCart]),
         headers:{
         'Content-Type': 'application/json'
        }
     }).then(response =>{
       console.log(response);
     });
  }

  const updateProducts = newProduct => {
    if(products.indexOf(el => el.name === newProduct.name) === -1){

      const newProducts = [...products, newProduct];

      fetch('https://food-b922a-default-rtdb.firebaseio.com/products.json', {
        method: 'PUT',
        body: JSON.stringify([...newProducts]),
         headers:{
         'Content-Type': 'application/json'
        }
     }).then(response =>{
       console.log(response);
     });
    }
}

  const addProductToCartHandler = (id)=>{
    const newState = [...cart];

    if(newState.findIndex(el => el.id ===id)!== -1){
      const product = newState.find(el => el.id === id);
      product.qty += 1;
      setCart([...newState]);
      updateCart([...newState]);
    }else{
      const product = {...products.find(el => el.id === id)};
      product.qty = 1;
      setCart([...newState, product]);
      updateCart([...newState, product]);
    }
    
  }

  const removeProductFromCartHandler = (id)=>{
    const newCart = [...cart];
    const product = newCart.find(el => el.id === id);
    if(product.qty >1){
      product.qty -= 1;
    }else{
      newCart.splice(newCart.findIndex(el => el.id === id), 1);
    }
    setCart([...newCart]);
    updateCart([...newCart]);
  }

  return (
    <div className="App">
      <NavBar showCart={showCart} setShowCart={setShowCart}/>
      <div className="empty"></div>
      {showCart === MenuEnum.ADD && <AddProduct updateProducts={updateProducts}/> }
      {showCart === MenuEnum.CART && <Cart 
        cart={cart}  
        removeProduct={removeProductFromCartHandler} /> }
      {showCart === MenuEnum.PRODUCTS && <ProductList 
        products={products} 
        addProduct={addProductToCartHandler} />}
     
    </div>
  ); 
}

export default App;