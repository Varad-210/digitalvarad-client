/**
 * Central SEO configuration for VaradBuilds (digitalvarad.vercel.app)
 * Used by react-helmet-async to inject per-page <head> tags.
 */

const BASE_URL = 'https://digitalvarad.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`; // branded homepage banner
const AUTHOR = 'Varad Sontakke';
const SITE_NAME = 'VaradBuilds';

// ── Per-page SEO config ──────────────────────────────────────────────
export const PAGE_SEO = {
  home: {
    title: 'Freelancing & Digital Skills for Students | VaradBuilds',
    description:
      'Learn freelancing, digital marketing, and high-income skills as a student in India. VaradBuilds by Varad Sontakke — real guidance, proven results, zero scams.',
    canonical: `${BASE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  blog: {
    title: 'Blog — Freelancing & Digital Skills Guides | VaradBuilds',
    description:
      'Practical guides for Indian students on freelancing, affiliate marketing, AI tools, and building income online. Updated weekly by Varad Sontakke.',
    canonical: `${BASE_URL}/blog`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  products: {
    title: 'Courses & Products for Student Freelancers | VaradBuilds',
    description:
      'Explore curated courses on digital marketing, freelancing, and content creation recommended by VaradBuilds for students and beginners in India.',
    canonical: `${BASE_URL}/products`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  'digital-products': {
    title: 'Digital Products for Students | VaradBuilds',
    description:
      'Download digital products, templates, and resources to kickstart your freelancing and digital marketing journey as a student.',
    canonical: `${BASE_URL}/digital-products`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  journal: {
    title: 'Journal — Stories & Lessons | VaradBuilds',
    description:
      "Read Varad's personal journal — raw stories, lessons learned, and real experiences from building VaradBuilds as a student entrepreneur.",
    canonical: `${BASE_URL}/journal`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
};

// ── Per blog-post SEO config ──────────────────────────────────────────
export const BLOG_POST_SEO = {
  'freelancing-roadmap': {
    title: 'Freelancing Roadmap for Students India 2026 | VaradBuilds',
    description:
      'The complete 9-step freelancing roadmap for Indian students — how to pick a skill, get your first client, and earn online. No fluff, real execution guide.',
    canonical: `${BASE_URL}/blog/freelancing-roadmap`,
    ogImage: `${BASE_URL}/og-freelancing-roadmap.png`,
    keyword: 'freelancing roadmap for students India',
  },
  'high-income-skills': {
    title: 'High Income Skills for Students to Earn Online 2026 | VaradBuilds',
    description:
      'Discover the top high-income skills for students in India and follow a 90-day roadmap to go from ₹0 to ₹1L+/month using just your mobile phone.',
    canonical: `${BASE_URL}/blog/high-income-skills`,
    ogImage: `${BASE_URL}/og-high-income-skills.png`,
    keyword: 'high income skills for students India',
  },
  'how-to-do-content-research': {
    title: 'How to Do Content Research for Instagram & Blogs | VaradBuilds',
    description:
      'Never run out of content ideas again. Learn content pillars, proven research methods, and how to blend content with sales for consistent growth as a student creator.',
    canonical: `${BASE_URL}/blog/how-to-do-content-research`,
    ogImage: `${BASE_URL}/og-content-research.png`,
    keyword: 'how to do content research for Instagram students',
  },
  'top-50-ai-tools': {
    title: 'Top 50 AI Tools to Build an Online Business (Free) | VaradBuilds',
    description:
      'The best 50 AI tools for students to build a full online business — design, video, writing, automation, and more. Most are free. Updated for 2026.',
    canonical: `${BASE_URL}/blog/top-50-ai-tools`,
    ogImage: `${BASE_URL}/og-ai-tools.png`,
    keyword: 'best AI tools for students to earn online 2026',
  },
  'affiliate-marketing-growth': {
    title: "Why Beginners Don't Grow in Affiliate Marketing | VaradBuilds",
    description:
      'Learn the 6 biggest mistakes that stop student affiliate marketers from growing — and the proven 6-month daily routine to earn consistently online.',
    canonical: `${BASE_URL}/blog/affiliate-marketing-growth`,
    ogImage: `${BASE_URL}/og-affiliate-marketing.png`,
    keyword: 'affiliate marketing tips for beginners students India',
  },
  'sell-bizgurukul-instagram': {
    title: 'How to Sell Bizgurukul on Instagram & Earn ₹14,000/Sale | VaradBuilds',
    description:
      "Complete beginner guide for students to earn ₹10,000–₹50,000/month promoting Bizgurukul on Instagram — mobile only, zero investment, 1 hour a day.",
    canonical: `${BASE_URL}/blog/sell-bizgurukul-instagram`,
    ogImage: `${BASE_URL}/og-sell-bizgurukul-instagram.png`,
    keyword: 'how to sell Bizgurukul on Instagram and earn money',
  },
  'escape-the-matrix': {
    title: 'Escape the Education Matrix: Financial Freedom for Students | VaradBuilds',
    description:
      'Why the school-college-job system keeps students trapped financially — and the exact steps to break free and build real income using your mobile phone.',
    canonical: `${BASE_URL}/blog/escape-the-matrix`,
    ogImage: `${BASE_URL}/og-escape-matrix.png`,
    keyword: 'how students can achieve financial freedom in India',
  },
  'sales-and-marketing': {
    title: 'Sales & Marketing Skills Every Student Must Learn to Earn Online | VaradBuilds',
    description:
      'Learn the difference between sales and marketing, the 80/20 rule, and a 60-minute daily system that helps students consistently earn online without burning out.',
    canonical: `${BASE_URL}/blog/sales-and-marketing`,
    ogImage: `${BASE_URL}/og-sales-marketing.png`,
    keyword: 'sales and marketing skills for students to earn online India',
  },
};

/**
 * Get SEO data for a specific blog post slug.
 * Falls back to a generic blog SEO if slug not found.
 */
export function getSeoForPost(slug) {
  return (
    BLOG_POST_SEO[slug] || {
      title: `${slug.replace(/-/g, ' ')} | VaradBuilds Blog`,
      description:
        'Read this guide by Varad Sontakke on VaradBuilds — practical digital skills for students.',
      canonical: `${BASE_URL}/blog/${slug}`,
      ogImage: DEFAULT_OG_IMAGE,
    }
  );
}

// ── JSON-LD Schemas ───────────────────────────────────────────────────

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Varad Sontakke',
  alternateName: 'Varad Mahadev Sontakke',
  url: BASE_URL,
  jobTitle: 'Digital Skills Educator & Student Entrepreneur',
  description:
    'Engineering student and founder of VaradBuilds, helping Indian students learn freelancing, digital marketing, and high-income skills.',
  sameAs: [
    'https://www.instagram.com/varadbuilds',
  ],
  knowsAbout: [
    'Freelancing',
    'Digital Marketing',
    'Affiliate Marketing',
    'Content Creation',
    'Personal Branding',
  ],
};

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VaradBuilds',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  description:
    'VaradBuilds helps Indian students and beginners learn freelancing, digital marketing, and high-income skills to earn online.',
  founder: {
    '@type': 'Person',
    name: 'Varad Sontakke',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+91-9049671938',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
  },
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VaradBuilds',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I learn freelancing as a student without any prior experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes! Most high-income freelancing skills like content writing, social media management, graphic design, and video editing can be learned in 30–60 days from scratch. VaradBuilds provides step-by-step guidance for students with zero prior experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can a student earn through freelancing in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A student starting freelancing in India can realistically earn ₹10,000–₹30,000 per month within 3–6 months of consistent practice. Experienced student freelancers earn ₹50,000–₹1,00,000+ per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best high-income digital skills for students in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The best high-income skills for students in 2026 are: Digital Marketing, Copywriting, Video Editing, Web Development, Graphic Design, Affiliate Marketing, Social Media Management, and Content Creation. All can be started with just a smartphone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a laptop to start freelancing as a student?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No! Many students at VaradBuilds started their freelancing journey using only a mobile phone. Skills like social media management, affiliate marketing, content writing, and digital marketing can all be started and practiced on a smartphone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Bizgurukul a legitimate platform for learning digital skills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Bizgurukul is a legitimate ed-tech platform offering courses on digital marketing, affiliate marketing, and online business. It has helped thousands of students across India earn commissions by learning and promoting digital skills courses.',
      },
    },
  ],
};

/**
 * Build an Article schema for a blog post.
 */
export function getArticleSchema({ slug, title, description, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    image: DEFAULT_OG_IMAGE,
    author: {
      '@type': 'Person',
      name: AUTHOR,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.png`,
      },
    },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
  };
}

/**
 * Build a BreadcrumbList schema for a blog post.
 */
export function getBreadcrumbSchema(slug, title) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${BASE_URL}/blog/${slug}`,
      },
    ],
  };
}

export { BASE_URL, DEFAULT_OG_IMAGE, AUTHOR, SITE_NAME };
