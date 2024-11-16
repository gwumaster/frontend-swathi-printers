import React from 'react'

const AboutUs = () => {
  return (
    <div id='about'>
        <section className="drop-shadow-lg py-16 px-4 bg-yellow-100 text-gray-700 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl md:text-3xl text-center font-bold text-yellow-400 py-4 drop-shadow-sm">About Us</h2>
                <p className="mt-4 text-lg">
                    Swathi Printers has been delivering quality printing services since [establishment year]. 
                    Our commitment to excellence in printing is reflected in every project we undertake, 
                    whether it’s a custom invitation card, business card, or any other print material. 
                    We take pride in our attention to detail and our dedication to customer satisfaction.
                </p>
                <p className="mt-4 text-lg">
                    Our mission is to bring your ideas to life with the highest standards of craftsmanship. 
                    We are passionate about creating beautiful, memorable prints that make your special occasions 
                    even more memorable. Let us help you design and print something truly unique!
                </p>
            </div>
        </section>
    </div>
  )
}

export default AboutUs