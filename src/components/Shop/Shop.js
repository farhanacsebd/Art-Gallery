import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch('/art.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleAddToCart = (product, name) => {
        // console.log(product)
        const newNames = [...names, name]
        const newCart = [...cart, product];
        setCart(newCart);
        setNames(newNames);
    }

    return (
        <div>
            <div className='shop-container row'>
                <div className='col-md-9'>
                    <div className="row">
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            >

                            </Product>)
                        }

                    </div>
                </div>
                <div className="cart-container col-md-3">
                    <Cart cart={cart} names={names}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;