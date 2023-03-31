import React from 'react';
import cart from "../cardimages/cart.svg"
import "./Cart.css"

const Cart = () => {
    return (
        <div className='cart-border'>
            <img src={cart} alt='cart' className='cartt'></img>
        </div>
    );
}

export default Cart;
