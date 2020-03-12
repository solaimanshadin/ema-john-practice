import React , {useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData/'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {

    const products = fakeData.slice(0,10);

    const [cart, setCart] = useState([]);

    const handleCartAdd = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleCartAdd={handleCartAdd} product={product}></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;