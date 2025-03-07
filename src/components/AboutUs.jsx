import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div 
      className="about-us p-4 bg-gray-100 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
               Our innovative solution empowers farmers to safeguard their fields by detecting intruding wild animals in real time. With instant alerts, integrated weather updates, live camera feeds, and historical data tracking, it ensures smarter and more efficient field monitoring.
      </motion.p>
      
      <motion.h3 
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Key Features
      </motion.h3>
      <motion.ul 
        className="list-disc ml-6 mb-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <li>Solar powered</li>
        <li>Unique Sound And Light Combinations</li>
        <li>Easy and Quick to deploy</li>
        <li>Safe for Humans and Animals</li>
        <li>AI Enabled</li>
      </motion.ul>

      <motion.p 
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
              Farmers near protected forest areas
 suffer huge crop loss due to crop
 raiding by wild animal like Nilgai,wild
 boars, monkeys, elephants, and deer.
 WADS, when installed in the periphery
 of farmland, successfully detects and
 repels such animals 91% of the times.
 This in turn can lead up to 60% increase
 in crop yield. It protects the fields 24*7
 without the need of human intervention
      </motion.p>
      
      <motion.div 
        className="carousel-container w-full max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <motion.img 
              src="/images/project1.jpg" 
              alt="Project Image 1" 
              className="rounded-lg"
              style={{ height: '300px', width: '300px', objectFit: 'cover' }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div>
            <motion.img 
              src="/images/project2.jpg" 
              alt="Project Image 2" 
              className="rounded-lg"
              style={{ height: '300px', width: '300px', objectFit: 'cover' }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <div>
            <motion.img 
              src="/images/WhatsApp Image 2025-03-07 at 13.52.17_86d8fb21.jpg" 
              alt="Project Image 2" 
              className="rounded-lg"
              style={{ height: '400px', width: '300px', objectFit: 'cover' }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
