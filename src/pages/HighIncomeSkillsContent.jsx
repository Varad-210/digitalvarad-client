import { Section } from './BlogPost';

const HighIncomeSkillsContent = () => {
  return (
    <>
      {/* ─── Section 1: Introduction ─── */}
      <Section id="intro" number="1" title="Introduction 🎓">
        <p>You studied for 15–16 years. You worked hard. You completed your degree.</p>
        <p>But when you start searching for jobs, you realize something surprising…</p>
        <p className="font-bold text-gray-900 text-lg">Most starting salaries are between ₹10,000 to ₹20,000 per month.</p>
        <p>At the same time, you see students on Instagram earning ₹20,000, ₹50,000, or even ₹1,00,000 using just their mobile phones.</p>
        <p className="font-semibold text-gray-900">So what's the difference? 🤔</p>
        <p>It's not intelligence. It's not luck. It's <strong>High Income Skills</strong>.</p>
        <p>Today, the world is shifting from degree-based income to skill-based income. Students who learn practical digital skills are earning earlier, working from anywhere, and building financial freedom.</p>
        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200">
          <p className="text-gray-700 mb-2">Platforms like <strong>Bizgurukul</strong> are helping students learn high-income skills through structured learning and live sessions, making it easier for beginners to start their journey.</p>
        </div>
        <p className="font-semibold text-gray-900 mt-4">In this blog, you'll learn:</p>
        <ul className="list-none space-y-2">
          {[
            'What high income skills are',
            'Why students must learn them',
            'Top high income skills in 2026',
            '90-day roadmap to start',
            'How to begin using just your mobile',
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-primary-500 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Section 2: What Are High Income Skills ─── */}
      <Section id="what-are" number="2" title="What Are High Income Skills 💡">
        <p>High income skills are <strong>practical skills that help you earn more money</strong> compared to traditional jobs. These skills are based on real-world demand and can be learned within a short period if practiced consistently.</p>
        <p>Unlike traditional education, high income skills focus on solving real-world problems. Businesses today need digital marketers, content creators, sales professionals, and video editors. When you learn these skills, you can offer services, work as a freelancer, or even build your own business.</p>
        
        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200">
          <p className="font-bold text-primary-600 mb-2">🎯 Key Advantages</p>
          <p className="text-gray-700 text-sm">One of the biggest advantages of high income skills is flexibility. You can work from your college hostel, home, or even while traveling. You don't need expensive equipment or office space. Most skills can be learned using just a smartphone and internet connection.</p>
        </div>

        <p>Another major benefit is <strong>scalability</strong>. In traditional jobs, your salary is fixed. But when you learn high income skills, your income grows as your expertise increases. This creates financial independence for students at an early stage.</p>
        <p>Platforms like Bizgurukul offer structured learning programs where students can learn these skills step-by-step and apply them in real-world scenarios.</p>
      </Section>

      {/* ─── Section 3: Why Students Must Learn ─── */}
      <Section id="why-learn" number="3" title="Why Students Must Learn High Income Skills 🚀">
        <p>The job market today is highly competitive. Every year, millions of students graduate, but job opportunities remain limited. This creates intense competition and lower salary expectations.</p>
        <p>High income skills solve this problem by creating <strong>alternative income opportunities</strong>. Instead of waiting for job offers, students can create their own income sources using digital platforms.</p>
        
        {[
          ['⏰ Time Flexibility', 'Students often have free time between classes, during travel, or in hostel life. Using this time to learn skills can create long-term benefits. Students who start early gain experience before graduation, which gives them a huge advantage.'],
          ['💪 Builds Confidence', 'When students start earning even small amounts, it changes their mindset. They become more independent and motivated to grow further.'],
          ['🎓 Complements Education', 'Students don\'t need to quit their studies. They can learn skills alongside their degree. This combination increases career opportunities and financial security.'],
        ].map(([title, desc]) => (
          <div key={title} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
            <p className="font-bold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </Section>

      {/* ─── Section 4: Top Skills ─── */}
      <Section id="top-skills" number="4" title="Top High Income Skills in 2026 📈">
        <p>Here are some of the most in-demand high income skills students can learn:</p>

        {[
          ['📊 Digital Marketing', 'Digital marketing is one of the fastest-growing skills. Businesses need online presence to grow. Learning SEO, social media marketing, and paid advertising can help students earn through freelancing or business opportunities.'],
          ['🤝 Affiliate Marketing', 'Affiliate marketing allows students to promote products and earn commissions. It is beginner-friendly and can be started using Instagram, WhatsApp, or blogging. Many students start affiliate marketing with platforms like Bizgurukul to earn while learning.'],
          ['🎬 Content Creation', 'Content creation includes Instagram, YouTube, and blogging. If you enjoy sharing ideas, creating content can help you build an audience and earn through brand deals and affiliate marketing.'],
          ['✍️ Copywriting', 'Copywriting is writing content that converts readers into buyers. Businesses pay well for skilled copywriters who create ads, landing pages, and promotional content.'],
          ['🎥 Video Editing', 'With the rise of reels and YouTube, video editing is highly in demand. Students can learn editing using mobile apps and start freelancing.'],
          ['💼 Sales Skills', 'Sales skills help you convert leads into customers. This is one of the highest paying skills in the digital world.'],
        ].map(([title, desc]) => (
          <div key={title} className="border-l-4 border-primary-400 pl-4 py-2">
            <p className="font-bold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </Section>

      {/* ─── Section 5: Why Students Don't Learn ─── */}
      <Section id="why-not" number="5" title="Why Most Students Don't Learn Skills 😟">
        <p>Many students hesitate to learn skills due to common fears. Let's address them:</p>

        <div className="space-y-3">
          {[
            ['❌ Lack of Confidence', 'Students often believe skills require talent, but skills can be learned with practice.'],
            ['⏱️ Time Management', 'Students think they don\'t have enough time. However, even one hour daily can create results. Replacing scrolling time with learning can make a big difference.'],
            ['💸 Investment Concerns', 'Many skills can be learned using free resources. Once students start earning, they can invest in advanced learning.'],
            ['😰 Fear of Failure', 'Skill learning requires patience and consistency. Every expert was once a beginner.'],
            ['👨‍👩‍👧 Limited Family Support', 'Support from family may be limited initially. But once students show results, family support usually increases.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-primary-50 rounded-lg p-4 border border-primary-100">
              <p className="font-bold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Section 6: 90-Day Roadmap ─── */}
      <Section id="roadmap" number="6" title="90-Day Skill Learning Roadmap 📅">
        <p>Here is a simple roadmap students can follow:</p>

        <div className="space-y-4">
          {[
            ['Days 1–15: Choose Skill', 'Select one skill based on your interest. Avoid switching frequently. Focus on one skill.'],
            ['Days 16–45: Learn', 'Spend one hour daily learning basics. Watch tutorials and practice.'],
            ['Days 46–60: Apply', 'Start implementing what you learned. Create content or offer services.'],
            ['Days 61–75: First Income', 'Focus on getting your first earning. This builds confidence.'],
            ['Days 76–90: Scale', 'Improve your strategy and grow your income.'],
          ].map(([phase, desc]) => (
            <div key={phase} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white font-bold flex items-center justify-center text-sm">
                {phase.split(':')[0].replace('Days ', '')}
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">{phase}</p>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 mt-6">
          <p className="font-bold text-lg mb-2">💡 Pro Tip</p>
          <p className="text-primary-100 text-sm">Consistency beats intensity. One hour daily for 90 days is better than 10 hours once a week.</p>
        </div>
      </Section>

      {/* ─── Section 7: Engineering Student Example ─── */}
      <Section id="example" number="7" title="Engineering Student Example 🎓">
        <p className="text-gray-500 italic border-l-4 border-primary-300 pl-4">
          Imagine you're sitting in your hostel room after college. You spend two hours scrolling social media.
        </p>
        <p>Instead, you could use that time to learn a skill.</p>
        <p>You start watching tutorials, create content, and post consistently. After a few weeks, you receive your first inquiry. Then comes your first earning.</p>
        <p className="font-bold text-gray-900 text-lg">This is how many students start. Small daily actions create big results.</p>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200">
          <p className="font-semibold text-gray-900 mb-3">Real Student Journey:</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>📅 <strong>Week 1-2:</strong> Learned basics of affiliate marketing</p>
            <p>📅 <strong>Week 3-4:</strong> Created Instagram profile and posted first content</p>
            <p>📅 <strong>Week 5-6:</strong> Got first 10 followers and 2 inquiries</p>
            <p>📅 <strong>Week 7-8:</strong> Made first ₹800 commission</p>
            <p>📅 <strong>Week 9-12:</strong> Scaled to ₹5,000/month</p>
          </div>
        </div>
      </Section>

      {/* ─── Section 8: Key Takeaways ─── */}
      <Section id="takeaways" number="8" title="Key Takeaways ✅">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'High income skills create financial freedom',
            'Students can start using mobile',
            'One hour daily is enough',
            'Skills create multiple income streams',
            'Start early for long-term success',
            'Consistency is more important than perfection',
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
        <p className="font-bold text-gray-900 text-lg mb-4">Want to learn high income skills step-by-step?</p>
        <p>Join <strong>Biz-Creator Community</strong> where students learn:</p>

        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl p-7 space-y-4 my-6">
          <ul className="space-y-3">
            {[
              'Personal branding (0-10k followers roadmap)',
              'Affiliate marketing skills',
              'Sales & communication skills',
              'Live training sessions by Bizgurukul',
              'Step-by-step learning support',
            ].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-white font-bold text-lg">✔</span>
                <span className="text-primary-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary-50 rounded-xl p-5 border border-primary-200">
          <p className="text-gray-700 mb-4">
            Bizgurukul provides <strong>live sessions</strong> to learn skills, and additional help and guidance are available whenever students feel stuck.
          </p>
          <p className="font-bold text-gray-900 text-lg">Start your journey today and build your financial freedom 🚀</p>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20read%20your%20blog%20on%20High%20Income%20Skills%20and%20want%20to%20know%20more%20about%20learning%20digital%20skills%20and%20earning%20online."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message Me on WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
};

export default HighIncomeSkillsContent;
