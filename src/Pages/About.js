import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Box,Typography} from '@mui/material'
import { motion } from 'framer-motion';
import { fadeIn } from './../variants'

const About = () => {
  return (
    
        <Layout>
          <motion.div className='boxx'
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.7 }}
          >  
      <Box 
      sx={{my:15, textAlign:"center"
      }}
        >
        <Typography variant='h4'>
          Welcome to my Resturant
        </Typography>

        
         <p>
         Good and healthy foods reduce stress and promote healthy life without suffering. Healthy foods help to
          maintain or improve overall health. 
         Thus, it stands out of utmost importance to individuals to examine the significance of a healthy body
         </p>
         <p>
         offers you a privileged experience combining comfort and conviviality. Whether you are a backpacker, a solo traveler or with your family,
          our hotel with top-of-the-range
          service will meet all your expectations. More than just a hotel, (HN) offers you a place to live and meet people.

          The (HN) hotel offers a complete experience with common areas
          that allow you to meet new people in a unique atmosphere. 
          Lounge area, Ping Pong table, table soccer, darts & Boiler room: we told you, it’s not a hotel like the others, it’s a sharing hotel.
         </p>

<p>  Restaurants provide you with different cuisines of food to satisfy your hunger.
The food preparation and presentation gives you a happy feel during your dull
The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
The restaurant is a life savior when one doesn’t feel like cooking or wants to eat something else.
You get to explore places when you plan to visit a restaurant.
The fast-food restaurant provides your meals on the go to save your time at affordable prices.
The restaurant is a place to enjoy your special occasions like Birthdays, Anniversaries, Achievements, etc.</p>

      </Box></motion.div>
      </Layout>

  );
};

export default About;
