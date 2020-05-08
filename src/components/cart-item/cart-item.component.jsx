import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price"> {quantity * price} RON </span>
        <small className="price"> {quantity} X {price} </small>
        </div>
    </div>
)

export default CartItem;


