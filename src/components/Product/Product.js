import React from 'react';
import './Product.css'
const Product = (props) => {
    const { Name, Artist, img, Dimensions, Created, price } = props.product;
    // console.log(props)
    return (
        <div className='col-md-4 rounded mt-2'>
            <div className="card mb-3" style={{ "maxWidth": "440px" }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{Name}</h5>
                            <p><span className='fw-bold'>Artist: </span>{Artist}
                                <br />
                                <span className='fw-bold'>Created: </span>{Created}
                                <br />
                                <span className='fw-bold'>Dimensions: </span>{Dimensions}
                                <br />


                                <span className='fw-bold'>Price: </span>${price}
                            </p>
                            <button onClick={() => props.handleAddToCart(props.product, Name)} className='btn btn-success'><i className="fas fa-shopping-cart"></i> Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;