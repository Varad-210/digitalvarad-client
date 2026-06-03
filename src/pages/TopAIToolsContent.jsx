import { Section } from './BlogPost';
import { Link } from 'react-router-dom';
import { blogPosts } from './Blogs';

const TopAIToolsContent = () => {
  return (
    <>
      <Section id="intro" number="1" title="Introduction 🚀">
        <p>AI is changing how businesses are built.</p>
        <p>Earlier, starting an online business required:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Team</li>
          <li>Investment</li>
          <li>Technical skills</li>
        </ul>
        <p>But today… You can build a full online business using AI tools.</p>
        <p className="font-semibold mt-4">Students are using AI to:</p>
        <ul className="list-none space-y-1 mb-4">
          <li>✔ Start affiliate marketing</li>
          <li>✔ Build personal brand</li>
          <li>✔ Create content</li>
          <li>✔ Build online business</li>
          <li>✔ Earn from mobile</li>
        </ul>
        <p>The best part? Most AI tools are free or beginner-friendly.</p>
        <p className="font-semibold mt-4">In this blog, you'll discover:</p>
        <ul className="list-none space-y-1 mb-4">
          <li>✔ Top 50 AI tools</li>
          <li>✔ Best AI tools for beginners</li>
          <li>✔ AI tools for business growth</li>
          <li>✔ Recommended AI tools</li>
        </ul>
        <p>This list includes design, video, content, automation, and business AI tools.</p>
      </Section>

      <Section id="beginners" number="2" title="🏆 Best AI Tools for Beginners (Top Recommendations)">
        <p>If you're just starting, use these first:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 mt-2">
          <li><strong>ChatGPT</strong> — Content creation & ideas</li>
          <li><strong>Canva AI</strong> — Design & posts</li>
          <li><strong>Pictory</strong> — Video creation</li>
          <li><strong>Notion AI</strong> — Planning & productivity</li>
          <li><strong>Grammarly</strong> — Writing improvement</li>
          <li><strong>Midjourney</strong> — AI images</li>
          <li><strong>Gamma AI</strong> — Presentations</li>
          <li><strong>Descript</strong> — Video editing</li>
          <li><strong>ElevenLabs</strong> — AI voice</li>
          <li><strong>Perplexity AI</strong> — Research</li>
        </ul>
        <p>These tools help beginners build online business faster.</p>
      </Section>

      <Section id="design" number="3" title="🎨 AI Tools for Design & Visual Content">
        <p>These tools help create graphics, thumbnails, posts, and branding.</p>
        <ul className="list-decimal pl-5 space-y-2 mb-4 mt-2">
          <li><strong>Midjourney:</strong> Creates stunning images using text prompts. Perfect for thumbnails, branding, and content creation.</li>
          <li><strong>Supercolorpalette:</strong> Generates professional color palettes for branding and design.</li>
          <li><strong>Brandbird:</strong> Create professional screenshots and marketing graphics.</li>
          <li><strong>Itemes Design:</strong> Generate icons and UI design assets.</li>
          <li><strong>Recraft AI:</strong> Advanced AI image creation and editing.</li>
          <li><strong>Canva AI:</strong> One of the best AI tools for beginners. Create reels, posts, thumbnails, and presentations.</li>
          <li><strong>Adobe Firefly:</strong> Professional AI image generator from Adobe.</li>
          <li><strong>Scribble Diffusion:</strong> Turn rough sketches into professional images.</li>
          <li><strong>Remove.bg:</strong> Remove backgrounds from images instantly.</li>
        </ul>
      </Section>

      <Section id="video" number="4" title="🎬 AI Tools for Video Creation">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>10. Vizard AI:</strong> Convert long videos into short reels.</li>
          <li><strong>11. Runway ML:</strong> Advanced AI video editing tool.</li>
          <li><strong>12. MagicHour AI:</strong> Automatically create professional videos.</li>
          <li><strong>13. Descript:</strong> AI editing tool with voice cloning and transcription.</li>
          <li><strong>14. Synthesia:</strong> Create AI avatar videos.</li>
          <li><strong>15. Synthesis:</strong> Create AI avatars that look like you.</li>
          <li><strong>16. Lumen5:</strong> Convert blog content into videos.</li>
          <li><strong>17. Pictory:</strong> Turn long content into short videos.</li>
        </ul>
      </Section>

      <Section id="writing" number="5" title="✍️ AI Tools for Writing & Content">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>18. ChatGPT:</strong> Best AI tool for content creation and business ideas.</li>
          <li><strong>19. Jasper AI:</strong> AI marketing copy generator.</li>
          <li><strong>20. Grammarly:</strong> Improve writing quality.</li>
          <li><strong>21. Copy AI:</strong> Create ads and captions.</li>
          <li><strong>22. Wordtune:</strong> Rewrite content.</li>
          <li><strong>23. Notion AI:</strong> Organize business planning.</li>
          <li><strong>24. GPTZero:</strong> Detect AI content.</li>
        </ul>
      </Section>

      <Section id="audio" number="6" title="🔊 AI Tools for Audio & Voice">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>25. ElevenLabs:</strong> AI voice generator.</li>
          <li><strong>26. Krisp:</strong> Remove background noise.</li>
          <li><strong>27. Speechify:</strong> Convert text to voice.</li>
          <li><strong>28. Soundraw:</strong> AI music generator.</li>
        </ul>
      </Section>

      <Section id="presentations" number="7" title="📊 AI Tools for Presentations">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>29. Napkin AI:</strong> Create diagrams and visuals.</li>
          <li><strong>30. Tome AI:</strong> Create presentations using AI.</li>
          <li><strong>31. Beautiful AI:</strong> Professional presentations.</li>
          <li><strong>32. Gamma AI:</strong> AI presentation builder.</li>
        </ul>
      </Section>

      <Section id="development" number="8" title="💻 AI Tools for Development & Automation">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>33. Lovable AI:</strong> Build apps using AI.</li>
          <li><strong>34. Blackbox AI:</strong> AI coding assistant.</li>
          <li><strong>35. Replit Ghostwriter:</strong> AI coding helper.</li>
          <li><strong>36. Hugging Face:</strong> AI model library.</li>
          <li><strong>37. N8N:</strong> Automation workflows.</li>
        </ul>
      </Section>

      <Section id="research" number="9" title="🔍 AI Tools for Research">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>38. Perplexity AI:</strong> AI search engine.</li>
          <li><strong>39. Problemhunt:</strong> Find business ideas.</li>
        </ul>
      </Section>

      <Section id="meetings" number="10" title="🎙️ AI Tools for Meetings">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>40. Otter AI:</strong> Meeting transcription.</li>
          <li><strong>41. Fireflies AI:</strong> Meeting recording and summaries.</li>
        </ul>
      </Section>

      <Section id="image-3d" number="11" title="🖼️ AI Tools for Image & 3D">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>42. Lupa AI:</strong> Image upscaler.</li>
          <li><strong>43. Hitem3D:</strong> Create 3D assets.</li>
        </ul>
      </Section>

      <Section id="productivity" number="12" title="⚙️ Productivity AI Tools">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>44. TinyWow:</strong> Free editing tools.</li>
          <li><strong>45. Flipbook:</strong> GIF creator.</li>
          <li><strong>46. Transfer.zip:</strong> File sharing tool.</li>
          <li><strong>47. AI Coupon Finder:</strong> Find discount codes.</li>
          <li><strong>48. Florafuana:</strong> Multiple AI workspace.</li>
        </ul>
      </Section>

      <Section id="community" number="13" title="🌐 Community & Resources">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>49. Path to Design:</strong> Design learning community.</li>
        </ul>
      </Section>

      <Section id="support" number="14" title="🎯 Customer Support">
        <ul className="list-none space-y-2 mb-4">
          <li><strong>50. Beautiful AI:</strong> AI presentation tool for business use. (Note: Listed above under Presentations as well)</li>
        </ul>
      </Section>

      <Section id="recommended" number="15" title="🔥 Best AI Tools (Most Recommended)">
        <p className="font-semibold mb-2">Top 10 Recommended:</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {['ChatGPT', 'Canva AI', 'Pictory', 'Gamma AI', 'Notion AI', 'Grammarly', 'Midjourney', 'ElevenLabs', 'Perplexity AI', 'Descript'].map(tool => (
            <li key={tool} className="bg-indigo-50/60 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">✔ {tool}</li>
          ))}
        </ul>
        <p className="font-semibold mb-2 mt-4">These tools help build:</p>
        <ul className="list-none space-y-1 mb-4 text-indigo-700 font-medium">
          <li>✔ Personal brand</li>
          <li>✔ Affiliate marketing</li>
          <li>✔ Online business</li>
          <li>✔ Content creation</li>
        </ul>
      </Section>

      <Section id="takeaways" number="16" title="✅ Key Takeaways">
        <ul className="list-none space-y-2 mb-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <li className="flex items-center gap-2"><span className="text-xl">✔</span> AI helps build business faster</li>
          <li className="flex items-center gap-2"><span className="text-xl">✔</span> Most tools are beginner-friendly</li>
          <li className="flex items-center gap-2"><span className="text-xl">✔</span> Use 3–5 tools initially</li>
          <li className="flex items-center gap-2"><span className="text-xl">✔</span> Focus on consistency</li>
        </ul>
      </Section>

      <Section id="cta" number="17" title="🚀 — Join Biz-Creator Community">
        <div className="bg-gradient-to-br from-[#EEF1FF] to-[#F0FDF9] rounded-2xl p-8 text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Want to learn AI tools for business?</h3>
          <p className="mb-6 opacity-90 text-lg">Join Biz-Creator Community:</p>
          <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
              Learn AI tools
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
              Personal branding
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
              Affiliate marketing
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
              Sales skills
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-1 rounded-full"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
              Live training by Bizgurukul
            </li>
          </ul>
          <a href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20want%20to%20learn%20how%20to%20build%20a%20business%20using%20AI%20tools!" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-700 font-bold py-3 px-8 rounded-xl shadow-md hover:bg-gray-50 transition-colors">
            Start building your AI-powered business today 🚀
          </a>
        </div>
      </Section>

      {/* ─── Section 18: Related Blog Posts (Internal Links) ─── */}
      <Section id="related-blogs" number="18" title="📚 Continue Your Learning Journey">
        <p className="mb-6">Explore these related articles to deepen your knowledge:</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts
            .filter(post => post.id !== 'top-50-ai-tools' && ['freelancing-roadmap', 'high-income-skills', 'sales-and-marketing', 'affiliate-marketing-growth'].includes(post.id))
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

export default TopAIToolsContent;
