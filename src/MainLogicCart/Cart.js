// Cart: Displays the items added to the cart along with their quantities and prices. Users can remove items or change quantities here.
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "../StyleCart/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.amount * item.price;
        });
        setTotalPrice(totalPrice);
    }, [cart]);

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, 1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {totalPrice}</span>
            </div>
        </article>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Cart;
