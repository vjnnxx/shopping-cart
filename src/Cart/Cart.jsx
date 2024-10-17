import PropTypes from 'prop-types';
import './Cart.css'


function Cart ({cart}) {

    const productList = cart.map((product)=>{
        return (
            <div key={product.id} className='cart-item'>
                
                <div className="product-image">
                    <img src={product.image} alt={product.title} className='card-image'/>
                </div>

                <div className="product-content">
                    <p>{product.title}</p>
                    <p>R${parseFloat(product.price).toFixed(2)}</p>
                    <p>Quantidade: {product.quantity}</p>
                    <p>Total: {parseFloat(product.price*product.quantity).toFixed(2)}</p>
                </div>
                
            </div>
        )
    });

    return (
        <>

            {cart.length == 0 ? (
                <h2>Carrinho está vazio</h2>
            ) : (
                <div className="cart">
                    {productList}
                </div>
            )}

            
            
        </>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
}


export default Cart;