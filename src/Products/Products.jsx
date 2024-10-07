import PropTypes from 'prop-types';
import './Products.css';

function Products ({products}) {

    const productsArray = products.map((element) =>{

        return (
        <>
            <>
                <img src={element.image} alt={element.title} className='card-image'/>
                <p>{element.title}</p>
                <p>Preço: {element.price}</p>
            </>
        </>
        )
    });

    console.log(products[0])

    

    return (
        <>
            <h1>Estes são os produtos</h1>

            {productsArray}
        </>
    )
}

Products.propTypes = {
    products: PropTypes.array,
}

export default Products;
