import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {img,name,seller,stock,price} = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} in Stock - Oder Soon</p>
                <button className="buy-btn" 
                onClick={() => props.handleCartAdd(props.product)}
                > <FontAwesomeIcon icon={faShoppingCart} />
                Add to cart</button>
            </div>
        </div>
    );
};

export default Product;