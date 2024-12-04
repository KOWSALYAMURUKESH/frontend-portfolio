import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { motion } from "framer-motion"; // For animations

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300">
      {/* Animated Welcome Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold  text-center text-blue-800 mb-6"
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Animated Sub-Heading */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-lg text-center text-gray-700 mb-8"
      >
        I'm a passionate Full-Stack Developer. Let's connect and create
        something amazing!
      </motion.p>

      {/* Animated Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      >
        <Link
          to="/home"
          className="px-6 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
          Get Started
        </Link>
      </motion.div>
      </div>
  )}

  export default WelcomePage
