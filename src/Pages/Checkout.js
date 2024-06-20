import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import './../Styles/checkout.css';
import boy from './../images/boy.png';

const Checkout = () => {
    const { state } = useLocation(); 
    const products = state?.products || []; 

    
    const subtotal = products.reduce(
        (acc, product) => acc + product.price * product.count,
        0 
    );

    return (
        <>
            <div className='checkout'>
                <h1>
                    Your Order
                    <img src={boy} alt="Boy holding a box" />
                </h1>
                   
                {products.length > 0 ? (
                    <>
                        {products.map((product) => (
                            <div key={product.id} className='product-item'>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Quantity: {product.count}</p>
                                <p>Total: ${product.price * product.count}</p>
                            </div>
                        ))}
                      
                        <div className="subtotal">
                            <h3>Subtotal: ${subtotal.toFixed(2)}</h3> 
                        </div>
                    </>
                ) : (
                    <p>No products in the cart.</p>
                )}
            </div>
            <Layout />
        </>
    );
};

export default Checkout;

