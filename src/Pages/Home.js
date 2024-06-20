import React, { useState } from 'react'
import Layout from "../Components/Layout/Layout"
import { Link } from 'react-router-dom'




import { motion } from 'framer-motion';
import { fadeIn } from './../variants'

import './../Styles/styles.css'


function Home() {
  const [activeIndex, setActiveIndex] = useState(0);


  const produts = [
    {
      title: "Ultimate Bacon",
      price: "$70",

      image: "https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/menu_image1.jpg",
      description: "Delicious Ultimate Bacon with fresh ingredients."
    },
    {
      title: "Smoked Brisket",
      price: "$40",
      image: "https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/menu_image2.jpg",
      description: "Delicious Ultimate Bacon with fresh ingredients."
    },
    {
      title: "Buffalo Ranch",
      price: "$50",
      image: "https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/menu_image3.jpg",
      description: "Delicious Ultimate Bacon with fresh ingredients."
    },
    {
      title: "Buffalo Ranch",
      price: "$50",
      image: "https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/menu_image3.jpg",
      description: "Delicious Ultimate Bacon with fresh ingredients."
    }
    ,
    {
      title: "Buffalo Ranch",
      price: "$50",
      image: "https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/menu_image3.jpg",
      description: "Delicious Ultimate Bacon with fresh ingredients."
    }
    ,
    {
      title: "Ultimate Bacon",
      price: "$70",

      image: "https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/menu_image1.jpg",
      description: "Delicious Ultimate Bacon with fresh ingredients."
    },
   

    
   
   
    
  ];
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % produts.length);
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + produts.length) % produts.length);
  };





  return (
    <Layout>
      <body>  
      <div className='conatainer'>

        <motion.div className='overlay-content'
         variants={fadeIn("down", 0.4)}
         initial="hidden"
         animate="show"
         viewport={{ once: false, amount: 0.7 }}>
          <div className='box-text'>
            <h1> We  Offer <br />
              Delicious Food  <br />And Quick Services</h1>
            <p>
              Imagine you don’t need a diet because we
              <br /> provide healthy and delicious food for you!.
            </p>
            <div className='button-Link'>
              <Link to="/Items">
                ORDER NOW
              </Link>

            </div>

          </div>
        </motion.div>
      </div>

      <motion.div className='container-xl'

        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.8 }}>

        <p>Food can be very transformational, and it can be more than
          <br /> just about a dish.
          <br />That’s what happened to me when
          <br /> I first went to France. <br />
          I fell in love. And if you fall in love, well, then everything is easy</p>

      </motion.div>
      <div class="container3">
        <h2 >NEWCOMER</h2>

      </div>
      <div class="container-title ">
        <h1 >
          Vegan fast food     </h1>


      </div>
      < motion.div className='container5'
       variants={fadeIn("up", 0.2)}
       initial="hidden"
       animate="show"
       viewport={{ once: false, amount: 0.7 }}>  
        <div className="carousel-container">
          <div className="carousel" style={{ transform: `translateX(-${activeIndex * 110 / produts.length}%)` }}>
            {produts.map((product, index) => (
              <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
               <div className="card-product-info">
                <div className="product-img">
                  <img src={product.image} alt={product.title} />
               
                
                  <h3 className="product-title">{product.title}</h3>
                 
                </div>
              </div></div>
            ))}
          </div>
      

        <div className="carousel-controls">
          <button className="prev" onClick={handlePrev}>&lt;</button>
          <button className="next" onClick={handleNext}>&gt;</button>
        </div>
      </div></motion.div>


      
      <div className="parallax">
   
      
      </div>

<div >

</div>


     
      <motion.div className='container-xs'

        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.7 }}>
        <h1>Where quality food meet Excellent services.</h1>
        <p>It’s the perfect dining experience where every dish is crafted with fresh,
          <br /> high-quality ingredients and served by friendly staff who go.</p>

      </motion.div>
    


     </body>
    </Layout>
  );
}

export default Home