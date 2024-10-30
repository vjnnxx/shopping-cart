import Navigation from "./Navigation/Navigation";
import { useParams } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import DefaultPage from "./DefaultPage";
import { useEffect, useState, createContext } from "react";
import { Drawer } from '@mui/material';
import Toastify from 'toastify-js'
import './App.css';

export const CartContext = createContext({
  cart: [],
  total: 0,
  emptyCart: () => {},
  addToCart: () => {},
});


function App () {

  const {section} = useParams();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);



  function emptyCart (){
    setCart([]);
    setTotal(0);
  }

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


    Toastify({

      text: "Item adicionado ao carrinho!",
      
      duration: 1000,

      style: {
        backgroundColor: 'green',
        width: '300px',
        height: '50px',
        position: 'fixed',
        marginLeft: '75%',
        marginTop: '75px',
        opacity: 0.98,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        color: '#fff',
      },  
      }).showToast();

    
  }

  return (
    <CartContext.Provider value={{cart, total, emptyCart, addToCart, products}}>
      <Drawer 
            open={isOpen} 
            onClose={closeDrawer}
            anchor="right"
            classes={{width: '500px'}}
      >
          <Cart/>
      </Drawer>
      <Navigation drawerHandler={toggleDrawer}/>

      
      <div className="main">
        { section === 'products' ? (
          <Products/>
        ) : section === 'home' || section == null ?   (
          <Home/>  
        ) : (
          <DefaultPage/>
        )  
        }
      </div>

      

    </CartContext.Provider>
  )
}

export default App;