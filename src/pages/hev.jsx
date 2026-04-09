import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = ({ openContactPopup }) => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Freelance Developer",
      content: "Skillmint transformed my career! I went from zero to earning ₹50,000/month in just 3 months.",
      avatar: "👨‍💻"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Digital Marketer",
      content: "The courses are incredibly practical. I landed my first client within 2 weeks of completing the course.",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Graphic Designer",
      content: "Best investment I ever made. The community support alone is worth the price!",
      avatar: "👨‍🎨"
    },
    {
      id: 4,
      name: "Ritu Sharma",
      role: "Freelancer",
      content: "I had been trying to find freelance work for months with no luck. After going through this bundle, I landed my first client within just a week.",
      avatar: "👩‍💻"
    },
    {
      id: 5,
      name: "Rajat Arora",
      role: "Freelancer",
      content: "Honestly, I was never a fan of online courses. But this one was different. It was simple, practical, and even fun to go through. The examples felt relatable, and I never felt bored.",
      avatar: "👨‍🎓"
    },
    {
      id: 6,
      name: "Harshita Kapoor",
      role: "Freelancer",
      content: "The course is great, but the community made it even better. Talking to other freelancers who were just starting like me gave me so much encouragement.",
      avatar: "👩‍🎨"
    }
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Fast Learning",
      description: "Accelerated courses designed for quick skill acquisition"
    },
    {
      icon: "💼",
      title: "Job Ready",
      description: "Skills that employers and clients are actively seeking"
    },
    {
      icon: "💰",
      title: "Earn Smart",
      description: "Learn how to monetize your skills effectively"
    },
    {
      icon: "🌍",
      title: "Global Opportunities",
      description: "Access to international freelance markets"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Prafull Billore",
      role: "Founder, MBA Chai Wala",
      avatar: "https://yt3.googleusercontent.com/bDjtntXuUUiG2C_o5ctYnsS9kzYnFn3iMUNKaFwWON7lZh8jyo_ybZZQNIxeQhSqhUO5g-MWcw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 2,
      name: "Ankur Warikoo",
      role: "Entrepreneur & Author",
      avatar: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDBCbcVxLQitn2PUZkaZGBmIHkZSKWMrKD_6H_3eYLc-3IAKp1fjXB6CBTMsHQCwnWzCzzOpSLZBVAO7PmqCmzLCOixE4grWJso2KPPyM1"
    },
    {
      id: 3,
      name: "Ritesh Agarwal",
      role: "Founder & CEO, OYO Rooms",
      avatar: "https://live.skift.com/wp-content/uploads/2025/02/DSC04290-1-rotated-e1741106435831.jpg?w=1024"
    },
    {
      id: 4,
      name: "Nishkarsh Sharma",
      role: "E-commerce Entrepreneur",
      avatar: "https://yt3.googleusercontent.com/N1Uc8vP_6RSQ0CM4r3QIoIbmknYzJEo5QC-aILOIqtTJkuBlpuF11-Wf8P6ZuUVwh3dZdYoRhA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 5,
      name: "Ayushmaan Pandita",
      role: "Digital Creator",
      avatar: "data:image/jpeg;base64,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"
    }
  ];
  return (
    <>
    
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Skillmint?</h2>
            <p className="text-xl text-gray-600">We provide everything you need to succeed in the freelance world</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our students who transformed their careers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-indigo-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Learn from Industry Experts</h2>
            <p className="text-xl text-gray-600">Get mentored by successful entrepreneurs and professionals</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-gray-600 text-sm">{mentor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-indigo-100 mb-8">Join thousands of students who've transformed their lives with Skillmint</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                View All Courses
              </Link>
              <button 
                onClick={openContactPopup}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
              >
                Get Free Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

export default Home;