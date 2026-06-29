import { Section } from './BlogPost';
import { Link } from 'react-router-dom';

const SellBizgurukulInstagramContent = () => {
  return (
    <>
      {/* ─── Section 1: Introduction ─── */}
      <Section id="intro" number="1" title="Can You Really Earn ₹10,000–₹50,000/Month as a Student on Instagram? 📱">
        <p>
          Imagine opening Instagram every morning, posting a few stories, replying to some DMs, and by the end of the month seeing ₹14,000–₹50,000 credited to your bank account — while still attending college.
        </p>
        <p>
          Sounds unreal? Thousands of students across India are doing exactly this — by promoting <strong>Bizgurukul</strong> on Instagram with zero investment and just 1 hour a day.
        </p>
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-1">What is Bizgurukul?</p>
          <p>
            Bizgurukul is one of India's leading ed-tech platforms offering courses on digital marketing, affiliate marketing, personal branding, and online business. As an affiliate, you earn a commission of <strong>₹800 to ₹14,000 per sale</strong> depending on the course purchased by your referral.
          </p>
        </div>
        <p>
          In this complete guide, you'll learn the exact step-by-step system to start selling Bizgurukul on Instagram — from setting up your profile to closing your first sale and scaling to ₹50,000+/month.
        </p>
      </Section>

      {/* ─── Section 2: Why Instagram ─── */}
      <Section id="why-instagram" number="2" title="Why Instagram is the #1 Platform to Sell Bizgurukul 🔥">
        <p>
          There are many ways to promote Bizgurukul — WhatsApp, YouTube, Telegram, Facebook. But Instagram is the most powerful for beginners. Here's why:
        </p>
        <ul className="list-none space-y-3 mt-3">
          {[
            ['📊', 'Massive student audience', 'Over 250 million Instagram users in India, majority aged 18–35'],
            ['🎯', 'Visual storytelling', 'Stories, Reels, and carousels let you educate and sell at the same time'],
            ['💬', 'DM selling', 'Direct message conversations convert 10x better than any other channel'],
            ['🆓', 'Zero cost', 'Creating an Instagram account, posting content, and DMing is 100% free'],
            ['📱', 'Mobile only', 'You can do everything from your phone — no laptop needed'],
          ].map(([icon, title, desc]) => (
            <li key={title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Section 3: Profile Setup ─── */}
      <Section id="profile-setup" number="3" title="Step 1 — Set Up a High-Converting Instagram Profile 🖼️">
        <p>
          Your Instagram profile is your <strong>storefront</strong>. Before you post a single piece of content, your profile must instantly communicate: <em>"I help students earn online."</em>
        </p>
        <div className="space-y-4 mt-4">
          {[
            {
              step: 'Profile Name',
              tip: 'Use your real name + a keyword. Example: "Riya | Digital Skills for Students" or "Karan | Earn Online Guide"',
            },
            {
              step: 'Bio (150 characters)',
              tip: 'Answer: Who you help → What you teach → Call to action. Example: "Helping students earn ₹10K–₹50K/month using Instagram 📱 | DM me \'START\' to begin 👇"',
            },
            {
              step: 'Profile Photo',
              tip: 'Use a clear, smiling, real photo of yourself. Emoji-only or logo profiles get ignored. People buy from people.',
            },
            {
              step: 'Link in Bio',
              tip: 'Add your Bizgurukul affiliate link using a free tool like Linktree or Biolinky so followers can click directly.',
            },
            {
              step: 'Story Highlights',
              tip: 'Create 4–5 highlights: "About Me", "Student Wins", "How to Start", "Course Info", "Free Resources". This builds trust instantly.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-5 border-l-4 border-indigo-400">
              <p className="font-bold text-indigo-700 mb-1">✅ {item.step}</p>
              <p className="text-gray-600 text-sm">{item.tip}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 4: Content Strategy ─── */}
      <Section id="content-strategy" number="4" title="Step 2 — The 4-Type Content System That Sells Without Feeling Salesy 📝">
        <p>
          The biggest mistake beginners make is posting <em>only</em> promotional content. Nobody follows an account that screams "Buy this!" every day. You need a balance of four content types:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            { type: '🎓 Educational', pct: '40%', desc: 'Teach something useful — "5 skills students can learn in 30 days to earn online", "How I made my first ₹5,000 online"' },
            { type: '💬 Relatable', pct: '30%', desc: 'Connect emotionally — "Why I stopped chasing a 9-5", "The day I decided to earn before graduation"' },
            { type: '🏆 Social Proof', pct: '20%', desc: 'Show results — student success stories, screenshots (with permission), income proofs, testimonials' },
            { type: '🛒 Promotional', pct: '10%', desc: 'Direct offer — "Join Bizgurukul and start earning in 30 days — link in bio" with a clear CTA' },
          ].map((item) => (
            <div key={item.type} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">{item.type}</span>
                <span className="text-xs font-bold px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">{item.pct} of posts</span>
              </div>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mt-5">
          <p className="font-bold text-amber-800 mb-1">📌 Posting Frequency</p>
          <p className="text-gray-700 text-sm">
            Post <strong>1 Reel + 2–3 Stories per day</strong>. Reels get reach, Stories build trust. Consistency matters more than perfection — post daily for 30 days and watch your account grow.
          </p>
        </div>
      </Section>

      {/* ─── Section 5: DM Strategy ─── */}
      <Section id="dm-strategy" number="5" title="Step 3 — The DM Sales Script That Closes Without Being Pushy 💬">
        <p>
          Instagram DMs are where the real money is made. Every person who views your story, watches your Reel, or likes your post is a potential customer. Here's the 5-step DM framework:
        </p>
        <div className="space-y-4 mt-4">
          {[
            { step: '1. Start with a soft opener', msg: '"Hey [Name]! Noticed you liked my post on digital skills 😊 Are you looking to earn online while studying?"' },
            { step: '2. Identify their pain', msg: '"What\'s your biggest challenge right now — finding time to earn, not knowing where to start, or something else?"' },
            { step: '3. Share your story briefly', msg: '"I was in the same place 3 months ago. What helped me was finding the right platform with actual step-by-step guidance."' },
            { step: '4. Introduce Bizgurukul naturally', msg: '"Have you heard of Bizgurukul? It\'s an ed-tech platform I personally use — it teaches you how to earn while studying with proven methods."' },
            { step: '5. CTA with no pressure', msg: '"I can share a free overview video — want to check it out and see if it\'s right for you? No pressure at all!"' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-900 mb-2">{item.step}</p>
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-indigo-300">
                <p className="text-gray-700 italic text-sm">"{item.msg}"</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 bg-red-50 rounded-xl p-4 border border-red-100">
          ⚠️ <strong>Don't spam links.</strong> Never send your affiliate link in the first DM. Build trust first. Most students make this mistake and get ignored. Take 2–3 messages before sharing any link.
        </p>
      </Section>

      {/* ─── Section 6: Bizgurukul Commission Structure ─── */}
      <Section id="commission" number="6" title="How Much Can You Earn? Bizgurukul Commission Structure 💰">
        <p>
          Bizgurukul has multiple courses at different price points. Your commission depends on which course your referral purchases:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left rounded-tl-lg">Course Level</th>
                <th className="p-3 text-left">Price Range</th>
                <th className="p-3 text-left rounded-tr-lg">Your Commission</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Starter', '₹1,000–₹4,999', '₹800–₹2,000'],
                ['Growth', '₹5,000–₹9,999', '₹3,000–₹5,000'],
                ['Pro', '₹10,000–₹14,999', '₹6,000–₹9,000'],
                ['Elite', '₹15,000+', '₹10,000–₹14,000'],
              ].map(([level, price, commission], i) => (
                <tr key={level} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-semibold text-gray-900">{level}</td>
                  <td className="p-3 text-gray-600">{price}</td>
                  <td className="p-3 font-bold text-green-600">{commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 rounded-xl p-5 border border-green-200 mt-5">
          <p className="font-bold text-green-800 mb-2">🧮 Monthly Income Example</p>
          <p className="text-gray-700 text-sm">
            If you close just <strong>3–4 Elite sales per month</strong>, you earn ₹30,000–₹56,000. With consistent content + DM outreach, students with 500–2,000 followers regularly hit this in 2–3 months.
          </p>
        </div>
      </Section>

      {/* ─── Section 7: Growth Strategy ─── */}
      <Section id="growth" number="7" title="Step 4 — Grow Your Instagram Follower Base Organically 📈">
        <p>
          You don't need 100,000 followers to earn from Instagram. Many students earn consistently with <strong>just 300–1,000 engaged followers</strong>. But to grow even that small audience, follow these strategies:
        </p>
        <ul className="list-none space-y-3 mt-3">
          {[
            ['🎬', 'Post Reels daily', 'Reels have 10x more organic reach than regular posts. Make 30-second Reels on "1 tip to earn online" topics.'],
            ['#️⃣', 'Use targeted hashtags', 'Use niche hashtags like #studentsearningindia #digitalskillsstudent #earnonline2026 — not generic ones with billions of posts.'],
            ['👥', 'Engage in communities', 'Comment genuinely on posts from pages your target audience follows — this builds visibility fast.'],
            ['📩', 'Collaborate', 'DM 5 similar small accounts per week for shoutout exchanges. Free, effective, and builds community.'],
            ['📊', 'Post at peak hours', 'Best times for Indian Instagram: 8–10 AM, 1–3 PM, 8–10 PM IST.'],
          ].map(([icon, title, desc]) => (
            <li key={title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Section 8: 30-Day Action Plan ─── */}
      <Section id="action-plan" number="8" title="Your 30-Day Action Plan to First Sale 🗓️">
        <div className="space-y-4">
          {[
            { week: 'Week 1 (Days 1–7)', label: 'Set Up & Learn', tasks: ['Create and optimise your Instagram profile', 'Join Bizgurukul as an affiliate and get your link', 'Watch their full product walkthrough to understand what you\'re selling', 'Post 3 introductory posts about who you are'] },
            { week: 'Week 2 (Days 8–14)', label: 'Content & Outreach', tasks: ['Post 1 Reel + 2 Stories daily', 'Start DMing 10 people per day with soft openers', 'Create 2 Story Highlights: "About Me" and "Student Wins"', 'Engage (comment/like) on 20 relevant posts per day'] },
            { week: 'Week 3 (Days 15–21)', label: 'Conversations & Trust', tasks: ['Keep DMing 10 new people per day', 'Follow up on previous DMs (most sales happen on follow-up 3–5)', 'Share your Bizgurukul overview video with warm leads', 'Post 1 testimonial or success story post'] },
            { week: 'Week 4 (Days 22–30)', label: 'Close & Scale', tasks: ['Send your affiliate link to leads who are interested', 'Post a direct promotional Reel about Bizgurukul', 'Aim to close your first 1–2 sales', 'Collect feedback from any buyers and share as social proof'] },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-3">
                <p className="text-white font-bold">{item.week}</p>
                <p className="text-indigo-200 text-sm">{item.label}</p>
              </div>
              <ul className="p-5 space-y-2">
                {item.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 9: Key Takeaways ─── */}
      <Section id="takeaways" number="9" title="Key Takeaways 🎯">
        <ul className="list-none space-y-3">
          {[
            'You don\'t need a laptop, investment, or experience — just a smartphone and consistency.',
            'Set up a trust-focused Instagram profile before posting any content.',
            'Use the 40/30/20/10 content mix: Educate → Relate → Prove → Promote.',
            'Never send affiliate links in the first DM. Build rapport first.',
            'The 30-day action plan works if you follow it daily. Most people quit on Day 5.',
            'Even 3–4 Elite sales/month = ₹42,000–₹56,000. That\'s more than many entry-level salaries.',
            'Your first 30 days are about learning. Days 31–90 are about earning.',
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <span className="font-black text-indigo-500 text-lg leading-tight">{i + 1}.</span>
              <p className="text-gray-800">{point}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Section 10: CTA ─── */}
      <Section id="cta" number="10" title="Ready to Start? Join the Biz-Creator Community 🚀">
        <p>
          If you've read this far, you're serious about earning online. Don't let this be another guide you bookmark and forget.
        </p>
        <p>
          The students who succeed are the ones who <strong>take action today</strong> — even if imperfect. Open Instagram, update your bio, and send your first 5 DMs tonight.
        </p>
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-6">
          <p className="text-2xl font-bold mb-3">Start Your Journey Today 💼</p>
          <p className="text-indigo-200 mb-6">Join thousands of students earning through Bizgurukul on Instagram. Get mentorship, support, and a step-by-step system.</p>
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20want%20to%20start%20earning%20with%20Bizgurukul%20on%20Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            WhatsApp Varad to Get Started →
          </a>
        </div>

        {/* Internal links */}
        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
          <p className="font-bold text-gray-800 mb-3">📚 Related Articles You'll Love</p>
          <ul className="space-y-2">
            <li>
              <Link to="/blog/affiliate-marketing-growth" className="text-indigo-600 hover:underline font-medium">
                → Why Beginners Don't Grow in Affiliate Marketing — The 6-Month Routine
              </Link>
            </li>
            <li>
              <Link to="/blog/high-income-skills" className="text-indigo-600 hover:underline font-medium">
                → High Income Skills: The Ultimate Guide for Students
              </Link>
            </li>
            <li>
              <Link to="/" className="text-indigo-600 hover:underline font-medium">
                → Back to VaradBuilds Homepage
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default SellBizgurukulInstagramContent;
