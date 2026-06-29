import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DigitalProducts = () => {
  // Sample digital products - replace with your actual products
  const products = [
    {
      id: 1,
      title: 'Complete Digital Marketing Bundle',
      description: 'Master SEO, Social Media Marketing, Email Marketing, and Content Strategy with this comprehensive bundle.',
      price: '₹2,999',
      originalPrice: '₹5,999',
      image: 'https://via.placeholder.com/400x300',
      category: 'Course Bundle',
      features: ['50+ Video Lessons', 'Lifetime Access', 'Certificate', 'Community Access'],
      badge: 'Bestseller',
      badgeColor: 'bg-gradient-to-r from-amber-400 to-orange-500'
    },
    {
      id: 2,
      title: 'Freelancing Success Roadmap',
      description: 'Step-by-step guide to build a successful freelancing career from scratch.',
      price: '₹1,499',
      originalPrice: '₹2,999',
      image: 'https://via.placeholder.com/400x300',
      category: 'eBook + Templates',
      features: ['100+ Page eBook', 'Client Email Templates', 'Portfolio Templates', 'Pricing Calculator'],
      badge: 'New',
      badgeColor: 'bg-gradient-to-r from-green-400 to-emerald-500'
    },
    {
      id: 3,
      title: 'Affiliate Marketing Masterclass',
      description: 'Learn how to generate passive income through affiliate marketing strategies that work.',
      price: '₹1,999',
      originalPrice: '₹3,999',
      image: 'https://via.placeholder.com/400x300',
      category: 'Video Course',
      features: ['30+ Video Lessons', 'Real Case Studies', 'Affiliate Links Database', 'Monthly Updates'],
      badge: 'Popular',
      badgeColor: 'bg-gradient-to-r from-pink-400 to-rose-500'
    },
    {
      id: 4,
      title: 'Content Creation Toolkit',
      description: 'All the tools and templates you need to create engaging content across all platforms.',
      price: '₹999',
      originalPrice: '₹1,999',
      image: 'https://via.placeholder.com/400x300',
      category: 'Templates Pack',
      features: ['500+ Templates', 'Canva Files', 'Content Calendar', 'Hook Formulas'],
      badge: null,
      badgeColor: ''
    },
    {
      id: 5,
      title: 'YouTube Growth Blueprint',
      description: 'Proven strategies to grow your YouTube channel and monetize your content effectively.',
      price: '₹2,499',
      originalPrice: '₹4,999',
      image: 'https://via.placeholder.com/400x300',
      category: 'Video Course',
      features: ['40+ Video Lessons', 'Thumbnail Templates', 'Script Formulas', 'Analytics Guide'],
      badge: 'Trending',
      badgeColor: 'bg-gradient-to-r from-purple-400 to-indigo-500'
    },
    {
      id: 6,
      title: 'AI Tools for Business',
      description: 'Master the latest AI tools to automate your business and boost productivity.',
      price: '₹1,799',
      originalPrice: '₹3,499',
      image: 'https://via.placeholder.com/400x300',
      category: 'Course + Tools',
      features: ['AI Tools Database', 'Prompt Library', 'Automation Workflows', 'Use Case Examples'],
      badge: 'Hot',
      badgeColor: 'bg-gradient-to-r from-red-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs - Optimized positioning */}
          <div className="absolute top-10 left-5 w-64 h-64 bg-[#7075D0]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 w-80 h-80 bg-[#383AB4]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#34A7E0]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white/90 bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Premium Digital Assets
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital <span className="text-cyan-200">Products</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
              Premium digital products, courses, and resources to accelerate your online success
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['All Products', 'Courses', 'eBooks', 'Templates', 'Bundles'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249,250,251)" />
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-cyan-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-3">
                    {product.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                      Save {Math.round((1 - parseInt(product.price.replace(/[^\d]/g, '')) / parseInt(product.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/50">
                    Get This Product
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Looking for personalized coaching or custom digital products? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20want%20to%20discuss%20custom%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Me
              </a>
              <Link
                to="/blog"
                className="px-8 py-4 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Read My Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProducts;
