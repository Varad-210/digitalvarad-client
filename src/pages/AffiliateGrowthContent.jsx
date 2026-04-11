import { Section } from './BlogPost';

const AffiliateGrowthContent = () => {
  return (
    <>
      {/* ─── Section 1: Introduction ─── */}
      <Section id="intro" number="1" title="Introduction 🚀">
        <p>Many beginners start affiliate marketing with excitement. They create Instagram pages… Watch training videos… Post a few reels…</p>
        <p className="font-bold text-gray-900 text-lg">But after some days… No growth. No leads. No income.</p>
        <p>This is where most beginners give up.</p>
        
        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-semibold text-gray-900 mb-2">But here's the truth:</p>
          <p className="text-gray-700">Beginners don't fail because of lack of skills… They fail because of <strong>lack of routine and mindset</strong>.</p>
        </div>

        <p>If you look at successful affiliate marketers, content creators, and digital entrepreneurs, you'll notice one common thing — they follow a <strong>daily routine system</strong>.</p>

        <p className="font-semibold text-gray-900 mt-4">This blog will help you understand:</p>
        <ul className="list-none space-y-2">
          {[
            'Why beginners don\'t grow',
            'The biggest mistakes beginners make',
            'A simple routine system for success',
            'The 6-month growth plan',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 mt-6 text-center">
          <p className="font-bold text-xl">If you follow this routine consistently for 6 months, your chances of growth will increase significantly.</p>
        </div>
      </Section>

      {/* ─── Section 2: Mistake #1 ─── */}
      <Section id="mistake-1" number="2" title="Biggest Mistake #1 – No Routine, No Structure ❌">
        <p>One of the biggest reasons beginners don't grow is <strong>lack of routine</strong>. Most beginners start their day without any clear plan. They wake up, open Instagram, watch videos, and spend hours thinking about what to do. By the time they decide, half of the day is already wasted.</p>
        
        <p>This creates confusion and reduces productivity. Without a routine, you don't know what tasks to prioritize. This leads to inconsistency, which directly affects growth.</p>

        <div className="bg-red-50 rounded-xl p-5 border border-red-200 my-4">
          <p className="font-bold text-red-700 mb-2">❌ The Problem:</p>
          <p className="text-gray-700 text-sm">Successful affiliate marketers don't work randomly. They follow a structured daily plan. A simple habit like planning your day can make a big difference.</p>
        </div>

        <p className="font-bold text-secondary-600 text-xl mt-6 mb-3">✅ Solution: Night To-Do System</p>
        <p>Start creating a <strong>Night To-Do List</strong>.</p>
        
        <div className="bg-gradient-to-br from-[#E8FAF6] to-white rounded-xl p-5 border border-emerald-100 my-4 shadow-sm">
          <p className="font-semibold text-gray-900 mb-3">Before sleeping:</p>
          <ul className="space-y-2">
            {[
              'Spend 10 minutes planning next day',
              'Write your top 3 tasks',
              'Note what you achieved today',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>This habit improves clarity and helps you stay focused. Over time, this routine builds discipline and productivity.</p>
      </Section>

      {/* ─── Section 3: Mistake #2 ─── */}
      <Section id="mistake-2" number="3" title="Mistake #2 – Inconsistency in Learning 📚">
        <p>Many beginners make another mistake — <strong>inconsistent learning</strong>. Some beginners don't learn at all. Others spend the entire day only learning without taking action.</p>
        <p className="font-semibold text-gray-900">Both approaches slow down growth.</p>
        
        <p className="mt-4">Learning is important, but execution is equally important. If you only learn and don't apply, you won't see results.</p>

        <p className="font-bold text-secondary-600 text-xl mt-6 mb-3">✅ Solution: Fixed Learning Slot</p>
        <p>Create a fixed learning schedule.</p>

        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 my-4">
          <ul className="space-y-2">
            {[
              'Decide 2–3 hours daily for learning',
              'Keep the same timing every day',
              'Use productive hours for execution',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-secondary-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-2">Follow this rule:</p>
          <p className="text-gray-700">👉 <strong>Productive Time</strong> = Income Activities</p>
          <p className="text-gray-700">👉 <strong>Fixed Time</strong> = Learning</p>
        </div>

        <p>When you separate learning and execution, your productivity increases significantly.</p>
      </Section>

      {/* ─── Section 4: Mistake #3 ─── */}
      <Section id="mistake-3" number="4" title="Mistake #3 – Basics Not Clear 🎯">
        <p>Another major reason beginners don't grow is <strong>lack of clarity</strong>. Many beginners don't know:</p>

        <div className="grid md:grid-cols-2 gap-3 my-4">
          {[
            'When to invite for webinars',
            'When to follow up',
            'Best timing for leads',
            'How to generate leads',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 bg-red-50 rounded-lg p-3 border border-red-200">
              <span className="text-red-500 font-bold">❌</span>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <p>Without clarity, beginners work randomly and get poor results.</p>

        <p className="font-bold text-secondary-600 text-xl mt-6 mb-3">✅ Solution: Lead-Based Strategy</p>
        <p>Follow a <strong>Lead-Based Strategy</strong>.</p>

        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 my-4">
          <p className="font-bold text-gray-900 mb-3">Best follow-up timing:</p>
          <div className="space-y-2">
            <p className="text-gray-700">✔ <strong>Students</strong> → Evening</p>
            <p className="text-gray-700">✔ <strong>Housewives</strong> → Day time</p>
            <p className="text-gray-700">✔ <strong>Working professionals</strong> → Late evening</p>
          </div>
        </div>

        <p>Understanding your audience helps you improve conversions. When you communicate at the right time, your chances of getting responses increase.</p>
      </Section>

      {/* ─── Section 5: Mistake #4 ─── */}
      <Section id="mistake-4" number="5" title="Mistake #4 – No Social Media Presence 📱">
        <p>Affiliate marketing and online earning depend heavily on <strong>social media presence</strong>. If your content is inconsistent, leads will not come.</p>

        <p className="font-semibold text-gray-900 mt-4">Many beginners:</p>
        <div className="space-y-2 my-4">
          {[
            'Don\'t post regularly',
            'Don\'t create reels',
            'Don\'t build personal brand',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-gray-700">
              <span className="text-red-500 font-bold">❌</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p>This slows growth.</p>

        <p className="font-bold text-secondary-600 text-xl mt-6 mb-3">✅ Solution: Weekly Content System</p>
        <p>Create a simple weekly plan:</p>

        <div className="bg-gradient-to-br from-[#E8FAF6] to-[#E0F5F1] rounded-xl p-5 border border-emerald-100 my-4 shadow-sm">
          <ul className="space-y-2">
            {[
              'Decide 2 days for shooting content',
              '1 day for content research',
              'Daily story posting',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-xl">Remember: Consistency is more important than perfection.</p>
          <p className="text-white mt-2 font-medium">Even simple content posted consistently can build your audience.</p>
        </div>
      </Section>

      {/* ─── Section 6: Mistake #5 ─── */}
      <Section id="mistake-5" number="6" title="Mistake #5 – Ignoring Health 💪">
        <p>Many beginners ignore their health while focusing on growth. But <strong>low energy leads to low productivity</strong>.</p>
        
        <p className="mt-4">When your body is tired, your mind becomes slow. This affects creativity and decision-making.</p>

        <p className="font-bold text-secondary-600 text-xl mt-6 mb-3">✅ Daily 30 Minute Rule</p>
        <p>Follow this simple rule:</p>

        <div className="grid md:grid-cols-3 gap-4 my-4">
          {[
            { icon: '🏋️', title: 'Gym' },
            { icon: '🚶', title: 'Walking' },
            { icon: '🧘', title: 'Meditation' },
          ].map(item => (
            <div key={item.title} className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-semibold text-gray-900">{item.title}</p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-900">Spend 30 minutes daily.</p>

        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100 my-4">
          <p className="font-bold text-indigo-700 mb-3">Healthy body leads to:</p>
          <ul className="space-y-2">
            {[
              'Better focus',
              'Better content',
              'Better conversions',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ─── Section 7: Mistake #6 ─── */}
      <Section id="mistake-6" number="7" title="Mistake #6 – Lack of Self Belief 🧠">
        <p>The biggest reason beginners don't grow is <strong>lack of self-belief</strong>. Many beginners doubt themselves and quit early.</p>
        
        <p className="mt-4">Skills can be learned. Strategies can be improved. But <strong>mindset is everything</strong>.</p>

        <p className="font-bold text-secondary-600 text-xl mt-6 mb-3">✅ Self Talk + Gratitude System</p>
        
        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 my-4">
          <p className="font-bold text-gray-900 mb-3">Daily routine:</p>
          <ul className="space-y-2">
            {[
              '10–15 minutes self talk',
              'Speak goals loudly',
              'Visualize success',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-secondary-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 my-4">
          <p className="font-bold text-gray-900 mb-3">Morning gratitude:</p>
          <ul className="space-y-2">
            {[
              'Be thankful for small wins',
              'Celebrate small progress',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-secondary-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>Positive mindset improves consistency and confidence.</p>
      </Section>

      {/* ─── Section 8: 6-Month Growth Rule ─── */}
      <Section id="growth-rule" number="8" title="🔥 6-Month Growth Rule">
        <p className="font-bold text-gray-900 text-xl mb-4">If you follow this for 6 months:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            'Daily To-Do list',
            'Fixed learning time',
            'Execution in productive hours',
            'Weekly content system',
            'Daily 30-minute health',
            'Self talk and gratitude',
          ].map(item => (
            <div key={item} className="flex items-center gap-3 bg-indigo-50/60 rounded-lg p-4 border border-indigo-100">
              <span className="text-indigo-600 text-2xl">✔</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-8 text-center my-6">
          <p className="font-bold text-2xl mb-3">Your growth chances increase significantly.</p>
          <p className="text-white text-lg font-medium">Consistency over time creates results.</p>
        </div>
      </Section>

      {/* ─── Section 9: Final Truth ─── */}
      <Section id="final-truth" number="9" title="Final Truth 💡">
        <div className="bg-indigo-50/60 rounded-xl p-6 border-l-4 border-indigo-400">
          <p className="text-gray-900 text-lg mb-3">You already know most of these things. The difference is:</p>
          <p className="text-gray-700 mb-2">Earlier you only <strong>listened</strong>…</p>
          <p className="text-gray-700 mb-4">Now you will <strong>implement</strong>.</p>
          <p className="font-bold text-indigo-700 text-xl">Success depends on action.</p>
        </div>

        <div className="bg-gradient-to-br from-[#EEF1FF] to-[#F0FDF9] text-white rounded-xl p-8 text-center my-6 shadow-xl shadow-blue-500/20">
          <p className="font-bold text-3xl mb-3">The decision is yours.</p>
          <p className="text-blue-50 text-lg">Will you continue the same way, or will you start the 6-month routine today?</p>
        </div>
      </Section>

      {/* ─── Section 10: CTA ─── */}
      <Section id="cta" number="10" title="🚀 Join Biz-Creator Community">
        <p className="font-bold text-gray-900 text-lg mb-4">Want to grow faster in affiliate marketing?</p>
        <p>Join <strong>Biz-Creator Community</strong> where students learn:</p>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-7 space-y-4 my-6">
          <ul className="space-y-3">
            {[
              'Personal branding (0–10k followers roadmap)',
              'Affiliate marketing strategies',
              'Sales & marketing skills',
              'Content creation system',
              'Live training sessions by Bizgurukul',
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
            Bizgurukul provides <strong>structured learning and live sessions</strong> to help beginners grow step-by-step.
          </p>
          <p className="font-bold text-gray-900 text-lg">Start your growth journey today 🚀</p>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20read%20your%20blog%20on%20Affiliate%20Marketing%20Growth%20and%20want%20to%20know%20more%20about%20the%206-month%20routine%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp to Get Started
          </a>
        </div>
      </Section>
    </>
  );
};

export default AffiliateGrowthContent;
