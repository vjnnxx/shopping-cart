import { useContext } from 'react';
import { CartContext } from '../App';
import './Cart.css'

function Cart () {

    const {cart, total, emptyCart} = useContext(CartContext);

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
                    {/* Adicionar botões pra aumentar ou diminiur a quantidade */}
                    <p>Total: R${parseFloat(product.price*product.quantity).toFixed(2)}</p>
                </div>
                
            </div>
        )
    });

    return (
        <div className='cart-drawer'>

            {cart.length == 0 ? (
                <h2>Carrinho está vazio</h2>
            ) : (
                <>
                    <div className="cart">
                        {productList}
                    </div>

                    <div className="checkout">
                        <h2>subtotal: R$ {total.toFixed(2)}</h2>
                        <button className='default-button'>Checkout</button>
                        <button className='default-button delete-button' onClick={() => emptyCart()}>Esvaziar carrinho</button>
                    </div>
                </>
                
            )}

            
            
        </div>
    )
}

export default Cart;