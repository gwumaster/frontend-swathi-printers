"use client";
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/Lamp';

const Hero = () => {
  return (
    <>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 drop-shadow-xl py-4 bg-clip-text text-center tracking-tight text-transparent"
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-red-600 text-transparent bg-clip-text animate-gradient-slow drop-shadow-lg shadow-red-500/30 font-[Playfair Display]">
            Swathi Printers
          </h1>
          <p className='text-lg font-medium md:text-xl mt-6 text'>Bring Your Event to Life – Design with Us!</p>
          <p className="text-md text-gray-600">High-Quality Printing Services for Every Occasion</p>
        </motion.div>
      </LampContainer>
    </>
  )
}

export default Hero