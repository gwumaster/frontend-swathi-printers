"use client";
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from '../ui/Lamp';

const Hero = () => {
  return (
    <>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-y-10 bg-gradient-to-br from-yellow-400 to-yellow-600 drop-shadow-2xl py-4 bg-clip-text text-center tracking-tight text-transparent"
        >
          <div>
            <p className="text-6xl sm:text-[6rem] font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-transparent bg-clip-text animate-gradient-slow drop-shadow-lg shadow-red-500/30 font-[Playfair Display]">
              Swathi Printers
            </p>
            <p className='text-xl font-medium md:text-2xl mt-6'>Bring Your Event to Life – Design with Us!</p>
            <p className="text-lg text-gray-600 mt-2">High-Quality Printing Services for Every Occasion</p>
          </div>
          <div className='mb-10'>
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl transition duration-200">
              Explore Designs
            </button>
          </div>
        </motion.div>
        <motion.div>
        </motion.div>
      </LampContainer>
    </>
  )
}

export default Hero