import { Section } from './BlogPost';
import { Link } from 'react-router-dom';
import { blogPosts } from './Blogs';

const FreelancingRoadmapContent = () => {
  return (
    <>
      {/* ─── Section 1: Introduction & Story ─── */}
      <Section id="intro" number="1" title="Meet Arjun — He Was You 🎓">
        <p className="text-gray-500 italic border-l-4 border-primary-300 pl-4">
          You're sitting in a classroom…
        </p>
        <p>The teacher is explaining something… But your mind is somewhere else…</p>
        <p>You open Instagram… You see someone your age earning online…</p>
        <p>And suddenly a thought comes to your mind:</p>
        <p className="font-bold text-gray-900 text-lg">"Study… Degree… Job… Salary… Retirement…"</p>
        <p className="font-semibold text-gray-900">Is this really life? 🤔</p>
        
        <p className="mt-4">Arjun was a 2nd year engineering student in Pune. Smart guy. He wanted to earn online but had no idea where to start. He spent 3 months watching YouTube videos about "how to make ₹1 lakh online" — and made ₹0.</p>
        
        <p>Then one day his senior told him one thing: <strong>"Stop learning. Start doing one skill. Find one client. Deliver. Repeat."</strong></p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2 italic">"The best known always beats the best at work. Nobody hires the most skilled person — they hire the person they know, trust, and can find."</p>
        </div>

        <p>Arjun picked Web Development. Built 2 practice projects. Messaged 10 local dentists on Instagram. Got 1 reply. Made ₹8,000 for a basic website. That one client gave him the confidence to get 10 more.</p>
        
        <p className="font-bold text-gray-900 text-lg mt-4">This guide is his exact roadmap.</p>
        <p>Every step he took — including the mistakes. Read it like your own story.</p>
      </Section>

      {/* ─── Section 2: Step 1 - Pick ONE Skill ─── */}
      <Section id="step-1" number="2" title="Step 1 — Pick ONE Skill, Go Deep 🎯">
        <p>Most beginners fail because they try to learn everything — web dev + video editing + social media + AI tools. <strong>You don't need to learn everything. You need to learn one thing deeply enough to deliver results.</strong></p>
        
        <p className="font-semibold text-gray-900">The formula: Skill × Demand × Deliverability</p>
        
        <ul className="list-none space-y-2">
          {[
            'Skill — Something you enjoy or already know basics of',
            'Demand — Businesses/people are willing to pay for it',
            'Deliverability — You can package and send it as a service',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4"><strong>Best starter skills in 2026:</strong> Web development, Video editing, Graphic design, Copywriting, AI automation, Social media management.</p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">💡 Arjun's Move</p>
          <p className="text-gray-700 text-sm">He already knew basic HTML/CSS. Instead of learning React first, he picked "Landing Page Development for Local Businesses" — a narrow, deliverable skill with real demand.</p>
        </div>
      </Section>

      {/* ─── Section 3: Step 2 - Choose a Niche ─── */}
      <Section id="step-2" number="3" title="Step 2 — Choose a Niche, One Audience 🎯">
        <p>A niche = the specific type of person you serve. <strong>Niching down makes you easier to find, trust, and refer.</strong> "I build websites" gets ignored. "I build websites for fitness coaches in Pune" gets clients.</p>
        
        <ul className="list-none space-y-2">
          {[
            'Pick a niche where people have money to spend',
            'Pick a niche you can reach (local businesses, Instagram DMs, LinkedIn)',
            'Stick to ONE niche for first 3 months minimum',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4"><strong>Good beginner niches:</strong> Local businesses (dentists, salons, gyms, restaurants), coaches and trainers, real estate agents, content creators needing editing.</p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">🦷 Why Dentists?</p>
          <p className="text-gray-700 text-sm">Arjun messaged dentists because they have high-ticket services, need trust-building, and most had terrible or no websites. Low competition, high willingness to pay.</p>
        </div>
      </Section>

      {/* ─── Section 4: Step 3 - Research Pain Points ─── */}
      <Section id="step-3" number="4" title="Step 3 — Research Your Audience's Pain Points 🔍">
        <p>Before you sell anything, spend 1 week understanding your audience deeply. <strong>You should know their problems better than they do.</strong></p>
        
        <ul className="list-none space-y-2">
          {[
            'What are they struggling with? (Lead generation, looking unprofessional, slow bookings)',
            'What do they wish they had? (More clients, better online presence)',
            'What language do they use when they complain?',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4"><strong>Where to research:</strong> Instagram comments of competitors, Reddit threads, Google Reviews of similar businesses, direct DMs asking "what's your biggest challenge with X?"</p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">🔍 Arjun's Research Finding</p>
          <p className="text-gray-700 text-sm">Most dentists in his area had no website, or a 2015-looking broken one. Their main pain: "Patients don't find us on Google." That became the exact headline of Arjun's offer.</p>
        </div>
      </Section>

      {/* ─── Section 5: Step 4 - Build an Offer ─── */}
      <Section id="step-4" number="5" title="Step 4 — Build an Offer, Not Just a Skill 💼">
        <p>An <strong>offer</strong> is different from a skill. Skill = "I know web dev." Offer = "I'll build you a 4-page website that shows up on Google search in 7 days for ₹8,000."</p>
        
        <p className="font-semibold text-gray-900 mt-4">Good offer formula:</p>
        <p className="bg-indigo-50/60 rounded-xl p-4 border border-indigo-100 font-medium">I help [niche] get [specific result] in [timeframe] for [price].</p>
        
        <ul className="list-none space-y-2 mt-4">
          {[
            'Specific result (not "a nice website" but "appear on Google Maps")',
            'Clear timeline (7 days, 2 weeks)',
            'Clear price (no "it depends")',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">📝 Arjun's Offer</p>
          <p className="text-gray-700 text-sm">"I'll build a modern 5-page website for your dental clinic that ranks on Google, loads fast, and gets you appointment calls — delivered in 10 days. ₹8,500."</p>
        </div>
      </Section>

      {/* ─── Section 6: Step 5 - Create Proof ─── */}
      <Section id="step-5" number="6" title="Step 5 — Create Proof, Portfolio Before Clients 📁">
        <p className="font-bold text-gray-900">"But I have no clients yet, how do I build a portfolio?"</p>
        <p>This is the most common beginner block. Here's the answer: <strong>make your own proof.</strong></p>
        
        <ul className="list-none space-y-2">
          {[
            'Build 2-3 projects for imaginary businesses (fake dentist clinic, fake gym)',
            'Do 1-2 projects for FREE for a local business (friend\'s uncle\'s shop)',
            'Redesign an existing bad website and show before/after',
            'Use college major projects as portfolio pieces',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4">Proof = someone taking you seriously before you have 5-star reviews. A live link, a screenshot, a PDF mockup — all count.</p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">💻 Arjun's Portfolio Move</p>
          <p className="text-gray-700 text-sm">Built 3 fake dental clinic websites in one weekend. Screenshots, live links on GitHub Pages. Shared in his DMs as: "Here's the kind of website I build."</p>
        </div>
      </Section>

      {/* ─── Section 7: Step 6 - Important Documents ─── */}
      <Section id="step-6" number="7" title="Step 6 — Create Important Documents 📄">
        <p>Documents protect you AND build trust. A client who sees a proper proposal thinks "this person is serious." <strong>Prepare these 5 before you reach out to a single client.</strong></p>
        
        <div className="space-y-3 my-4">
          {[
            ['Service Proposal PDF', 'What you\'ll do, timeline, price, deliverables'],
            ['Client Agreement / Contract', 'Payment terms, scope, revision limits, ownership'],
            ['Invoice Template', 'Professional payment request with your bank/UPI details'],
            ['Project Brief / Questionnaire', 'Questions you ask the client before starting'],
            ['Portfolio PDF / Link', 'Your 3 best examples with descriptions'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-indigo-50/60 rounded-lg p-4 border border-primary-100">
              <p className="font-bold text-gray-900 mb-1">📌 {title}</p>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">⚠️ Why This Matters</p>
          <p className="text-gray-700 text-sm">Without a contract, clients ask for 20 revisions and delay payment. With one, you have leverage. Arjun avoided 2 payment disputes because he had a written agreement.</p>
        </div>
      </Section>

      {/* ─── Section 8: Step 7 - Find First Clients ─── */}
      <Section id="step-7" number="8" title="Step 7 — Find Your First Clients 🚀">
        <p>Stop waiting for clients to "discover" you. <strong>You go to them — especially at the beginning.</strong></p>
        
        <ul className="list-none space-y-2">
          {[
            'Instagram DMs — Search your niche, find accounts with bad websites, DM with value first',
            'LinkedIn — Best for B2B, coaches, startups, agencies',
            'Local outreach — Walk into shops, email local businesses, call salon owners',
            'WhatsApp warm network — Tell family/friends what you do. First clients often come from referrals',
            'Freelance platforms — Fiverr, Upwork, Toptal (after you have portfolio)',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-semibold text-gray-900">DM formula:</p>
        <p className="bg-indigo-50/60 rounded-xl p-4 border border-indigo-100 text-sm">[Compliment their work] + [Specific problem you noticed] + [What you can do] + [Call to action]</p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">💬 Arjun's Exact DM</p>
          <p className="text-gray-700 text-sm italic">"Hi Dr. Sharma, I came across your clinic on Google. I noticed you don't have a website — most patients search online before booking. I build dental clinic websites that rank on Google. Would you be open to a quick 10-min call?"</p>
        </div>
      </Section>

      {/* ─── Section 9: Step 8 - Deliver Professionally ─── */}
      <Section id="step-8" number="9" title="Step 8 — Deliver Professionally, Track Everything ⏱️">
        <p>Getting the client is hard. Keeping them is easy — if you communicate well. <strong>Most freelancers lose clients not because of bad work, but bad communication.</strong></p>
        
        <ul className="list-none space-y-2">
          {[
            'Send a project kickoff message with timeline milestones',
            'Share updates every 2-3 days even if small ("working on homepage section")',
            'Deliver before deadline if possible (builds trust instantly)',
            'Track hours with Toggl or Clockify — bills you fairly for bigger projects',
            'After delivery, ask for a testimonial and a referral',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">💡 Bottleneck Insight</p>
          <p className="text-gray-700 text-sm">Spend less time on actual work, more time on marketing + sales + follow-up. 70% of your time in the beginning should be outreach and follow-up, not building.</p>
        </div>
      </Section>

      {/* ─── Section 10: Step 9 - Retain & Grow ─── */}
      <Section id="step-9" number="10" title="Step 9 — Retain & Grow, Build Long-Term Income 📈">
        <p>One project = ₹8,000. Retainer client = ₹8,000 every month. <strong>The goal is recurring income, not one-time gigs.</strong></p>
        
        <ul className="list-none space-y-2">
          {[
            'Retainer — Monthly fee for ongoing support (maintenance, updates, content)',
            'Upsell — After website, offer SEO, social media, email marketing',
            'Add services — Add one new service every 3 months as you improve',
            'Long-term plan — Build to 5 retainer clients = ₹40k/month minimum',
            'Agency / Team — Hire other students to handle overflow work',
            'Automate marketing — Content + Instagram builds inbound leads over time',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">🚀 Arjun at Month 6</p>
          <p className="text-gray-700 text-sm">4 retainer clients (₹4k–8k each), 2 new project clients, and 2 students he mentors for ₹2k/month. Total: ₹45,000/month — while still in college.</p>
        </div>
      </Section>

      {/* ─── Section 11: Must-Have Skills ─── */}
      <Section id="skills" number="11" title="Skills You Must Have 💪">
        <p>Here are the survival skills every freelancer needs:</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-4">
          {[
            ['💻', 'One Technical Skill', 'Web dev, design, video editing, writing, AI automation — pick ONE and go 80% deep. You don\'t need to be expert, just good enough to deliver real results.', 'Must Have'],
            ['✍️', 'Copywriting', 'Writing words that persuade. Used in DMs, proposals, landing pages, Instagram captions. Even basic copywriting doubles your conversion rate.', 'Must Have'],
            ['📱', 'Social Media Presence', 'Personal branding on Instagram or LinkedIn. Mandatory — free, organic content builds trust over time. It generates daily leads on autopilot.', 'Must Have'],
            ['🗣️', 'Sales & Communication', 'How to talk to clients — calls, DMs, proposals. Most technically skilled people earn less because they can\'t communicate their value confidently.', 'Must Have'],
            ['⏱️', 'Time Management', 'Balancing college + freelancing + content. Daily work blocks, deadlines, tracking tools (Notion, Toggl). Without structure, freelancing becomes chaos.', 'Important'],
            ['📊', 'Basic Finance Literacy', 'Invoicing, tracking income/expenses, GST basics, separating business vs personal money. Many freelancers earn well but save nothing.', 'Important'],
            ['🤖', 'AI Tools Literacy', 'Claude, ChatGPT, Midjourney, Canva AI — knowing these 10x your output speed. A freelancer using AI can do the work of 3 people.', 'Bonus / 2026 Edge'],
          ].map(([icon, title, desc, level]) => (
            <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-200 transition-all duration-200">
              <div className="text-3xl mb-3">{icon}</div>
              <p className="font-bold text-gray-900 text-lg mb-2">{title}</p>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{desc}</p>
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${level === 'Must Have' ? 'bg-red-50 text-red-600' : level === 'Important' ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'}`}>{level}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 12: 8 Mistakes Beginners Make ─── */}
      <Section id="mistakes" number="12" title="8 Mistakes Beginners Make ❌">
        <p className="font-semibold text-gray-900 mb-4">Learn from common failures:</p>

        <div className="space-y-4">
          {[
            ['Learning Too Many Skills at Once', 'Switching from web dev to video editing to AI after 2 weeks each. Zero depth, zero results.', 'Lock in ONE skill for 3 months. Master delivery before expanding.'],
            ['Waiting to be "Ready" Before Outreach', '"I\'ll reach out once I learn React." "Once I finish this course." There\'s never a perfect moment.', 'Start outreach with your current skill level. Learn on the job.'],
            ['Underpricing to Get Clients', 'Charging ₹500 for a website. This attracts bad clients, burns you out, and devalues your work.', 'Charge minimum ₹3,000–5,000 for real projects from day one. Do 1-2 free to build proof, then charge.'],
            ['No Contract = No Protection', 'Client asks for "just one more change" 15 times. Then ghosts on payment. You have no leverage.', 'Always use a written agreement, even a simple WhatsApp message confirming scope and price.'],
            ['No Personal Brand / Online Presence', 'Freelancing only through cold DMs is exhausting. No Instagram, no LinkedIn = no inbound leads ever.', 'Post 3x/week sharing your work and learnings. Takes 6 months but builds permanent trust.'],
            ['Spending All Time on Work, Not Sales', 'Building things all day but not talking to clients. Revenue comes from sales, not more learning.', '50% of your daily time should go toward outreach, follow-ups, and proposals — especially early on.'],
            ['Choosing Wrong Niche (No Money There)', 'Targeting college students or broke startups. They need help but can\'t pay well.', 'Target businesses with real revenue — established local businesses, clinics, coaches, agencies.'],
            ['Quitting After 10 Rejections', 'Sends 10 DMs, gets ignored, concludes "freelancing doesn\'t work." Needs 50-100 touchpoints.', 'Track outreach in a spreadsheet. Expect 5-10% reply rate. 100 DMs → 10 replies → 2-3 clients. It\'s math.'],
          ].map(([title, problem, fix], i) => (
            <div key={title} className="bg-red-50/50 rounded-lg p-4 border border-red-100">
              <div className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm mb-2">{problem}</p>
                  <p className="text-emerald-700 text-sm font-medium">✦ FIX: {fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 13: Freelancing vs Affiliate Marketing ─── */}
      <Section id="comparison" number="13" title="Freelancing vs Affiliate Marketing 🤔">
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-200">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Active Income</p>
            <p className="font-bold text-gray-900 text-xl mb-3">Freelancing</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                '💰 You get paid per project or per month',
                '⚡ Fastest way to earn first ₹10,000',
                '🤝 Direct client relationships',
                '📈 Scales to agency with team',
                '⏱️ Requires your time actively',
                '🎯 Best for students starting out',
              ].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200">
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Passive / Hybrid Income</p>
            <p className="font-bold text-gray-900 text-xl mb-3">Affiliate Marketing</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                '💸 Earn commission recommending products',
                '⏳ Takes 6-12 months to see income',
                '📱 Best with existing content audience',
                '🔁 Income can be semi-passive once built',
                '🚫 High competition, trust issues',
                '⚠️ Don\'t start here — build audience first',
              ].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ─── Section 14: Personal Branding ─── */}
      <Section id="branding" number="14" title="Personal Brand = Inbound Leads 🌟">
        <p>Building a personal brand creates automatic lead generation over time.</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-4">
          {[
            ['🆓 Free + Organic', 'No ad spend needed. Just consistent posting about what you do, what you learn, and who you help.'],
            ['🤝 Builds Trust', 'When someone sees 30 posts from you before they DM, they already trust you. The sale is half done.'],
            ['📅 Limited Content', 'Post 3x/week not 3x/day. Consistency over quantity. 1 quality reel beats 5 mediocre ones.'],
            ['🤖 Automate Marketing', 'Use AI tools to batch create content, repurpose reels into carousels, and schedule weeks ahead.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-indigo-50/60 rounded-lg p-4 border border-primary-100">
              <p className="font-bold text-gray-900 mb-2">{title}</p>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 15: Key Takeaways ─── */}
      <Section id="takeaways" number="15" title="Key Takeaways ✅">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Pick ONE skill and go deep',
            'Choose a profitable niche',
            'Build proof before clients',
            'Create professional documents',
            'Focus 70% on sales, 30% on delivery',
            'Start before you feel ready',
            'Track everything in spreadsheets',
            'Build personal brand on the side',
            'Aim for retainer clients, not one-offs',
            'Consistency beats intensity',
          ].map(item => (
            <div key={item} className="flex items-center gap-3 bg-indigo-50/60 rounded-lg p-3 border border-primary-100">
              <span className="text-indigo-600 text-xl">✔</span>
              <span className="text-gray-700 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 mt-6 text-center">
          <p className="font-bold text-2xl mb-2">Your Action Plan Starts Today</p>
          <p className="text-[#D6D7F0]">Don't read this and close the tab. Pick ONE thing from this roadmap and do it in the next 2 hours.</p>
        </div>
      </Section>

      {/* ─── Section 16: CTA ─── */}
      <Section id="cta" number="16" title="🚀 Join Biz-Creator Community">
        <p className="font-bold text-gray-900 text-lg mb-4">Want to start freelancing and build your first income stream?</p>
        <p>Join <strong>Biz-Creator Community</strong> where students learn:</p>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-7 space-y-4 my-6">
          <ul className="space-y-3">
            {[
              'Personal branding (0-10k followers roadmap)',
              'High-income digital skills training',
              'Sales and communication mastery',
              'Live training sessions by Bizgurukul',
              'Community support and mentorship',
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-white font-bold text-lg">✔</span>
                <span className="text-[#D6D7F0]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 mb-6">
          <p className="text-gray-700 mb-4">
            Bizgurukul provides <strong>live training sessions</strong>, and whenever you get stuck, additional help and guidance are available to support your freelancing journey.
          </p>
          <p className="font-bold text-gray-900 text-lg">Start building your freelance career from your mobile 📱</p>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20read%20your%20blog%20on%20Freelancing%20Roadmap%20and%20want%20to%20know%20more%20about%20starting%20my%20freelancing%20journey."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp to Get Started 🚀
          </a>
        </div>

        <blockquote className="border-l-4 border-primary-400 pl-4 italic text-gray-600 text-lg text-center mt-8">
          "The best time to start was yesterday. The second best time is now." — Stop waiting. Start freelancing today.
        </blockquote>
      </Section>

      {/* ─── Section 17: Related Blog Posts (Internal Links) ─── */}
      <Section id="related-blogs" number="17" title="📚 Continue Your Learning Journey">
        <p className="mb-6">Explore these related articles to deepen your knowledge:</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts
            .filter(post => post.id !== 'freelancing-roadmap' && ['high-income-skills', 'sales-and-marketing', 'how-to-do-content-research', 'affiliate-marketing-growth'].includes(post.id))
            .map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex gap-4 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-xl p-5 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {post.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-indigo-600 font-semibold">
                    Read now
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            View All Blog Posts
          </Link>
        </div>
      </Section>
    </>
  );
};

export default FreelancingRoadmapContent;
