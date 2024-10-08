import Navigation from "./Navigation/Navigation";
import { useParams } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";
import './App.css';

function App () {

  const {section} = useParams();

  const [products, setProducts] = useState([]);

  useEffect(()=>{

    async function fetchData () {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
    
  },[]);

  return (
    <>
      <Navigation/>

      <div className="main">
        { section === 'products' ? (
          <Products products={products}/>
        ) :  (
          <Cart/>
        )}
      </div>

    </>
  )
}

export default App;