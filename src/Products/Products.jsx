import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Products.css';

function Products ({products}) {

    const productsArray = products.map((element) =>{

        return (
            <Card key={element.id} product={element}/>
        )
    });

    console.log(products[0])

    

    return (
        <div className='product-grid'>
            {productsArray}
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.array,
}

export default Products;
