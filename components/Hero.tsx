"use client";
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/Lamp';

const Hero = () => {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mb-24 bg-gradient-to-br from-red-400 to-red-600 drop-shadow-xl py-4 bg-clip-text text-center tracking-tight text-transparent"
      >
        <h1 className='text-4xl text-stroke-lg font-medium  md:text-7xl'>Swathi Printers</h1>
        <p className='text-md font-medium md:text-xl mt-6 text'>Bring Your Event to Life – Design with Us!</p>
      </motion.div>
      
    </LampContainer>
  )
}

export default Hero