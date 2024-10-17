import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Products.css';

function Products ({products, cartHandler}) {

    const productsArray = products.map((element) =>{

        return (
            <Card key={element.id} product={element} handleClick={cartHandler}/>
        )
    });

    return (
        <div className='product-grid'>
            {productsArray}
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.array,
    cartHandler: PropTypes.func,
}

export default Products;
