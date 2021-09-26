// import in here
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // using  destructuing 
    const { cart } = props;
    // total calculate 
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        // show calculation 
        <div className="card text-white bg-secondary mt-3 mb-3 p-2" style={{ "maxWidth": "18rem" }}>
            <div className="card-header"><h3>Add to Product</h3></div>
            <br />
            <h6>Product:{props.cart.length}</h6>
            <br />
            <p>Total:${total}</p>

            <ul>
                {
                    props.names.map((name, index) => <p key={index}>{name}</p>)
                }
            </ul>

        </div>
    );
};

export default Cart;