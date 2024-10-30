import Card from '../Card/Card';
import { CartContext } from '../App';
import './Products.css';
import { useContext } from 'react';

function Products () {

    const {products} = useContext(CartContext);

    const productsArray = products.map((element) =>{

        return (
            <Card key={element.id} product={element}/>
        )
    });

    return (
        <div className='product-grid'>
            {productsArray}
        </div>
    )
}

export default Products;
