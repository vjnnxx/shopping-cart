import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation () {
    return (
        <div className="nav">
            <Link to="/products" className="link">Produtos</Link>
            <Link to="/cart" className="link">Carrinho</Link>
        </div>
    )
}

export default Navigation;