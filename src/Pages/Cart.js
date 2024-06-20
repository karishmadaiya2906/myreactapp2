import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Header from './../Components/Layout/Header'
import './../Styles/cart.css';
import { ShoppingBag } from '@mui/icons-material';

const Cart = ({ products = [], onProductRemove, onClose, onQuantityChange }) => {
  const navigate = useNavigate(); 

  return (
    <>
      
      <div className='modal'>
        <div className='cart'>
          <div className='header'>
            <h2>Shopping Cart   
       <ShoppingBag/>   
            </h2>
            
            <button className='btn-close-btn' onClick={onClose}>
              <AiFillCloseCircle size={30} />
            </button>
          </div>

          <div className='cart-products'>
            {products.length === 0 ? (
              <h2 className='empty'>Your basket isempty</h2>
            ) : (
              products.map((product) => (
                <div className='cart-product' key={product.name}>
                  <img src={product.image} alt={product.name} />
                  <div className='product-info'>
                    <h3>{product.name}</h3>
                    <span className='product-price'>
                      ${product.price * product.count}
                    </span>
                  </div>
                  <select
                    className='count'
                    value={product.count}
                    onChange={(event) => {
                      onQuantityChange(
                        product.name,
                        parseInt(event.target.value, 10)
                      );
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    className='btn-remove-btn'
                    onClick={() => onProductRemove(product)}
                  >
                    <RiDeleteBin6Line size={25} />
                  </button>
                </div>
              ))
            )}

            {products.length > 0 && (
              <button
                className='btn-checkout-btn'
                onClick={() => navigate('/Checkout',{state:{products}})} 
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

export default Cart;

