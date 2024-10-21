import Navigation from "./Navigation/Navigation";
import { useParams } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";
import { Drawer } from '@mui/material';
import './App.css';

function App () {

  const {section} = useParams();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{

    async function fetchData () {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
    
  },[]);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  function closeDrawer(){
    setIsOpen(false);
  }


  function addToCart(product){

    const productIds = cart.map((el) => el.id);

    let newCart = [];

    if (productIds.includes(product.id)){
      newCart = cart.map((element)=>{
        if (element.id === product.id){
          const aux = element;
          aux.quantity = aux.quantity + 1;
          return aux
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

    setTotal(parseFloat(total) + parseFloat(product.price));
    
    setCart(newCart);
  }

  return (
    <>
    <Drawer 
          open={isOpen} 
          onClose={closeDrawer}
          anchor="right"
          classes={{width: '500px'}}
    >
          <Cart cart={cart} total={total}/>
      </Drawer>
      <Navigation drawerHandler={toggleDrawer}/>
      

      {/* AJEITAR A NOJEIRA QUE TA O ALINHAMENTO DA PÁGINA */}
      


      <div className="main">
        { section === 'products' ? (
          <Products products={products} cartHandler={addToCart}/>
        ) :  (
          <h1>HOME</h1>     
        )}
      </div>

      

    </>
  )
}

export default App;