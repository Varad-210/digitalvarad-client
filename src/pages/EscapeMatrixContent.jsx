import { Section } from './BlogPost';

const EscapeMatrixContent = () => {
  return (
    <>
      {/* ─── Section 1: Introduction ─── */}
      <Section id="intro" number="1" title="Introduction 🎓">
        <p className="text-gray-500 italic border-l-4 border-primary-300 pl-4">
          You're sitting in a classroom…
        </p>
        <p>The teacher is explaining something… But your mind is somewhere else…</p>
        <p>You open Instagram… You see someone your age earning online…</p>
        <p>And suddenly a thought comes to your mind:</p>
        <p className="font-bold text-gray-900 text-lg">"Study… Degree… Job… Salary… Retirement…"</p>
        <p className="font-semibold text-gray-900">Is this really life? 🤔</p>
        <p>Most students never question this path. Because since childhood, we were told this is the <strong>safe and secure path</strong>.</p>
        <p>But what if this path is not freedom… What if it's actually a <strong>trap</strong>?</p>
        
        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 my-4">
          <p className="text-gray-700 mb-3">Today, the world is changing fast. Students are earning using just their mobile phones. They are building personal brands, learning digital skills, and creating online income streams.</p>
        </div>

        <p className="font-semibold text-gray-900 mt-4">In this blog, you'll learn:</p>
        <ul className="list-none space-y-2">
          {[
            'What the Matrix really is',
            'Why the education system keeps students stuck',
            '7 Truths students are never told',
            'How to escape and build financial freedom',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-primary-500 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Section 2: What is the Matrix ─── */}
      <Section id="what-is-matrix" number="2" title="What is the Matrix? 🔍">
        <p>The Matrix is not just a movie. It's a system that programs your life from childhood.</p>
        <p>You're told:</p>
        <p className="font-bold text-gray-900 text-lg text-center bg-primary-50 rounded-lg p-4 border border-primary-200">
          School → College → Job → Loan → Retirement
        </p>
        <p>This becomes your entire life path.</p>
        
        <p className="font-semibold text-gray-900 mt-4">But here's the problem…</p>
        <p>The system teaches you:</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-secondary-50 rounded-xl p-4 border border-secondary-200">
            <p className="font-bold text-secondary-700 mb-2">✔ What the System Teaches:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• How to memorize</li>
              <li>• How to follow rules</li>
              <li>• How to obey instructions</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="font-bold text-red-700 mb-2">❌ What It Doesn't Teach:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• How to earn money</li>
              <li>• How to build a business</li>
              <li>• How to create income streams</li>
              <li>• How to become financially free</li>
            </ul>
          </div>
        </div>

        <p>This is why many graduates struggle financially even after completing their degrees.</p>
        <p>The Matrix keeps you comfortable but not free. It trains you to think safe, avoid risks, and depend on a salary. Once you understand this, you start seeing new opportunities around you.</p>
        
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 my-4">
          <p className="font-bold text-lg mb-2">💡 Reality Check</p>
          <p className="text-primary-100">Today, your mobile phone alone can help you learn skills, create content, and earn online. The moment you realize this, you start breaking free from the Matrix. 🚀</p>
        </div>
      </Section>

      {/* ─── Section 3: Why Education System Keeps You Trapped ─── */}
      <Section id="why-trapped" number="3" title="Why Education System Keeps You Trapped 🎓">
        <p>The modern education system was designed during the industrial revolution. The goal was simple — create workers who follow instructions.</p>
        <p className="font-semibold text-gray-900">Not entrepreneurs. Not creators. Not financially independent individuals.</p>
        
        <p className="mt-4">This is why the system focuses on:</p>
        
        {[
          ['📝 Exams', 'Testing memory, not practical skills'],
          ['📊 Marks', 'Measuring performance on paper, not real-world ability'],
          ['📚 Theory', 'Teaching concepts without application'],
        ].map(([title, desc]) => (
          <div key={title} className="bg-primary-50 rounded-xl p-4 border border-primary-100 mb-3">
            <p className="font-bold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}

        <p className="font-semibold text-gray-900 mt-4">But ignores:</p>
        
        <div className="space-y-2">
          {[
            'Income skills',
            'Business knowledge',
            'Digital skills',
            'Financial education',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-gray-700">
              <span className="text-red-500 font-bold">❌</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-4">Students spend 15–20 years studying but still don't know how to earn money independently.</p>
        <p>After graduation, many students feel confused. They have degrees but lack practical skills. This leads to job dependency and financial stress.</p>
        
        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 my-4">
          <p className="font-bold text-primary-600 mb-2">💡 The Solution</p>
          <p className="text-gray-700 text-sm">Education is important, but relying only on degrees is not enough today. The best approach is to combine education with high-income skills. When you learn skills alongside your studies, you increase your opportunities and create financial independence early.</p>
        </div>
      </Section>

      {/* ─── Section 4: 7 Truths Students Are Never Told ─── */}
      <Section id="seven-truths" number="4" title="7 Truths Students Are Never Told 💡">
        <p className="font-semibold text-gray-900 mb-4">Here are the truths the system doesn't want you to know:</p>

        <div className="space-y-6">
          {/* Truth 1 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 1 — You Are Trained to Obey</p>
            <p className="text-gray-700">In school, you're taught to raise your hand before speaking. You're trained to follow instructions and avoid questioning authority. This mindset continues in jobs where employees follow orders rather than think independently.</p>
          </div>

          {/* Truth 2 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 2 — You're Working for Someone Else's Dream</p>
            <p className="text-gray-700 mb-2">You wake up early… Go to work… Come home tired… Repeat for years…</p>
            <p className="text-gray-700">This cycle keeps many people stuck without pursuing their own dreams.</p>
          </div>

          {/* Truth 3 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 3 — Marks Don't Equal Money</p>
            <p className="text-gray-700 mb-2">95% marks do not guarantee:</p>
            <div className="space-y-1 ml-4">
              {['Income', 'Skills', 'Freedom'].map(item => (
                <p key={item} className="text-gray-700 flex items-center gap-2">
                  <span className="text-red-500">❌</span> {item}
                </p>
              ))}
            </div>
            <p className="text-gray-700 mt-2 font-semibold">But skills can.</p>
          </div>

          {/* Truth 4 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 4 — Secure Job is a Trap</p>
            <p className="text-gray-700">Security without freedom is like a golden cage. You feel safe but lack independence.</p>
          </div>

          {/* Truth 5 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 5 — Your Phone is Your Biggest Opportunity 📱</p>
            <p className="text-gray-700 mb-2">Most students scroll Instagram daily. But others use the same phone to:</p>
            <div className="bg-secondary-50 rounded-lg p-3 border border-secondary-200 mt-2">
              <ul className="space-y-1">
                {[
                  'Learn skills',
                  'Create content',
                  'Build personal brand',
                  'Earn money',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-secondary-600 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-700 mt-2 font-semibold">Your phone can either distract you or build your future.</p>
          </div>

          {/* Truth 6 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 6 — Time is Your Biggest Asset</p>
            <p className="text-gray-700">The time you spend scrolling could be used to learn a skill that changes your life. One hour daily for 90 days can create a new income stream.</p>
          </div>

          {/* Truth 7 */}
          <div className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 text-lg mb-2">Truth 7 — You Don't Need Permission to Start</p>
            <p className="text-gray-700">You don't need a degree, approval, or perfect conditions. You just need to start. Many successful people started with zero experience and just a mobile phone.</p>
          </div>
        </div>
      </Section>

      {/* ─── Section 5: How to Escape the Matrix ─── */}
      <Section id="escape-plan" number="5" title="How to Escape the Matrix 🚀">
        <p className="font-bold text-gray-900 text-lg mb-4">Here is the 7 Step Escape Plan:</p>

        <div className="space-y-4">
          {[
            ['Step 1 — Question Your Path', 'Ask yourself: Is this the life I want? Am I learning skills for future income? Awareness is the first step to change.'],
            ['Step 2 — Learn High Income Skills', 'Start learning skills like: Affiliate Marketing, Digital Marketing, Content Creation, Sales Skills. These skills create income opportunities.'],
            ['Step 3 — Start Online Income', 'Use platforms like: Instagram, YouTube, Blogging, WhatsApp. Start small and stay consistent.'],
            ['Step 4 — Find Mentorship', 'Learning becomes faster when you have proper guidance and support. Join communities where people are already succeeding.'],
            ['Step 5 — Reduce Mindless Scrolling', 'Replace 1 hour of scrolling with learning. This single change can transform your future.'],
            ['Step 6 — Learn Daily', 'Consistency builds results. Even 30 minutes daily adds up to 180+ hours in a year.'],
            ['Step 7 — Start Before Ready', 'You don\'t need perfection. Start small and improve. Action creates clarity.'],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white font-bold flex items-center justify-center text-sm">
                {title.split(' — ')[0].replace('Step ', '')}
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 mt-6">
          <p className="font-bold text-xl mb-3">🎯 Remember This</p>
          <p className="text-primary-100">The Matrix wants you to stay comfortable. Breaking free requires discomfort, learning, and consistent action. But the freedom on the other side is worth it.</p>
        </div>
      </Section>

      {/* ─── Section 6: Engineering Student Example ─── */}
      <Section id="example" number="6" title="Engineering Student Example 🎓">
        <p className="text-gray-500 italic border-l-4 border-primary-300 pl-4">
          You're waiting for lab viva…
        </p>
        <p>Instead of scrolling Instagram…</p>
        <p>You can:</p>
        
        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 my-4">
          <ul className="space-y-2">
            {[
              'Learn affiliate marketing basics (15 minutes)',
              'Create 1 piece of content (20 minutes)',
              'Build audience by engaging with others (10 minutes)',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-primary-500 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-bold text-gray-900 text-lg">Small steps lead to big results.</p>
        <p>Many students start like this and gradually build their income.</p>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 mt-4">
          <p className="font-semibold text-gray-900 mb-3">Real Timeline:</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>📅 <strong>Week 1-2:</strong> Learn basics, set up profile</p>
            <p>📅 <strong>Week 3-4:</strong> Create content, post consistently</p>
            <p>📅 <strong>Week 5-6:</strong> Get first followers and inquiries</p>
            <p>📅 <strong>Week 7-8:</strong> Make first earning</p>
            <p>📅 <strong>Week 9-12:</strong> Scale and grow income</p>
          </div>
        </div>
      </Section>

      {/* ─── Section 7: Key Takeaways ─── */}
      <Section id="takeaways" number="7" title="Key Takeaways ✅">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Education alone is not enough',
            'Skills create income',
            'Mobile can be earning tool',
            'Start small, stay consistent',
            'Question the default path',
            'Your time is your biggest asset',
          ].map(item => (
            <div key={item} className="flex items-center gap-3 bg-primary-50 rounded-lg p-3 border border-primary-100">
              <span className="text-primary-500 text-xl">✔</span>
              <span className="text-gray-700 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 mt-6 text-center">
          <p className="font-bold text-2xl mb-2">The Choice is Yours</p>
          <p className="text-primary-100">Stay in the Matrix and follow the crowd, or break free and build your own path.</p>
        </div>
      </Section>

      {/* ─── Section 8: CTA ─── */}
      <Section id="cta" number="8" title="🚀 Join Biz-Creator Community">
        <p className="font-bold text-gray-900 text-lg mb-4">Want to escape the Matrix and start earning?</p>
        <p>Join <strong>Biz-Creator Community</strong> where students learn:</p>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-7 space-y-4 my-6">
          <ul className="space-y-3">
            {[
              'Personal branding (0-10k followers roadmap)',
              'Affiliate marketing skills',
              'Sales and communication skills',
              'Live training sessions by Bizgurukul',
              'High-income digital skills',
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-white font-bold text-lg">✔</span>
                <span className="text-primary-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200 mb-6">
          <p className="text-gray-700 mb-4">
            Bizgurukul provides <strong>live training sessions</strong>, and whenever you get stuck, additional help and guidance are available to support your journey.
          </p>
          <p className="font-bold text-gray-900 text-lg">Start learning, start building, and start earning from your mobile 📱</p>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20read%20your%20blog%20on%20Escape%20the%20Matrix%20and%20want%20to%20know%20more%20about%20breaking%20free%20and%20building%20financial%20freedom."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp to Get Started 🚀
          </a>
        </div>

        <blockquote className="border-l-4 border-primary-400 pl-4 italic text-gray-600 text-lg text-center mt-8">
          "The Matrix is everywhere. It's the world that has been pulled over your eyes to blind you from the truth." — But now you know the truth. Time to act.
        </blockquote>
      </Section>
    </>
  );
};

export default EscapeMatrixContent;
