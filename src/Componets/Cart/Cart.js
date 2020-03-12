import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const totalPrice = props.cart.reduce((acc,curr) => {
        return acc + curr.price
    },0)

    let shippingCost  = 0;
    if(totalPrice > 100){
        shippingCost = 0;
    }else if(totalPrice > 0){
        shippingCost = 4.99;
    }
    const formatNumber = num => parseFloat(num.toFixed(2));
    const tax = formatNumber(totalPrice/5);
    const grandTotal = formatNumber(totalPrice + shippingCost + tax);
    return (
        <div className="cart">
            <h4 className="title">Order Summery</h4>
            <h5 className="sub-title">Items Ordered : {props.cart.length}</h5>
            <p>Items Price  <span>${formatNumber(totalPrice)}</span></p>
            <p>Shipping & Handling <span>${shippingCost}</span></p>
            <p>Estimated Tax <span>${tax}</span></p>
    <h5 className="total">Order Total  <span>${grandTotal}</span></h5>
        </div>
    );
};

export default Cart;