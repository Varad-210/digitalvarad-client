import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Success = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You for Your Purchase!
        </h1>
        
        <p className="text-lg text-gray-600 mb-2">
          Your order was successful and is being processed.
        </p>
        
        <p className="text-gray-500 mb-6">
          You will receive a confirmation email shortly with course access details.
        </p>

        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="block w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition duration-300"
            >
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/products"
              className="block w-full border border-primary-500 text-primary-500 py-3 rounded-lg font-semibold hover:bg-primary-50 transition duration-300"
            >
              Browse More Courses
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 p-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <button 
              onClick={() => document.getElementById('contact-modal').showModal()}
              className="text-primary-500 hover:underline font-semibold"
            >
              Contact our support team
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;