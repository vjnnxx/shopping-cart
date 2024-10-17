import PropTypes from 'prop-types';
import './Card.css';

function Card ({product, handleClick}) {

    const addToCart = (product) =>{
        handleClick(product);
    }


    return(
        <div className='card'>
            <img src={product.image} alt={product.title} className='card-image'/>
            <p className='product-title'>{product.title}</p>
            <p>$ {parseFloat(product.price).toFixed(2)}</p>

            <button onClick={()=> addToCart(product)}>Adicionar ao carrinho</button>
        </div>
    )
}

Card.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func,
}

export default Card;