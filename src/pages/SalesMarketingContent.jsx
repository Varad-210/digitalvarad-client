import { Section } from './BlogPost';

const SalesMarketingContent = () => {
  return (
    <>
      {/* ─── Section 1: Introduction ─── */}
      <Section id="intro" number="1" title="Introduction 🚀">
        <p>You're posting content every day… You're sharing affiliate links… You're trying to earn online…</p>
        <p className="font-bold text-gray-900 text-lg">But still… no sales. 😓</p>
        <p>This is one of the most common problems students face when starting online earning or affiliate marketing.</p>
        
        <p className="mt-4">You might think:</p>
        <div className="bg-primary-50 rounded-xl p-4 border border-primary-200 my-4">
          <ul className="space-y-2 text-gray-700">
            <li>"I need more followers"</li>
            <li>"I need better content"</li>
            <li>"Maybe this doesn't work"</li>
          </ul>
        </div>

        <p className="font-semibold text-gray-900 text-lg">But the real problem is simple:</p>
        <p className="font-bold text-primary-600 text-xl">You don't understand Sales and Marketing.</p>

        <p className="mt-4">Many beginners focus only on posting content. Others directly try to sell without building trust. But successful online earners understand both sales and marketing skills.</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="font-bold text-blue-700 mb-2">📢 Marketing</p>
            <p className="text-sm text-gray-700">Helps people know and trust you</p>
          </div>
          <div className="bg-[#E8FAF6] rounded-xl p-4 border border-[#C5F1E8]">
            <p className="font-bold text-secondary-700 mb-2">💰 Sales</p>
            <p className="text-sm text-gray-700">Helps people buy from you</p>
          </div>
        </div>

        <p>When you combine both skills, your online income starts growing consistently.</p>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 my-4">
          <p className="text-gray-700">Today, platforms like <strong>Bizgurukul</strong> teach digital marketing, sales skills, content creation, and personal branding through structured learning and live sessions. These skills help students earn online even with 0 experience and just a mobile phone.</p>
        </div>

        <p className="font-semibold text-gray-900 mt-4">In this blog, you'll learn:</p>
        <ul className="list-none space-y-2">
          {[
            'What is marketing',
            'What is sales',
            'Sales vs marketing explained',
            'Student-friendly strategies',
            'Daily action plan to start earning',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-primary-500 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Section 2: What is Marketing ─── */}
      <Section id="what-marketing" number="2" title="What is Marketing? 📢">
        <p>Marketing is the process of making people <strong>aware</strong> of your content, product, or service. It helps you build trust before you sell anything.</p>
        <p>Marketing is not directly selling. Instead, it focuses on educating, helping, and building relationships with your audience.</p>

        <p className="font-semibold text-gray-900 mt-4">Examples of Marketing:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
          {[
            '📱 Instagram Reels',
            '🎥 YouTube Videos',
            '📝 Blog Posts',
            '💬 WhatsApp Status',
            '📚 Educational Content',
            '🎯 Social Media Posts',
          ].map(item => (
            <div key={item} className="bg-primary-50 rounded-lg p-3 border border-primary-100 text-center text-sm font-medium text-gray-700">
              {item}
            </div>
          ))}
        </div>

        <p>When you consistently post valuable content, people start trusting you. They begin following your page, engaging with your content, and asking questions.</p>

        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 my-4">
          <p className="font-bold text-blue-700 mb-3">For example, if you post:</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• "How students can earn online"</li>
            <li>• "Affiliate marketing for beginners"</li>
            <li>• "How to build personal brand"</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">People start seeing you as someone who provides value.</p>
        </div>

        <p className="font-semibold text-gray-900">This is called trust building.</p>

        <p className="mt-4">Marketing helps you:</p>
        <div className="grid md:grid-cols-2 gap-3 my-4">
          {[
            'Build audience',
            'Build trust',
            'Build authority',
            'Generate leads',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 bg-primary-50 rounded-lg p-3 border border-primary-100">
              <span className="text-primary-500 font-bold">✔</span>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-xl">Marketing = Awareness + Trust + Audience</p>
          <p className="text-[#D6D7F0] mt-2">Without marketing, nobody knows you.</p>
        </div>
      </Section>

      {/* ─── Section 3: What is Sales ─── */}
      <Section id="what-sales" number="3" title="What is Sales? 💰">
        <p>Sales is the process of <strong>converting interested people into buyers or customers</strong>.</p>
        <p>Once people trust you and show interest, sales begins.</p>

        <p className="font-semibold text-gray-900 mt-4">Sales usually happens through conversations like:</p>
        <div className="grid grid-cols-2 gap-3 my-4">
          {[
            '💬 Instagram DM',
            '📱 WhatsApp Chat',
            '✈️ Telegram Message',
            '📞 Phone Call',
          ].map(item => (
            <div key={item} className="bg-[#E8FAF6] rounded-lg p-3 border border-[#C5F1E8] text-center text-sm font-medium text-gray-700">
              {item}
            </div>
          ))}
        </div>

        <p>Sales is about understanding someone's problem and offering the right solution.</p>

        <div className="bg-[#E8FAF6] rounded-xl p-5 border border-[#C5F1E8] my-4">
          <p className="font-bold text-secondary-700 mb-3">For example:</p>
          <p className="text-sm text-gray-700 mb-2">Someone messages you: <em>"How can I earn online?"</em></p>
          <p className="font-semibold text-gray-900 mb-2">You reply:</p>
          <ol className="space-y-2 text-sm text-gray-700 ml-4">
            <li>1. Ask about their goals</li>
            <li>2. Explain options</li>
            <li>3. Solve doubts</li>
            <li>4. Guide them</li>
          </ol>
          <p className="text-sm text-gray-700 mt-3 font-semibold">When they decide to join or purchase, that's sales.</p>
        </div>

        <p className="font-semibold text-gray-900 mt-4">Sales includes:</p>
        <div className="grid md:grid-cols-2 gap-3 my-4">
          {[
            'Answering questions',
            'Solving doubts',
            'Building confidence',
            'Closing deals',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 bg-[#E8FAF6] rounded-lg p-3 border border-[#C5F1E8]">
              <span className="text-secondary-600 font-bold">✔</span>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-4">Sales helps you:</p>
        <div className="space-y-2">
          {[
            'Earn income',
            'Convert leads',
            'Build customers',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-gray-700">
              <span className="text-secondary-600 font-bold">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-6 text-center mt-4">
          <p className="font-bold text-xl">Sales = Conversion + Income</p>
        </div>
      </Section>

      {/* ─── Section 4: Difference Between Sales and Marketing ─── */}
      <Section id="difference" number="4" title="Difference Between Sales and Marketing 🔍">
        <p>Many beginners confuse sales and marketing. But both serve different purposes.</p>
        
        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 my-4 text-center">
          <p className="font-bold text-gray-900 text-lg">Marketing helps people discover you.</p>
          <p className="font-bold text-gray-900 text-lg">Sales helps people buy from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <p className="font-bold text-blue-700 text-lg mb-3">📢 Marketing Includes:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Posting reels</li>
              <li>✔ Creating content</li>
              <li>✔ Sharing tips</li>
              <li>✔ Building audience</li>
            </ul>
          </div>

          <div className="bg-[#E8FAF6] rounded-xl p-5 border border-[#C5F1E8]">
            <p className="font-bold text-secondary-700 text-lg mb-3">💰 Sales Includes:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ DM conversations</li>
              <li>✔ WhatsApp chats</li>
              <li>✔ Closing deals</li>
              <li>✔ Handling objections</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 my-6">
          <div className="border-l-4 border-red-400 pl-4 py-2 bg-red-50 rounded-r-lg">
            <p className="font-bold text-gray-900 mb-1">If you only do marketing:</p>
            <p className="text-gray-700 text-sm">People follow you… But they don't buy.</p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2 bg-red-50 rounded-r-lg">
            <p className="font-bold text-gray-900 mb-1">If you only do sales:</p>
            <p className="text-gray-700 text-sm">People don't trust you… And don't buy.</p>
          </div>

          <div className="border-l-4 border-secondary-400 pl-4 py-2 bg-[#E8FAF6] rounded-r-lg">
            <p className="font-bold text-gray-900 mb-1">✅ You need both.</p>
            <p className="text-gray-700 text-sm">Successful online earners combine marketing to attract audience and sales to convert audience.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-xl mb-2">The Winning Combination</p>
          <p className="text-[#D6D7F0]">Marketing to attract audience + Sales to convert audience = Consistent online income</p>
        </div>
      </Section>

      {/* ─── Section 5: Student Strategies ─── */}
      <Section id="strategies" number="5" title="Student Strategies 🎯">
        <p>Students can follow simple strategies to combine sales and marketing.</p>
        <p className="font-semibold text-gray-900 text-lg mt-4">One of the best strategies is:</p>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 my-6">
          <p className="font-bold text-2xl text-center mb-4">The 80/20 Rule</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-bold text-xl mb-2">80% Value Content</p>
              <ul className="space-y-1 text-sm text-[#D6D7F0]">
                <li>• Educational posts</li>
                <li>• Tips & tricks</li>
                <li>• Motivational content</li>
                <li>• Personal stories</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-bold text-xl mb-2">20% Promotion Content</p>
              <ul className="space-y-1 text-sm text-[#D6D7F0]">
                <li>• Affiliate offers</li>
                <li>• Course recommendations</li>
                <li>• Business opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <p>When you provide value first, people trust you. Once trust builds, conversions become easier.</p>

        <p className="font-semibold text-gray-900 text-lg mt-6">Another important strategy is consistency.</p>
        <p className="mb-4">Post regularly:</p>
        <div className="space-y-2">
          {[
            '1 Reel daily',
            '3–5 Stories',
            'Reply to DMs',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 bg-primary-50 rounded-lg p-3 border border-primary-100">
              <span className="text-primary-500 font-bold">✔</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 mt-4">
          <p className="font-bold text-primary-600 text-center">Consistency builds trust and authority.</p>
        </div>
      </Section>

      {/* ─── Section 6: Daily 60 Minute System ─── */}
      <Section id="daily-system" number="6" title="Daily 60 Minute System ⏰">
        <p>Students don't need full-time hours. Even 60 minutes daily is enough.</p>

        <div className="space-y-4 my-6">
          {[
            ['Morning (10 minutes)', '🌅', 'Post 1 Instagram Story\nShare learning or motivation'],
            ['Afternoon (20 minutes)', '☀️', 'Create 1 Reel\nShare value content'],
            ['Evening (20 minutes)', '🌆', 'Reply to DMs\nAnswer questions'],
            ['Night (10 minutes)', '🌙', 'Plan next day\'s content'],
          ].map(([time, emoji, tasks]) => (
            <div key={time} className="flex gap-4 items-start bg-primary-50 rounded-xl p-4 border border-primary-200">
              <div className="flex-shrink-0 text-4xl">{emoji}</div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-2">{time}</p>
                <p className="text-gray-700 text-sm whitespace-pre-line">{tasks}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-xl">This simple routine can help you grow consistently.</p>
        </div>
      </Section>

      {/* ─── Section 7: Engineering Student Example ─── */}
      <Section id="example" number="7" title="Engineering Student Example 🎓">
        <p className="text-gray-500 italic border-l-4 border-primary-300 pl-4">
          You're waiting for lecture…
        </p>
        <p>Instead of scrolling Instagram…</p>
        <p>You can:</p>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 my-4">
          <ul className="space-y-2">
            {[
              'Create 1 reel',
              'Reply to 2 DMs',
              'Learn 1 concept',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-primary-500 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-bold text-gray-900 text-lg">This is how many students start.</p>
        <p className="font-semibold text-primary-600 text-xl text-center my-4">Small daily actions → Big results.</p>
        <p>Many students begin with 0 followers and grow gradually.</p>
      </Section>

      {/* ─── Section 8: Key Takeaways ─── */}
      <Section id="takeaways" number="8" title="Key Takeaways ✅">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Marketing builds trust',
            'Sales creates income',
            'Combine both skills',
            'Consistency is key',
            'Start small and grow',
            '60 minutes daily is enough',
          ].map(item => (
            <div key={item} className="flex items-center gap-3 bg-primary-50 rounded-lg p-3 border border-primary-100">
              <span className="text-primary-500 text-xl">✔</span>
              <span className="text-gray-700 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 9: CTA ─── */}
      <Section id="cta" number="9" title="🚀 Join Biz-Creator Community">
        <p className="font-bold text-gray-900 text-lg mb-4">Want to learn Sales & Marketing step-by-step?</p>
        <p>Join <strong>Biz-Creator Community</strong> where students learn:</p>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-7 space-y-4 my-6">
          <ul className="space-y-3">
            {[
              'Personal branding (0–10k followers roadmap)',
              'Sales & communication skills',
              'Affiliate marketing strategies',
              'Digital marketing fundamentals',
              'Live training sessions by Bizgurukul',
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-white font-bold text-lg">✔</span>
                <span className="text-[#D6D7F0]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 mb-6">
          <p className="text-gray-700 mb-4">
            Bizgurukul provides <strong>structured learning, practical skills, and live sessions</strong> to help students develop sales and marketing skills and build online income.
          </p>
          <p className="text-gray-700">If you get stuck anywhere, guidance and support are available to help you move forward.</p>
          <p className="font-bold text-gray-900 text-lg mt-4">Start building your online income today 🚀</p>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20read%20your%20blog%20on%20Sales%20and%20Marketing%20and%20want%20to%20know%20more%20about%20growing%20my%20online%20income."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E8FAF6]0 hover:bg-[#179B7E] text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition duration-300 hover:scale-105"
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

export default SalesMarketingContent;
