import React from 'react'
import Header from './Header'

import { motion } from 'framer-motion';
import HotDog from '../data/hotDogs';

const HotDogs = () => {
  return (
    <>
      <Header />
      <title className="title-container">
        <h1>Hot Dogs</h1>
      </title>
      <section className="items-cards-container">
        {HotDog.map((item) => (
          <motion.article
            whileHover={{ scale: 1.03}}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="card-item-container"
            key={item.id}
          >
            <h2>{item.title}</h2>
            <img src={item.thumb} alt={item.title} />
            <h3>Price $ {item.price}</h3>
          </motion.article>
        ))}
      </section>
    </>
  );
}

export default HotDogs


