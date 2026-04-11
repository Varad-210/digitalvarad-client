import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const blogPosts = [
  { id: 'how-to-do-content-research', title: 'How to Do Content Research', subtitle: 'From clueless scrolling to a consistent content engine.', excerpt: 'Never run out of content ideas again. Learn proven content research methods, content pillars, and smart ways to blend content and sales to attract your exact target audience without guessing.', category: 'Content Creation', readTime: '10 min read', date: 'April 9, 2026', emoji: '🔍', tags: ['Content Research', 'Growth', 'Beginner', 'Instagram'], featured: true },
  { id: 'top-50-ai-tools', title: 'Top 50 AI Tools to Build Online Business', subtitle: 'Build a full online business using AI tools — most are free!', excerpt: 'AI is changing how businesses are built. Discover the top 50 AI tools across design, video, writing, automation, and more. Perfect for students breaking into affiliate marketing and personal branding.', category: 'AI Tools & Tech', readTime: '15 min read', date: 'April 9, 2026', emoji: '🤖', tags: ['AI Tools', 'Business', 'Beginner', 'Student'], featured: true },
  { id: 'affiliate-marketing-growth', title: "Why Beginners Don't Grow in Affiliate Marketing — The 6-Month Routine That Makes You Unstoppable", subtitle: 'From No Growth to Consistent Results', excerpt: 'Most beginners quit affiliate marketing after a few weeks. Learn the 6 biggest mistakes that stop growth and discover the proven 6-month routine system that transforms beginners into successful affiliate marketers.', category: 'Affiliate Marketing', readTime: '13 min read', date: 'April 9, 2026', emoji: '🔥', tags: ['Affiliate Marketing', 'Routine', 'Growth', 'Mindset'], featured: true },
  { id: 'sell-bizgurukul-instagram', title: 'How to Sell Bizgurukul on Instagram and Earn ₹800 to ₹14,000 Per Sale', subtitle: 'Complete Beginner Guide (2026)', excerpt: 'Discover exactly how students across India are earning ₹10,000–₹50,000/month by promoting Bizgurukul on Instagram — using just a mobile phone, zero investment, and 1 hour a day.', category: 'Affiliate Marketing', readTime: '18 min read', date: 'April 9, 2026', emoji: '📱', tags: ['Instagram', 'Affiliate Marketing', 'Bizgurukul', 'Students'], featured: true },
  { id: 'escape-the-matrix', title: 'Escape the Matrix: Why the Education System Keeps Students Trapped', subtitle: 'And How to Break Free', excerpt: 'Most students never question the path of School → College → Job → Retirement. Learn why the system keeps you stuck and how to build true financial freedom using your mobile phone.', category: 'Mindset & Growth', readTime: '12 min read', date: 'April 9, 2026', emoji: '🎓', tags: ['Matrix', 'Mindset', 'Financial Freedom', 'Students'], featured: true },
  { id: 'high-income-skills', title: 'High Income Skills: The Ultimate Guide for Students to Achieve Financial Freedom', subtitle: 'From ₹10K Salary to ₹1L+ Income', excerpt: 'Why do some students earn ₹1,00,000/month while others struggle with ₹10,000 salaries? Learn the top high-income skills in 2026 and follow a 90-day roadmap to start earning from your mobile.', category: 'Skills & Learning', readTime: '10 min read', date: 'April 9, 2026', emoji: '💰', tags: ['Skills', 'Income', 'Learning', 'Career'], featured: true },
  { id: 'sales-and-marketing', title: 'Sales and Marketing: The Two Skills Every Student Must Learn to Earn Online', subtitle: 'From Zero Sales to Consistent Income', excerpt: 'Posting content but getting no sales? Learn the difference between sales and marketing, and discover the 80/20 rule and daily 60-minute system that helps students earn consistently online.', category: 'Sales & Marketing', readTime: '11 min read', date: 'April 9, 2026', emoji: '🎯', tags: ['Sales', 'Marketing', 'Strategy', 'Online Earning'], featured: true },
];

const categoryColors = {
  'Content Creation': { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', accent: '#7C3AED' },
  'AI Tools & Tech':  { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-200',   accent: '#2563EB' },
  'Affiliate Marketing': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', accent: '#EA580C' },
  'Mindset & Growth': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', accent: '#059669' },
  'Skills & Learning':{ bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-200',   accent: '#D97706' },
  'Sales & Marketing':{ bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    accent: '#E11D48' },
};

const allCategories = ['All', ...Object.keys(categoryColors)];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen" style={{ background: '#F8F9FE' }}>

      {/* ── Hero ── */}
      <section className="relative pt-16 pb-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #EEF1FF 0%, #F3F8FF 55%, #F0FDF9 100%)' }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #C7D2FE, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: 'radial-gradient(circle, #BBF7D0, transparent)' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              Fresh Insights Weekly
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
              Learn.{' '}
              <span className="relative">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6B8FF8, #20B597)' }}>Create.</span>
              </span>{' '}
              Earn.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Practical guides for students building financial freedom through digital skills, affiliate marketing, and personal branding.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 56L48 49C96 42 192 28 288 21C384 14 480 14 576 18.7C672 23 768 32 864 35C960 38 1056 35 1152 30C1248 25 1344 18 1392 14L1440 11V56H0Z" fill="#F8F9FE" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* ── Category filter pills ── */}
        <div className="flex items-center gap-2 flex-wrap mb-10 -mt-4">
          {allCategories.map((cat) => {
            const isActive = activeCategory === cat;
            const colors = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? cat === 'All'
                      ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                      : `${colors.bg} ${colors.text} ${colors.border} shadow-sm`
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">No posts in this category yet.</div>
        )}

        {/* ── Featured post (first card, full width) ── */}
        {featured && (
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to={`/blog/${featured.id}`} className="group block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left colour slab */}
                <div className="md:w-56 lg:w-72 flex-shrink-0 flex items-center justify-center p-10 md:p-0"
                  style={{ background: 'linear-gradient(135deg, #EEF1FF, #F0FDF9)' }}
                >
                  <motion.span className="text-7xl md:text-8xl block group-hover:scale-110 transition-transform duration-500">
                    {featured.emoji}
                  </motion.span>
                </div>
                {/* Content */}
                <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {(() => { const c = categoryColors[featured.category] || {}; return (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${c.bg} ${c.text}`}>
                        {featured.category}
                      </span>
                    );})()}
                    <span className="text-xs text-gray-400 font-medium">{featured.readTime}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{featured.date}</span>
                    <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-50 px-2 py-1 rounded-lg">Featured</span>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-3 group-hover:text-indigo-700 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-5 line-clamp-2">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ── Grid of remaining posts ── */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => {
              const c = categoryColors[post.category] || { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' };
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 overflow-hidden h-full relative"
                    style={{
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    }}
                  >
                    {/* Emoji area with gradient background */}
                    <div className="px-6 pt-6 pb-4 flex items-start justify-between" style={{ background: 'linear-gradient(135deg, #FAFBFF 0%, #F0F4FF 100%)' }}>
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300 origin-left">{post.emoji}</span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${c.bg} ${c.text}`}>
                        {post.category.split(' ')[0]}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="p-6 pt-4 flex flex-col flex-1">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">{post.excerpt}</p>

                      <div className="flex items-center justify-between mt-auto pt-3">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {post.readTime}
                        </div>
                        <span className="text-indigo-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                          Read
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
