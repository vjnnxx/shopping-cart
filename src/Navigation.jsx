import { Link } from "react-router-dom";

function Navigation () {
    return (
        <div className="nav">
            <Link to="/">Inicio</Link>
            <Link to="/products">Produtos</Link>
            <Link to="/cart">Carrinho</Link>
        </div>
    )
}

export default Navigation;