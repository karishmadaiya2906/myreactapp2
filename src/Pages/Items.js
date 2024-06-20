import React, { useState, useEffect } from 'react';
import Layout from '../Components/Layout/Layout';

import Cart from './../Pages/Cart'; 
import './../Styles/item.css';
import { products } from './../data/data';
import { motion } from 'framer-motion';
import { fadeIn  } from './../variants'

const Items = () => {
  const [cartVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem('Cart')) || []
  );

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const existingProduct = productsInCart.find((item) => item.id === product.id);
    if (existingProduct) {
      setProductsInCart((prevState) =>
        prevState.map((item) =>
          item.id === product.id ? { ...item, count: item.count +  1 } : item
      
        )
      );
    } else {
      setProductsInCart([...productsInCart, { ...product, count: 1 }]);
    }
  };
   


 

  const handleAddToCart=(product)=>{
    addProductToCart(product);
   
    alert("Add  To Cart");
    setCartVisible(true);
  }
  return (
    <>
      {cartVisibility && (
          <Cart
            products={productsInCart}
            onClose={() => setCartVisible(false)}
            onQuantityChange={(productId, count) =>
              setProductsInCart((prevState) =>
                prevState.map((item) =>
                  item.id === productId ? { ...item, count } : item
                )
              )
            }
            onProductRemove={(product) =>
              setProductsInCart((prevState) =>
                prevState.filter((item) => item.id !== product.id)
              )
            }
          />
      )}



<button className="btn cart-btn" onClick={() => setCartVisible(true)}>
           
           {productsInCart.length > 0 && (
             <span className="product-count">{productsInCart.length}</span>
           )}
         </button>

 
    <motion.div className="item-container"
    
    variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.7 }}
        
        >
      {products.map((product) => (
        <div className="card4" key={product.name}>
          <div className="image5">
            <img src={product.image} alt={product.name} />
          </div>
          <p>{product.name}</p>
          <div className="title2">
            <h3>Price: $ {product.price}</h3>
            <p>Available</p>
          </div>
          <div className="Button2">
            <button onClick={()=> handleAddToCart(product)} >
      

              Add to Cart
             
             </button>
          </div>
        </div>
      ))}
    </motion.div>
  <Layout/> 
  </>

  );
};

export default Items;