import { Link } from "react-router-dom";
import './Navigation.css';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import { mdiCart } from '@mdi/js';

function Navigation ({drawerHandler}) {
    return (
        <div className="nav">
            <div className="left">
                
                <Link to="/products" className="link">PRODUTOS</Link>
            </div>
            
            <div className="title">
                <Link to="/" className="link">VJNNXX STORE</Link>
            </div>

            {/* <Link to="/cart" className="link">Carrinho</Link> */}
            <button onClick={()=> drawerHandler()} className="cart-button">
                <Icon path={mdiCart} size={1} color="white"></Icon>
            </button>
            
        </div>
    )
}

Navigation.propTypes = {
    drawerHandler: PropTypes.func,
}

export default Navigation;