import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import HighIncomeSkillsContent from './HighIncomeSkillsContent';
import EscapeMatrixContent from './EscapeMatrixContent';
import SalesMarketingContent from './SalesMarketingContent';
import AffiliateGrowthContent from './AffiliateGrowthContent';
import TopAIToolsContent from './TopAIToolsContent';
import ContentResearchContent from './ContentResearchContent';
import { blogPosts } from './Blogs';

const blogData = {
  'how-to-do-content-research': { title: 'How to Do Content Research', subtitle: 'Complete Beginner Guide for Consistent Growth', category: 'Content Creation', readTime: '10 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '🔍' },
  'top-50-ai-tools': { title: 'Top 50 AI Tools to Build Online Business', subtitle: 'Complete Guide for Students & Beginners', category: 'AI Tools & Tech', readTime: '15 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '🤖' },
  'sell-bizgurukul-instagram': { title: 'How to Sell Bizgurukul on Instagram and Earn ₹800 to ₹14,000 Per Sale', subtitle: 'Complete Beginner Guide (2026)', category: 'Affiliate Marketing', readTime: '18 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '📱' },
  'escape-the-matrix': { title: 'Escape the Matrix: Why the Education System Keeps Students Trapped', subtitle: 'And How to Break Free', category: 'Mindset & Growth', readTime: '12 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '🎓' },
  'high-income-skills': { title: 'High Income Skills: The Ultimate Guide for Students to Achieve Financial Freedom', subtitle: 'From ₹10K Salary to ₹1L+ Income', category: 'Skills & Learning', readTime: '10 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '💰' },
  'sales-and-marketing': { title: 'Sales and Marketing: The Two Skills Every Student Must Learn to Earn Online', subtitle: 'From Zero Sales to Consistent Income', category: 'Sales & Marketing', readTime: '11 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '🎯' },
  'affiliate-marketing-growth': { title: "Why Beginners Don't Grow in Affiliate Marketing — The 6-Month Routine That Makes You Unstoppable", subtitle: 'From No Growth to Consistent Results', category: 'Affiliate Marketing', readTime: '13 min read', date: 'April 9, 2026', author: 'Varad Sontakke', emoji: '🔥' },
};

export const Section = ({ id, number, title, children }) => (
  <motion.section id={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: 'easeOut' }} className="mb-14 scroll-mt-28">
    <div className="flex items-center gap-3 mb-5">
      <span className="flex-shrink-0 w-8 h-8 rounded-lg text-white text-xs font-black flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #6B8FF8, #4F6FF5)' }}>{number}</span>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-600 leading-relaxed text-[16.5px]">{children}</div>
  </motion.section>
);

const tocItemsBySlug = {
  'how-to-do-content-research': [
    { id: 'intro', label: 'Introduction' }, { id: 'what-is', label: 'What is Content Research' }, { id: 'know-audience', label: 'Know Your Audience' }, { id: 'find-ideas', label: 'Find Proven Ideas' }, { id: 'content-types', label: 'Content Types' }, { id: 'content-bucket', label: 'Content Bucket' }, { id: 'pillars', label: 'Content Pillars Strategy' }, { id: 'viral-method', label: 'Viral Research Method' }, { id: 'smart-blend', label: 'Smart Ways to Blend' }, { id: 'bonus-tips', label: 'Bonus Research Tips' }, { id: 'takeaways', label: 'Key Takeaways' }, { id: 'cta', label: 'Join Community' },
  ],
  'top-50-ai-tools': [
    { id: 'intro', label: 'Introduction' }, { id: 'beginners', label: 'Best Tools for Beginners' }, { id: 'design', label: 'Design & Visual Content' }, { id: 'video', label: 'Video Creation' }, { id: 'writing', label: 'Writing & Content' }, { id: 'audio', label: 'Audio & Voice' }, { id: 'presentations', label: 'Presentations' }, { id: 'development', label: 'Dev & Automation' }, { id: 'research', label: 'Research' }, { id: 'meetings', label: 'Meetings' }, { id: 'image-3d', label: 'Image & 3D' }, { id: 'productivity', label: 'Productivity' }, { id: 'community', label: 'Community & Resources' }, { id: 'support', label: 'Customer Support' }, { id: 'recommended', label: 'Recommended Tools' }, { id: 'takeaways', label: 'Key Takeaways' }, { id: 'cta', label: 'Join Community' },
  ],
  'high-income-skills': [
    { id: 'intro', label: 'Introduction' }, { id: 'what-are', label: 'What Are High Income Skills' }, { id: 'why-learn', label: 'Why Students Must Learn' }, { id: 'top-skills', label: 'Top High Income Skills 2026' }, { id: 'why-not', label: "Why Students Don't Learn" }, { id: 'roadmap', label: '90-Day Roadmap' }, { id: 'example', label: 'Engineering Student Example' }, { id: 'takeaways', label: 'Key Takeaways' }, { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'escape-the-matrix': [
    { id: 'intro', label: 'Introduction' }, { id: 'what-is-matrix', label: 'What is the Matrix?' }, { id: 'why-trapped', label: 'Why Education Traps You' }, { id: 'seven-truths', label: '7 Truths Students Never Told' }, { id: 'escape-plan', label: 'How to Escape' }, { id: 'example', label: 'Engineering Student Example' }, { id: 'takeaways', label: 'Key Takeaways' }, { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'sales-and-marketing': [
    { id: 'intro', label: 'Introduction' }, { id: 'what-marketing', label: 'What is Marketing?' }, { id: 'what-sales', label: 'What is Sales?' }, { id: 'difference', label: 'Sales vs Marketing' }, { id: 'strategies', label: 'Student Strategies' }, { id: 'daily-system', label: 'Daily 60 Minute System' }, { id: 'example', label: 'Engineering Student Example' }, { id: 'takeaways', label: 'Key Takeaways' }, { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'affiliate-marketing-growth': [
    { id: 'intro', label: 'Introduction' }, { id: 'mistake-1', label: 'Mistake #1: No Routine' }, { id: 'mistake-2', label: 'Mistake #2: Inconsistent Learning' }, { id: 'mistake-3', label: 'Mistake #3: Basics Not Clear' }, { id: 'mistake-4', label: 'Mistake #4: No Social Media' }, { id: 'mistake-5', label: 'Mistake #5: Ignoring Health' }, { id: 'mistake-6', label: 'Mistake #6: No Self Belief' }, { id: 'growth-rule', label: '6-Month Growth Rule' }, { id: 'final-truth', label: 'Final Truth' }, { id: 'cta', label: 'Join Biz-Creator Community' },
  ],
  'sell-bizgurukul-instagram': [{ id: 'intro', label: 'Introduction' }],
};

const renderBlogContent = (slug) => {
  switch (slug) {
    case 'how-to-do-content-research': return <ContentResearchContent />;
    case 'top-50-ai-tools': return <TopAIToolsContent />;
    case 'high-income-skills': return <HighIncomeSkillsContent />;
    case 'escape-the-matrix': return <EscapeMatrixContent />;
    case 'sales-and-marketing': return <SalesMarketingContent />;
    case 'affiliate-marketing-growth': return <AffiliateGrowthContent />;
    default: return (<Section id="intro" number="1" title="Coming Soon"><p>This blog post is coming soon. Stay tuned!</p></Section>);
  }
};

const categoryColors = {
  'Content Creation': { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', dot: 'bg-violet-400' },
  'AI Tools & Tech': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', dot: 'bg-blue-400' },
  'Affiliate Marketing': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', dot: 'bg-orange-400' },
  'Mindset & Growth': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', dot: 'bg-emerald-400' },
  'Skills & Learning': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', dot: 'bg-amber-400' },
  'Sales & Marketing': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', dot: 'bg-rose-400' },
};

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-gray-100">
      <div className="h-full transition-none origin-left" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #6B8FF8, #20B597)' }} />
    </div>
  );
};

const MobileTOC = ({ tocItems, activeSection }) => {
  const [open, setOpen] = useState(false);
  if (!tocItems.length) return null;
  return (
    <>
      <button onClick={() => setOpen(true)} className="xl:hidden fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl text-white text-sm font-semibold shadow-xl" style={{ background: 'linear-gradient(135deg, #6B8FF8, #4F6FF5)' }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h7" /></svg>
        Contents
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-50 xl:hidden backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed left-0 top-0 bottom-0 z-50 w-72 bg-white shadow-2xl xl:hidden flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <span className="font-bold text-gray-800 text-sm uppercase tracking-wider">Table of Contents</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">✕</button>
              </div>
              <nav className="overflow-y-auto flex-1 p-4 space-y-1">
                {tocItems.map((item, i) => (
                  <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${activeSection === item.id ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}>
                    <span className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${activeSection === item.id ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-400'}`}>{i + 1}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState('intro');
  const tocRef = useRef(null);

  if (!blogData[slug]) return <Navigate to="/blog" replace />;

  const post = blogData[slug];
  const tocItems = tocItemsBySlug[slug] || [];
  const otherPosts = blogPosts.filter(p => p.id !== slug).slice(0, 3);
  const cat = categoryColors[post.category] || { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', dot: 'bg-indigo-400' };

  useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    tocItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [tocItems, slug]);

  useEffect(() => {
    if (!tocRef.current) return;
    const activeEl = tocRef.current.querySelector(`[data-id="${activeSection}"]`);
    if (activeEl) activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeSection]);

  return (
    <>
      <ReadingProgress />
      <MobileTOC tocItems={tocItems} activeSection={activeSection} />

      <div className="min-h-screen" style={{ background: '#F8F9FE' }}>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-12 pb-24" style={{ background: 'linear-gradient(160deg, #EEF1FF 0%, #F3F8FF 50%, #F0FDF9 100%)' }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle, #C7D2FE, transparent)' }} />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #BBF7D0, transparent)' }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors group">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
              </Link>

              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cat.bg} ${cat.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`}></span>
                  {post.category}
                </span>
                <span className="text-gray-300">·</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>

              <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 200 }} className="text-5xl mb-5">{post.emoji}</motion.div>

              <h1 className="text-3xl md:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">{post.title}</h1>
              <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">{post.subtitle}</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg" style={{ background: 'linear-gradient(135deg, #6B8FF8, #4F6FF5)' }}>VS</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 56L48 49C96 42 192 28 288 21C384 14 480 14 576 18.7C672 23 768 32 864 35C960 38 1056 35 1152 30C1248 25 1344 18 1392 14L1440 11V56H0Z" fill="#F8F9FE" />
            </svg>
          </div>
        </section>

        {/* ── Content area ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex gap-8 xl:gap-12 items-start">

            {/* ── TOC Sidebar ── */}
            <aside className="hidden xl:flex flex-col w-64 flex-shrink-0" style={{ position: 'sticky', top: '88px', maxHeight: 'calc(100vh - 108px)' }}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col" style={{ maxHeight: 'calc(100vh - 108px)', overflow: 'hidden' }}>
                <div className="px-5 py-4 border-b border-gray-50 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg, #6B8FF8, #20B597)' }}></div>
                    <span className="text-xs font-black text-gray-700 uppercase tracking-[0.12em]">On This Page</span>
                  </div>
                </div>

                <nav ref={tocRef} className="overflow-y-auto flex-1 py-3 px-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#E5E7EB transparent' }}>
                  {tocItems.map((item, i) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a key={item.id} href={`#${item.id}`} data-id={item.id}
                        className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 mb-0.5 ${isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black transition-all ${isActive ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-300 group-hover:bg-gray-200 group-hover:text-gray-500'}`}>{i + 1}</span>
                        <span className="leading-snug flex-1">{item.label}</span>
                        {isActive && <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(180deg, #6B8FF8, #20B597)' }} />}
                      </a>
                    );
                  })}
                </nav>

                <div className="px-4 py-3 border-t border-gray-50 flex-shrink-0">
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    Back to top
                  </button>
                </div>
              </div>
            </aside>

            {/* ── Article ── */}
            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-1 min-w-0">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10 lg:p-14">
                {renderBlogContent(slug)}
              </div>

              {/* Related posts */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Continue Reading</h3>
                  <div className="flex-1 h-px bg-gray-100"></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherPosts.map((p, i) => {
                    const c = categoryColors[p.category] || { bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-400' };
                    return (
                      <motion.div key={p.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                        <Link to={`/blog/${p.id}`} className="group flex flex-col bg-white rounded-2xl p-5 border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 h-full">
                          <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300 origin-left">{p.emoji}</span>
                          <h4 className="font-bold text-gray-800 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors">{p.title}</h4>
                          <div className="mt-auto flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-lg ${c.bg} ${c.text}`}>{p.category}</span>
                            <span className="text-[10px] text-gray-400 font-medium">{p.readTime}</span>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
