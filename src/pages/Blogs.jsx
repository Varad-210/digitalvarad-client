import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    id: 'how-to-do-content-research',
    title: 'How to Do Content Research',
    subtitle: 'From clueless scrolling to a consistent content engine.',
    excerpt: 'Never run out of content ideas again. Learn the proven content research methods, content pillars, and smart ways to blend content and sales to attract your exact target audience without guessing.',
    category: 'Content Creation',
    readTime: '10 min read',
    date: 'April 9, 2026',
    emoji: '🔍',
    tags: ['Content Research', 'Growth', 'Beginner', 'Instagram'],
    featured: true,
  },
  {
    id: 'top-50-ai-tools',
    title: 'Top 50 AI Tools to Build Online Business',
    subtitle: 'Build a full online business using AI tools — most of them are free!',
    excerpt: 'AI is changing how businesses are built. Discover the top 50 AI tools across design, video, writing, automation, and more. Perfect guide for students breaking into affiliate marketing and personal branding.',
    category: 'AI Tools & Tech',
    readTime: '15 min read',
    date: 'April 9, 2026',
    emoji: '🤖',
    tags: ['AI Tools', 'Business', 'Beginner', 'Student'],
    featured: true,
  },
  {
    id: 'affiliate-marketing-growth',
    title: 'Why Beginners Don\'t Grow in Affiliate Marketing — The 6-Month Routine That Makes You Unstoppable',
    subtitle: 'From No Growth to Consistent Results',
    excerpt:
      'Most beginners quit affiliate marketing after a few weeks. Learn the 6 biggest mistakes that stop growth and discover the proven 6-month routine system that transforms beginners into successful affiliate marketers.',
    category: 'Affiliate Marketing',
    readTime: '13 min read',
    date: 'April 9, 2026',
    emoji: '🔥',
    tags: ['Affiliate Marketing', 'Routine', 'Growth', 'Mindset'],
    featured: true,
  },
  {
    id: 'sell-bizgurukul-instagram',
    title: 'How to Sell Bizgurukul on Instagram and Earn ₹800 to ₹14,000 Per Sale',
    subtitle: 'Complete Beginner Guide (2026)',
    excerpt:
      'Discover exactly how students across India are earning ₹10,000–₹50,000/month by promoting Bizgurukul on Instagram — using just a mobile phone, zero investment, and 1 hour a day.',
    category: 'Affiliate Marketing',
    readTime: '18 min read',
    date: 'April 9, 2026',
    emoji: '📱',
    tags: ['Instagram', 'Affiliate Marketing', 'Bizgurukul', 'Students'],
    featured: true,
  },
  {
    id: 'escape-the-matrix',
    title: 'Escape the Matrix: Why the Education System Keeps Students Trapped',
    subtitle: 'And How to Break Free',
    excerpt:
      'Most students never question the path of School → College → Job → Retirement. Learn why the system keeps you stuck and how to build true financial freedom using your mobile phone.',
    category: 'Mindset & Growth',
    readTime: '12 min read',
    date: 'April 9, 2026',
    emoji: '🎓',
    tags: ['Matrix', 'Mindset', 'Financial Freedom', 'Students'],
    featured: true,
  },
  {
    id: 'high-income-skills',
    title: 'High Income Skills: The Ultimate Guide for Students to Achieve Financial Freedom',
    subtitle: 'From ₹10K Salary to ₹1L+ Income',
    excerpt:
      'Why do some students earn ₹1,00,000/month while others struggle with ₹10,000 salaries? Learn the top high-income skills in 2026 and follow a 90-day roadmap to start earning from your mobile.',
    category: 'Skills & Learning',
    readTime: '10 min read',
    date: 'April 9, 2026',
    emoji: '💰',
    tags: ['Skills', 'Income', 'Learning', 'Career'],
    featured: true,
  },
  {
    id: 'sales-and-marketing',
    title: 'Sales and Marketing: The Two Skills Every Student Must Learn to Earn Online',
    subtitle: 'From Zero Sales to Consistent Income',
    excerpt:
      'Posting content but getting no sales? Learn the difference between sales and marketing, and discover the 80/20 rule and daily 60-minute system that helps students earn consistently online.',
    category: 'Sales & Marketing',
    readTime: '11 min read',
    date: 'April 9, 2026',
    emoji: '🎯',
    tags: ['Sales', 'Marketing', 'Strategy', 'Online Earning'],
    featured: true,
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] via-[#4338ca] to-[#0f172a] py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating Emojis */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-20 right-20 text-white/10 text-6xl"
          >
            📚
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute bottom-20 left-20 text-white/10 text-6xl"
          >
            ✍️
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/2 right-32 text-white/10 text-5xl"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/3 left-32 text-white/10 text-5xl"
          >
            🚀
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide border border-white/30">
              📚 My Blogs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Learn. <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Create.</span> Influence. <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Earn.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Practical guides, strategies, and real student stories to help you build income using digital skills and Bizgurukul affiliate marketing.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-800 mb-10"
          >
            Latest Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-primary-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Card Top Banner */}
                <div className="bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4338ca] p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-50 blur-2xl"></div>
                  <span className="text-7xl relative z-10 drop-shadow-2xl">{post.emoji}</span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {post.featured && (
                    <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-black px-3 py-1 rounded-lg mb-3 w-fit shadow-md shadow-emerald-200/50 uppercase tracking-wider">
                      ⭐ Featured
                    </span>
                  )}
                  <span className="text-[10px] font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-[0.15em] mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3 italic">{post.subtitle}</p>
                  <p className="text-gray-600 text-sm flex-1 mb-4">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-50/50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md border border-blue-100 shadow-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="text-xs text-gray-400">
                      <span>{post.date}</span> · <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="bg-gradient-to-r from-[#2563eb] to-[#4338ca] hover:scale-105 transition-transform text-white text-xs font-black px-5 py-2.5 rounded-xl shadow-lg shadow-blue-200/50 uppercase tracking-widest"
                    >
                      Read Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Blogs;
