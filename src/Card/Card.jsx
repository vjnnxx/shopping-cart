import PropTypes from 'prop-types';
import './Card.css';

function Card ({product}) {

    return(
        <div className='card'>
            <img src={product.image} alt={product.title} className='card-image'/>
            <p className='product-title'>{product.title}</p>
            <p>$ {parseFloat(product.price).toFixed(2)}</p>

            <button>Adicionar ao carrinho</button>
        </div>
    )
}

Card.propTypes = {
    product: PropTypes.array,
}

export default Card;