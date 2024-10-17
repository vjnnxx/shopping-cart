import Navigation from "./Navigation/Navigation";
import { useParams } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";
import './App.css';

function App () {

  const {section} = useParams();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{

    async function fetchData () {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
    
  },[]);


  function addToCart(product){

    const productIds = cart.map((el) => el.id);

    let newCart = [];

    if (productIds.includes(product.id)){
      newCart = cart.map((element)=>{
        if (element.id === product.id){
          const aux = element;
          aux.quantity = aux.quantity + 1;
          return aux
          
          // return ({...element, quantity: element.quantity++})
        } else {
          return element
        }
      });
    } else {  
      if (product.quantity == null){
        product.quantity = 1;
      }
      
      newCart = [...cart, product];
    }
    
    setCart(newCart);
    console.log(cart)
  }

  return (
    <>
      <Navigation/>

      <div className="main">
        { section === 'cart' ? (
          <Cart cart={cart}/>
        ) :  (
          <Products products={products} cartHandler={addToCart}/>
        )}
      </div>

    </>
  )
}

export default App;