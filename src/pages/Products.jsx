import { useState } from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Marketing Mastery",
      subtitle: "MASTERY",
      description: "Master digital marketing strategies that drive growth, generate leads, and build sustainable online businesses.",
      price: "₹1,499",
      originalPrice: "₹2,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775747208/marketing_bundle_mgb5v8.webp",
      stats: "1 Course | 15+ Hours",
      features: [
        "Digital Marketing Fundamentals - Build strong foundation",
        "Lead Generation Strategies - Attract qualified prospects",
        "Social Media Marketing - Grow across all platforms",
        "Sales Funnel Creation - Convert visitors to customers",
        "Customer Acquisition - Scale your business systematically"
      ],
      coursesIncluded: [
        {
          name: "Complete Digital Marketing",
          description: "Master the complete digital marketing ecosystem. Learn SEO, content marketing, email marketing, social media strategy, analytics, and how to create integrated campaigns that drive real business results."
        }
      ],
      outcome: "Build comprehensive digital marketing skills, generate consistent leads, create effective sales funnels, master customer acquisition strategies, and grow your online presence profitably.",
      affiliateLink: "https://www.bizgurukul.com/Biz/BundlePage/BrandingMastery.aspx?id=oYPViZV/GDw=&ref=tUq4wa7c8QNxtwMnsNUehA==&user_id=QRtS71KW9ac=&lid=07Ms7aAcmyFySVTBk0HUxBI1qWaeC24r"
    },
    {
      id: 2,
      title: "Branding Mastery",
      subtitle: "MASTERY",
      description: "Build your personal brand and establish a powerful digital presence that attracts opportunities and opens doors.",
      price: "₹3,499",
      originalPrice: "₹6,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775747208/branding_bundle_lcd6gp.webp",
      stats: "5 Courses | 67+ Hours",
      features: [
        "Personality Development - Build confidence and professional presence",
        "Video Superstar - Master video content creation",
        "Instagram Masterminds - Grow from zero to engaged audience",
        "Spoken English Mastery - Communicate with clarity and impact",
        "Personal Branding Strategy - Stand out in your industry"
      ],
      coursesIncluded: [
        {
          name: "Personality Development",
          description: "Transform your mindset and build unshakeable confidence. Master communication skills, develop a winning attitude, and create a magnetic professional personality that commands respect and attracts success."
        },
        {
          name: "Video Superstar",
          description: "Overcome camera shyness and create captivating videos. Learn storytelling techniques, video structure, audience psychology, and content strategies that keep viewers engaged and coming back for more."
        },
        {
          name: "Basic Instagram Masterminds",
          description: "Build your Instagram empire from scratch. Master profile optimization, content calendars, hashtag strategies, and proven tactics to grow authentic followers and drive meaningful engagement."
        },
        {
          name: "Spoken English Mastery",
          description: "Speak English with confidence and fluency. Expand your vocabulary, master grammar naturally, and develop the speaking skills that accelerate your professional growth and global opportunities."
        }
      ],
      outcome: "Build a powerful personal brand, master communication across all platforms, grow your social media presence organically, and create content that resonates with your target audience.",
      affiliateLink: "https://www.bizgurukul.com/Signup.aspx?id=oYPViZV/GDw=&ref=tUq4wa7c8QNxtwMnsNUehA==&user_id=QRtS71KW9ac=&lid=hrCtjO6zJKRal/c78Yl9Xp6MMl7BxTGn"
    },
    {
      id: 3,
      title: "Traffic Mastery",
      subtitle: "MASTERY",
      description: "Master the art of driving targeted traffic and converting visitors into customers using proven digital marketing strategies.",
      price: "₹8,999",
      originalPrice: "₹17,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775747208/traffic_bundle_nx9oj2.webp",
      stats: "5 Courses | 117+ Hours",
      features: [
        "Advanced Instagram Growth - Scale your presence strategically",
        "Facebook Ads Mastery - Create profitable ad campaigns",
        "YouTube Growth - Build and monetize your channel",
        "Google Ads Expertise - Drive targeted traffic that converts",
        "Excel for Marketing - Analyze data and optimize ROI"
      ],
      coursesIncluded: [
        {
          name: "Intermediate Instagram Mastermind",
          description: "Take your Instagram to the next level with advanced growth hacking techniques, viral content strategies, influencer collaboration tactics, and monetization methods that turn followers into revenue."
        },
        {
          name: "Facebook Ads Mastermind",
          description: "Create high-converting Facebook ad campaigns that generate leads and sales. Master audience targeting, ad creative psychology, budget optimization, and scaling strategies for maximum ROI."
        },
        {
          name: "YouTube Mastermind",
          description: "Build a thriving YouTube channel from scratch. Learn video SEO, thumbnail psychology, content planning, audience retention strategies, and multiple monetization methods beyond AdSense."
        },
        {
          name: "Google Ads Mastery",
          description: "Dominate Google search with profitable ad campaigns. Master keyword research, ad copywriting, quality score optimization, and conversion tracking to drive qualified traffic at scale."
        },
        {
          name: "Excel Mastery",
          description: "Transform raw data into actionable insights. Learn advanced formulas, pivot tables, data visualization, and reporting techniques that help you make data-driven marketing decisions."
        }
      ],
      outcome: "Drive consistent, targeted traffic to your business, master paid advertising platforms, optimize campaigns for maximum ROI, and scale your customer acquisition systematically.",
      affiliateLink: "https://www.bizgurukul.com/Signup.aspx?id=lPC2QdX4/P0=&ref=tUq4wa7c8QNxtwMnsNUehA==&user_id=QRtS71KW9ac=&lid=07Ms7aAcmyFwqcfwtfVdCU5foj1ZIG4v"
    },
    {
      id: 4,
      title: "Influence Mastery",
      subtitle: "MASTERY",
      description: "Build authority, influence, and thought leadership in your industry through powerful communication and content.",
      price: "₹12,999",
      originalPrice: "₹25,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775747208/influence_bundle_lzyaj9.webp",
      stats: "6 Courses | 171+ Hours",
      features: [
        "Public Speaking - Command any stage with confidence",
        "Persuasive Copywriting - Influence through written word",
        "Authority Content - Build thought leadership",
        "Podcast Platform - Amplify your voice and reach",
        "Sales Communication - Influence and close deals",
        "Author Success - Write and publish your book"
      ],
      coursesIncluded: [
        {
          name: "Public Speaking",
          description: "Overcome stage fright and become a captivating speaker. Master presentation skills, storytelling, audience engagement, body language, and techniques to deliver memorable talks that inspire action."
        },
        {
          name: "Copywriting Mastermind",
          description: "Influence and persuade through powerful writing. Learn psychological triggers, storytelling frameworks, and proven copywriting formulas that move people to take action."
        },
        {
          name: "Content Writing",
          description: "Establish authority through strategic content. Master blogging, article writing, SEO content, and thought leadership pieces that position you as an industry expert."
        },
        {
          name: "Podcast Mastery",
          description: "Build your audio platform and reach thousands. Learn podcast production, guest booking, interview techniques, and strategies to grow and monetize your show."
        },
        {
          name: "Sales Mastery",
          description: "Influence buying decisions and close high-value deals. Master consultative selling, negotiation tactics, objection handling, and relationship-building that creates loyal clients."
        },
        {
          name: "Become Best Selling Author",
          description: "Write, publish, and market your book successfully. Learn book writing strategies, self-publishing, Amazon optimization, and book marketing tactics that create bestsellers."
        }
      ],
      outcome: "Build massive influence and authority, master public speaking and communication, create content that positions you as a thought leader, and monetize your expertise through multiple channels.",
      affiliateLink: "https://www.bizgurukul.com/Signup.aspx?id=aBdsUosgN7I=&ref=tUq4wa7c8QNxtwMnsNUehA==&user_id=QRtS71KW9ac=&lid=07Ms7aAcmyFwqcfwtfVdCZ9IB175jy6q"
    },
    {
      id: 5,
      title: "Finance Mastery",
      subtitle: "MASTERY",
      description: "Build wealth and achieve financial freedom through smart investing, trading strategies, and multiple income streams.",
      price: "₹14,999",
      originalPrice: "₹29,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775747208/finance_bundle_aymvxs.webp",
      stats: "6 Courses | 200+ Hours",
      features: [
        "Stock Market Fundamentals - Start investing with confidence",
        "Advanced Trading Strategies - Master technical analysis",
        "Copywriting Skills - Write persuasive sales content",
        "Content Writing - Build authority through writing",
        "Podcast Creation - Launch your audio platform",
        "Sales Mastery - Close deals and negotiate effectively"
      ],
      coursesIncluded: [
        {
          name: "Stock Market Mastery (Beginner)",
          description: "Start your investing journey with confidence. Understand market fundamentals, stock selection criteria, risk management, portfolio building, and long-term wealth creation strategies."
        },
        {
          name: "Stock Market Mastery (Advanced)",
          description: "Master advanced trading techniques including technical analysis, chart patterns, options trading, futures, and day trading strategies used by professional traders."
        },
        {
          name: "Copywriting Mastermind",
          description: "Write words that sell. Master persuasive writing techniques, emotional triggers, sales psychology, and proven copywriting formulas that convert readers into buyers."
        },
        {
          name: "Content Writing",
          description: "Build authority and attract clients through powerful content. Learn SEO writing, blogging strategies, storytelling, and how to create content that ranks and converts."
        },
        {
          name: "Podcast Mastery",
          description: "Launch and grow a successful podcast. Learn equipment setup, content planning, interview techniques, audience building, and podcast monetization strategies."
        },
        {
          name: "Sales Mastery",
          description: "Master the art of selling and negotiation. Learn consultative selling, objection handling, closing techniques, and relationship-building skills that create long-term clients."
        }
      ],
      outcome: "Achieve financial literacy, build multiple income streams, master investing and trading, develop high-income skills like copywriting and sales, and create long-term wealth.",
      affiliateLink: "https://www.bizgurukul.com/Signup.aspx?id=KRl5o+bvMnw=&ref=tUq4wa7c8QNxtwMnsNUehA==&user_id=QRtS71KW9ac=&lid=07Ms7aAcmyELr4XdyQUJoTh4CI/SNfdq"
    },
    {
      id: 6,
      title: "Business Mastery",
      subtitle: "MASTERY",
      description: "Launch, scale, and automate profitable online businesses using proven e-commerce and digital business models.",
      price: "₹19,999",
      originalPrice: "₹39,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775747208/business_bundle_yydo0b.webp",
      stats: "5 Courses | 220+ Hours",
      features: [
        "Dropshipping & Shopify - Start e-commerce with zero inventory",
        "Amazon FBA - Sell on world's largest marketplace",
        "Print On Demand - Create custom product business",
        "Marketing Agency - Build service-based business",
        "Digital Course Creation - Package and sell your expertise"
      ],
      coursesIncluded: [
        {
          name: "Dropshipping & Shopify",
          description: "Build a profitable e-commerce store without inventory. Master product research, supplier sourcing, Shopify store setup, Facebook ads for e-commerce, and scaling strategies."
        },
        {
          name: "Amazon FBA Mastery",
          description: "Sell products on Amazon and let them handle fulfillment. Learn product research, supplier negotiation, listing optimization, PPC advertising, and how to build a sustainable Amazon business."
        },
        {
          name: "Print On Demand 101",
          description: "Create and sell custom products with zero upfront costs. Master design creation, platform selection, marketing strategies, and how to build a profitable POD brand."
        },
        {
          name: "Start Marketing Agency",
          description: "Launch your own digital marketing agency. Learn service packaging, client acquisition, project management, team building, and how to scale to 6-figures and beyond."
        },
        {
          name: "Build & Launch E-Course",
          description: "Package your knowledge into profitable online courses. Master course creation, platform selection, pricing strategies, launch tactics, and evergreen sales funnels."
        }
      ],
      outcome: "Launch multiple online business models, master e-commerce and digital products, build scalable systems, create passive income streams, and achieve entrepreneurial freedom.",
      affiliateLink: "https://www.bizgurukul.com/Signup.aspx?id=DvjvJCTJRxU=&ref=tUq4wa7c8QNxtwMnsNUehA==&user_id=QRtS71KW9ac=&lid=07Ms7aAcmyELr4XdyQUJoVw/9j4XWgc4"
    },
    {
      id: 7,
      title: "Freelancing Road To 50K Per Month",
      subtitle: "BEGINNER",
      description: "Start your freelancing journey from scratch and learn the fundamentals needed to land your first clients and earn consistently.",
      price: "₹4,999",
      originalPrice: "₹5,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775754777/Gemini_Generated_Image_jpx1r5jpx1r5jpx1_gflmxr.png",
      stats: "Multiple Courses | 50+ Hours",
      features: [
        "Freelancing Fundamentals - Complete roadmap from zero to first client",
        "High-Income Skills - Learn beginner-friendly services that pay well",
        "Portfolio Creation - Build a portfolio that attracts clients",
        "Client Outreach - Master cold outreach and proposal writing",
        "Personal Branding Basics - Position yourself as a professional"
      ],
      coursesIncluded: [
        {
          name: "Freelancing Fundamentals",
          description: "Start your freelancing career with a clear roadmap. Learn platform selection, profile optimization, service selection, pricing strategies, and how to land your first paying client within 30 days."
        },
        {
          name: "Beginner-Friendly Skills",
          description: "Master in-demand skills that don't require years of experience. Learn content writing, social media management, basic graphic design, virtual assistance, and data entry services that clients need now."
        },
        {
          name: "Portfolio & Client Acquisition",
          description: "Build a compelling portfolio even without experience. Learn how to create sample work, write winning proposals, handle client communication, and convert prospects into paying clients."
        },
        {
          name: "Basic Personal Branding",
          description: "Establish your professional presence online. Learn LinkedIn basics, profile optimization, content posting strategies, and how to position yourself as a credible freelancer in your niche."
        }
      ],
      outcome: "Launch your freelancing career successfully, land your first 5-10 clients, build a strong portfolio, master client communication, and achieve consistent ₹50,000/month income.",
      affiliateLink: "https://www.bizgurukul.com/Biz/members/BizPro/DFBupgradeplan"
    },
    {
      id: 8,
      title: "Freelancing Road To 2 Lakhs Per Month",
      subtitle: "INTERMEDIATE",
      description: "Scale your freelancing income by mastering advanced client acquisition, premium pricing, and building authority in your niche.",
      price: "₹19,999",
      originalPrice: "₹29,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775754737/Gemini_Generated_Image_hp9rurhp9rurhp9r_twv4nq.png",
      stats: "Multiple Courses | 90+ Hours",
      features: [
        "Multi-Platform Acquisition - Find clients on LinkedIn, Upwork, and beyond",
        "Premium Pricing Strategies - Charge what you're worth and attract quality clients",
        "LinkedIn Authority - Build a powerful professional brand",
        "Client Retention - Turn one-time clients into long-term partners",
        "Team Building Basics - Start delegating and scaling your business"
      ],
      coursesIncluded: [
        {
          name: "Advanced Client Acquisition",
          description: "Master multiple client acquisition channels. Learn LinkedIn outreach, cold email campaigns, networking strategies, referral systems, and how to build a consistent pipeline of high-quality leads."
        },
        {
          name: "Premium Service Pricing",
          description: "Break through income ceilings with value-based pricing. Learn how to package premium services, communicate value effectively, handle price objections, and attract clients who pay premium rates."
        },
        {
          name: "LinkedIn Personal Branding",
          description: "Build authority and attract inbound clients on LinkedIn. Master content strategy, engagement tactics, profile optimization, and how to position yourself as an industry expert."
        },
        {
          name: "Client Retention & Scaling",
          description: "Turn clients into long-term partners and scale your operations. Learn project management, client communication systems, upselling strategies, and how to build a small team to handle more work."
        }
      ],
      outcome: "Scale to ₹2 lakhs/month consistently, attract premium clients who value your work, build authority in your niche, create systems for client retention, and start building a small team.",
      affiliateLink: "https://www.bizgurukul.com/Biz/members/BizPro/DFBupgradeplan"
    },
    {
      id: 9,
      title: "Freelancing Road To 5 Lakhs Per Month",
      subtitle: "ADVANCED",
      description: "Master high-ticket freelancing and scale your business to ₹5 lakhs/month with automation, authority, and advanced systems.",
      price: "₹49,999",
      originalPrice: "₹59,999",
      image: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1775754739/Gemini_Generated_Image_i2n3mri2n3mri2n3_u98dt0.png",
      stats: "Multiple Courses | 150+ Hours",
      features: [
        "High-Ticket Services - Offer premium packages worth ₹50K-₹5L+",
        "Automated Lead Generation - Build systems that bring clients on autopilot",
        "Sales Funnels - Create conversion systems that work 24/7",
        "Authority Content Strategy - Become the go-to expert in your field",
        "Team & Systems - Scale with team, SOPs, and automation"
      ],
      coursesIncluded: [
        {
          name: "High-Ticket Freelancing",
          description: "Transition to high-ticket services and premium clients. Learn consulting, done-for-you services, retainer models, and how to structure offers that command ₹50,000 to ₹5,00,000+ per project."
        },
        {
          name: "Automated Lead Generation",
          description: "Build systems that generate qualified leads automatically. Master sales funnels, lead magnets, email automation, webinar funnels, and inbound marketing strategies that work while you sleep."
        },
        {
          name: "Sales Funnels & Conversion",
          description: "Create conversion systems that turn prospects into high-paying clients. Learn funnel psychology, landing page optimization, email sequences, and sales call frameworks for closing big deals."
        },
        {
          name: "Authority Content Strategy",
          description: "Position yourself as the undisputed expert in your niche. Master thought leadership content, speaking opportunities, podcast guesting, and strategies that make clients seek you out."
        },
        {
          name: "Scaling with Systems & Team",
          description: "Build a real business, not just a freelance gig. Learn team hiring, training systems, SOPs, project management tools, and how to scale to ₹5 lakhs/month and beyond with leverage."
        }
      ],
      outcome: "Achieve ₹5 lakhs/month income consistently, work with premium clients only, build automated systems for lead generation, establish yourself as an authority, and scale with a team.",
      affiliateLink: "https://www.bizgurukul.com/Biz/members/BizPro/DFBupgradeplan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Premium</span> Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your career with industry-leading courses designed by experts. 
            Start learning today and unlock your potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.subtitle}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary-500 text-white px-2 py-1 rounded text-xs font-bold">
                    50% OFF
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {course.title}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 font-medium">
                    {course.stats}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary-500">
                      {course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {course.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={course.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Buy Now
                  </motion.a>
                  
                  <motion.button
                    onClick={() => setSelectedCourse(course)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Detail Modal */}
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                      {selectedCourse.subtitle}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedCourse.title}</h2>
                    <p className="text-gray-600 mt-2">{selectedCourse.description}</p>
                  </div>
                  
                  <div className="text-right ml-4">
                    <div className="text-3xl font-bold text-primary-500">{selectedCourse.price}</div>
                    <div className="text-sm text-gray-500 line-through">{selectedCourse.originalPrice}</div>
                    <div className="text-green-500 font-semibold">50% OFF</div>
                  </div>
                </div>

                {/* Courses Included Section */}
                {selectedCourse.coursesIncluded && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Courses Included</h3>
                    <div className="space-y-4">
                      {selectedCourse.coursesIncluded.map((course, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">{course.name}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outcome Section */}
                {selectedCourse.outcome && (
                  <div className="mb-6 bg-primary-50 rounded-lg p-5 border-l-4 border-primary-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">What You'll Achieve</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedCourse.outcome}</p>
                  </div>
                )}

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Skills You'll Master</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedCourse.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 sticky bottom-0 bg-white pt-4 border-t">
                  <motion.a
                    href={selectedCourse.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white text-center py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
                  >
                    Enroll Now - {selectedCourse.price}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;
