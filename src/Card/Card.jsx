import PropTypes from 'prop-types';
import './Card.css';

function Card ({product, cartHandler}) {

    const addToCart = (product) =>{
        cartHandler(product);
    }


    return(
        <div className='card'>
            <img src={product.image} alt={product.title} className='card-image'/>
            <p className='product-title'>{product.title}</p>
            <p>$ {parseFloat(product.price).toFixed(2)}</p>

            <button onClick={()=> addToCart(product)} className='default-button'>Adicionar</button>
        </div>
    )
}

Card.propTypes = {
    product: PropTypes.object,
    cartHandler: PropTypes.func,
}

export default Card;