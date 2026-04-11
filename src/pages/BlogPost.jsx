import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HighIncomeSkillsContent from './HighIncomeSkillsContent';
import EscapeMatrixContent from './EscapeMatrixContent';
import SalesMarketingContent from './SalesMarketingContent';
import AffiliateGrowthContent from './AffiliateGrowthContent';
import TopAIToolsContent from './TopAIToolsContent';
import ContentResearchContent from './ContentResearchContent';
import { blogPosts } from './Blogs';


const blogData = {
  'how-to-do-content-research': {
    title: 'How to Do Content Research',
    subtitle: 'Complete Beginner Guide for Consistent Growth',
    category: 'Content Creation',
    readTime: '10 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@varadbuilds',
  },
  'top-50-ai-tools': {
    title: 'Top 50 AI Tools to Build Online Business',
    subtitle: 'Complete Guide for Students & Beginners',
    category: 'AI Tools & Tech',
    readTime: '15 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@varadbuilds',
  },
  'sell-bizgurukul-instagram': {
    title: 'How to Sell Bizgurukul on Instagram and Earn ₹800 to ₹14,000 Per Sale',
    subtitle: 'Complete Beginner Guide (2026)',
    category: 'Affiliate Marketing',
    readTime: '18 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@varadbuilds',
  },
  'escape-the-matrix': {
    title: 'Escape the Matrix: Why the Education System Keeps Students Trapped',
    subtitle: 'And How to Break Free',
    category: 'Mindset & Growth',
    readTime: '12 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@varadbuilds',
  },
  'high-income-skills': {
    title: 'High Income Skills: The Ultimate Guide for Students to Achieve Financial Freedom',
    subtitle: 'From ₹10K Salary to ₹1L+ Income',
    category: 'Skills & Learning',
    readTime: '10 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@varadbuilds',
  },
  'sales-and-marketing': {
    title: 'Sales and Marketing: The Two Skills Every Student Must Learn to Earn Online',
    subtitle: 'From Zero Sales to Consistent Income',
    category: 'Sales & Marketing',
    readTime: '11 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@varadbuilds',
  },
  'affiliate-marketing-growth': {
    title: 'Why Beginners Don\'t Grow in Affiliate Marketing — The 6-Month Routine That Makes You Unstoppable',
    subtitle: 'From No Growth to Consistent Results',
    category: 'Affiliate Marketing',
    readTime: '13 min read',
    date: 'April 9, 2026',
    author: 'Varad Sontakke',
    authorHandle: '@skillmint.in',
  },
};

export const Section = ({ id, number, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-14 scroll-mt-28"
  >
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center shadow">
        {number}
      </span>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-700 leading-relaxed text-[17px]">{children}</div>
  </motion.section>
);

const tocItemsBySlug = {
  'how-to-do-content-research': [
    { id: 'intro', label: 'Introduction' },
    { id: 'what-is', label: 'What is Content Research' },
    { id: 'know-audience', label: 'Know Your Audience First' },
    { id: 'find-ideas', label: 'Find Proven Ideas' },
    { id: 'content-types', label: 'Content Types' },
    { id: 'content-bucket', label: 'Content Bucket' },
    { id: 'pillars', label: 'Content Pillars Strategy' },
    { id: 'viral-method', label: 'Viral Research Method' },
    { id: 'smart-blend', label: 'Smart Ways to Blend' },
    { id: 'bonus-tips', label: 'Bonus Research Tips' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'cta', label: 'Join Community' },
  ],
  'top-50-ai-tools': [
    { id: 'intro', label: 'Introduction' },
    { id: 'beginners', label: 'Best Tools for Beginners' },
    { id: 'design', label: 'Design & Visual Content' },
    { id: 'video', label: 'Video Creation' },
    { id: 'writing', label: 'Writing & Content' },
    { id: 'audio', label: 'Audio & Voice' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'development', label: 'Dev & Automation' },
    { id: 'research', label: 'Research' },
    { id: 'meetings', label: 'Meetings' },
    { id: 'image-3d', label: 'Image & 3D' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'community', label: 'Community & Resources' },
    { id: 'support', label: 'Customer Support' },
    { id: 'recommended', label: 'Recommended Tools' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'cta', label: 'Join Community' },
  ],
  'high-income-skills': [
    { id: 'intro', label: 'Introduction' },
    { id: 'what-are', label: 'What Are High Income Skills' },
    { id: 'why-learn', label: 'Why Students Must Learn' },
    { id: 'top-skills', label: 'Top High Income Skills 2026' },
    { id: 'why-not', label: 'Why Students Don\'t Learn' },
    { id: 'roadmap', label: '90-Day Roadmap' },
    { id: 'example', label: 'Engineering Student Example' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'escape-the-matrix': [
    { id: 'intro', label: 'Introduction' },
    { id: 'what-is-matrix', label: 'What is the Matrix?' },
    { id: 'why-trapped', label: 'Why Education System Traps You' },
    { id: 'seven-truths', label: '7 Truths Students Never Told' },
    { id: 'escape-plan', label: 'How to Escape the Matrix' },
    { id: 'example', label: 'Engineering Student Example' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'sales-and-marketing': [
    { id: 'intro', label: 'Introduction' },
    { id: 'what-marketing', label: 'What is Marketing?' },
    { id: 'what-sales', label: 'What is Sales?' },
    { id: 'difference', label: 'Sales vs Marketing' },
    { id: 'strategies', label: 'Student Strategies' },
    { id: 'daily-system', label: 'Daily 60 Minute System' },
    { id: 'example', label: 'Engineering Student Example' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'affiliate-marketing-growth': [
    { id: 'intro', label: 'Introduction' },
    { id: 'mistake-1', label: 'Mistake #1: No Routine' },
    { id: 'mistake-2', label: 'Mistake #2: Inconsistent Learning' },
    { id: 'mistake-3', label: 'Mistake #3: Basics Not Clear' },
    { id: 'mistake-4', label: 'Mistake #4: No Social Media' },
    { id: 'mistake-5', label: 'Mistake #5: Ignoring Health' },
    { id: 'mistake-6', label: 'Mistake #6: Lack of Self Belief' },
    { id: 'growth-rule', label: '6-Month Growth Rule' },
    { id: 'final-truth', label: 'Final Truth' },
    { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'sell-bizgurukul-instagram': [
    { id: 'intro', label: 'Introduction' },
  ],
};

const renderBlogContent = (slug) => {
  switch (slug) {
    case 'how-to-do-content-research':
      return <ContentResearchContent />;
    case 'top-50-ai-tools':
      return <TopAIToolsContent />;
    case 'high-income-skills':
      return <HighIncomeSkillsContent />;
    case 'escape-the-matrix':
      return <EscapeMatrixContent />;
    case 'sales-and-marketing':
      return <SalesMarketingContent />;
    case 'affiliate-marketing-growth':
      return <AffiliateGrowthContent />;
    case 'sell-bizgurukul-instagram':
    default:
      return (
        <Section id="intro" number="1" title="Coming Soon">
          <p>The Instagram blog post is coming soon. Stay tuned!</p>
        </Section>
      );
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState('intro');

  if (!blogData[slug]) return <Navigate to="/blog" replace />;

  const post = blogData[slug];
  const tocItems = tocItemsBySlug[slug] || [];
  const otherPosts = blogPosts.filter(p => p.id !== slug).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);


  useEffect(() => {
    const handleScroll = () => {
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#4338ca] py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Floating Emojis */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-16 right-16 text-white/10 text-5xl"
          >
            📖
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute bottom-16 left-16 text-white/10 text-5xl"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute top-1/3 right-24 text-white/10 text-4xl"
          >
            ✨
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/blog" className="inline-flex items-center gap-1 text-blue-100 hover:text-white text-sm mb-6 transition-colors">
              ← Back to Blog
            </Link>
            <span className="block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 w-fit mx-auto uppercase tracking-widest border border-white/30">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-blue-100 text-xl mb-6">{post.subtitle}</p>
            <div className="flex items-center justify-center gap-4 text-blue-200 text-sm">
              <span>✍️ {post.author}</span>
              <a 
                href={`https://instagram.com/${post.authorHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline decoration-blue-200"
              >
                {post.authorHandle}
              </a>
              <span>·</span>
              <span>📅 {post.date}</span>
              <span>·</span>
              <span>⏱ {post.readTime}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 items-start">
          <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-24 self-start">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">
              <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-4">📋 Contents</p>
              <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${activeSection === item.id
                        ? 'bg-primary-500 text-white font-semibold'
                        : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 p-8 md:p-12 max-w-3xl">
            {renderBlogContent(slug)}

            {/* Internal Links to Other Blogs */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore More Topics</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {otherPosts.map((otherPost) => (
                  <Link
                    key={otherPost.id}
                    to={`/blog/${otherPost.id}`}
                    className="flex flex-col bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-primary-200 transition duration-300 group"
                  >
                    <span className="text-3xl mb-3">{otherPost.emoji}</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                      {otherPost.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-auto">
                      {otherPost.category} · {otherPost.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
