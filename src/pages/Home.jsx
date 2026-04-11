import { motion } from 'framer-motion';
import Link from 'next/link';
const Home = () => {

  const successStories = [
    {
      id: 1,
      name: "Sneha Reddy",
      role: "Digital Marketing Student",
      content: "Started with zero knowledge about digital marketing. Now I'm earning ₹25,000/month while completing my degree. The guidance was clear and practical.",
      avatar: "👩‍💻"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      role: "Freelance Content Creator",
      content: "I was skeptical about online earning at first. But the step-by-step approach helped me land my first client within 3 weeks. Game changer!",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Affiliate Marketer",
      content: "The best part? I learned everything using just my mobile phone. No fancy equipment needed. Just dedication and the right guidance.",
      avatar: "👩‍🎓"
    },
    {
      id: 4,
      name: "Rohit Kumar",
      role: "Engineering Student",
      content: "Balancing studies and learning digital skills seemed impossible. But with proper guidance, I now earn while I learn. Highly recommend!",
      avatar: "👨‍🎓"
    },
    {
      id: 5,
      name: "Anjali Patel",
      role: "Social Media Manager",
      content: "From scrolling Instagram to earning from it - that's my journey. The courses recommended here are practical and beginner-friendly.",
      avatar: "👩‍💼"
    },
    {
      id: 6,
      name: "Karan Singh",
      role: "Digital Entrepreneur",
      content: "Started as a complete beginner. Now I help others start their digital journey. The community support makes all the difference.",
      avatar: "👨‍💻"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Genuine Guidance",
      description: "Honest recommendations based on real experience, not just theory"
    },
    {
      icon: "📱",
      title: "Mobile-First Learning",
      description: "Start your journey with just a smartphone and internet connection"
    },
    {
      icon: "💡",
      title: "Beginner-Friendly",
      description: "Step-by-step guidance designed specifically for students and beginners"
    },
    {
      icon: "🚀",
      title: "Proven Results",
      description: "Learn skills that actually generate income, not just certificates"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Prafull Billore",
      role: "Founder, MBA Chai Wala",
      avatar: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775746871/channels4_profile_xc7a5u.jpg"
    },
    {
      id: 2,
      name: "Ankur Warikoo",
      role: "Entrepreneur & Author",
      avatar: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775746871/images_vpalcc.webp"
    },
    {
      id: 3,
      name: "Ritesh Agarwal",
      role: "Founder & CEO, OYO Rooms",
      avatar: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775746871/DSC04290-1-rotated-e1741106435831_qssbtv.webp"
    },
    {
      id: 4,
      name: "Nishkarsh Sharma",
      role: "E-commerce Entrepreneur",
      avatar: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775746871/channels4_profile_1_wqskwv.jpg"
    },
    {
      id: 5,
      name: "Ayushmaan Pandita",
      role: "Digital Creator",
      avatar: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775746872/channels4_profile_2_rpn9kr.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating Contact Button */}
      <a
        href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20want%20to%20learn%20more%20about%20digital%20skills"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-secondary-500 hover:bg-secondary-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] via-[#4338ca] to-[#0f172a] py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs - Optimized positioning */}
          <div className="absolute top-10 left-5 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Floating Icons - Hidden on mobile, visible on desktop */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-24 right-16 text-white/8 text-5xl"
          >
            💼
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute bottom-24 left-16 text-white/8 text-5xl"
          >
            🚀
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/2 right-32 text-white/8 text-4xl"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/3 left-32 text-white/8 text-4xl"
          >
            📈
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* Main Heading with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Build Your Future with
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                High-Income Digital Skills
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              I'm Varad Mahadev Sontakke, guiding students and beginners to master digital marketing, freelancing, and online business strategies that actually work.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto"
            >
              Learn proven strategies to earn while you study. No shortcuts, no scams—just real skills that lead to real income and career opportunities.
            </motion.p>

            {/* CTA Buttons with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary Button - Explore Courses */}
              <Link
                href="/products"
                className="group relative px-8 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <span className="relative flex items-center gap-2 text-white">
                  <span>🚀</span>
                  Explore Courses
                </span>
              </Link>

              {/* Secondary Button - Apply for Job */}
              <a
                href="https://www.bizgurukul.com/Biz/careerwithbizgurukul"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-lg bg-white/10 border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/30"
              >
                <span className="flex items-center gap-2 text-white">
                  <span>💼</span>
                  Apply for Job
                </span>
              </a>

              {/* Tertiary Button - Read Blog */}
              <Link
                href="/blog"
                className="group relative px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white/30 hover:border-white/50 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20"
              >
                <span className="flex items-center gap-2 text-white">
                  <span>📘</span>
                  Read My Blog
                </span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-blue-200"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">4,00,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Real Income Skills</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">VaradBuilds</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3 flex-shrink-0"
            >
              <img
                src="https://res.cloudinary.com/dclr2ihxn/image/upload/v1775746519/Photo_af7zz1.jpg"
                alt="Varad Mahadev Sontakke"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl border-4 border-primary-100"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-2/3"
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm Varad, a tech-passionate engineering student who discovered the power of digital skills early in my journey. Like many students, I was searching for ways to earn while learning, and I found my answer in the digital world.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through VaradBuilds, I share <strong>genuine information</strong> about high-income skills, digital marketing strategies, and trusted learning platforms. My goal is simple: help students and beginners navigate the online earning space without falling for scams or wasting time on ineffective methods.
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-gray-800 font-semibold mb-2">My Mission:</p>
                <p className="text-gray-700">
                  Empower 10,000+ students to achieve financial independence through practical digital skills and honest guidance. Every recommendation I make is based on real experience and proven results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section - Success Plan */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Watch Our Success Plan
            </h2>
            <p className="text-lg text-gray-600">
              Create Massive Income With Digital Skills - Paras Saxena (CMO, Bizgurukul)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              src="https://drive.google.com/file/d/1O_ghcmxAgr9Tk4mZXMEXwAWx3cGoVNRU/preview"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Success Plan Video"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary-600">Bizgurukul</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honest guidance from a student who's been in your shoes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real students, real results, real transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{story.avatar}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-primary-600 text-sm font-medium">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{story.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Learn from India's Leading Personalities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get insights from industry leaders who've built successful careers from scratch
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full h-full rounded-full object-cover shadow-lg border-4 border-primary-100"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{mentor.name}</h3>
                <p className="text-gray-600 text-sm">{mentor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 h-400 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] via-[#4338ca] to-[#0f172a] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs - Optimized */}
          <div className="absolute top-10 right-5 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-5 w-72 h-78 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating Icons - Hidden on mobile */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-16 left-16 text-white/8 text-4xl"
          >
            🎯
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute bottom-16 right-16 text-white/8 text-4xl"
          >
            ⭐
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital Journey?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who are building their financial freedom through digital skills. Start learning today with trusted courses and genuine guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <Link
                href="/products"
                className="group relative px-10 py-4 rounded-xl text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <span className="relative text-white">Start Learning Now</span>
              </Link>

              {/* Secondary CTA */}
              <a
                href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20want%20to%20learn%20more%20about%20digital%20skills"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 rounded-xl text-lg font-bold backdrop-blur-lg bg-white/10 border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/30"
              >
                <span className="flex items-center gap-2 text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Connect on WhatsApp
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;