import Home from "./Home";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

function App () {

  const {section} = useParams();

  console.log(section)

  return (
    <>
      <Navigation/>
      <h2>Loja legal :))</h2>

      { section === 'products' ? (
        <Products/>
      ) : section === 'cart' ? (
        <Cart/>
      ): (
        <Home/>
      )}
    </>
  )
}

export default App;