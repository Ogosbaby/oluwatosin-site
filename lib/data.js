/* Single source of truth for site content.
   Modeled with minimal text, high-impact imagery, and executive presence. */

export const SITE = {
  name: 'Oluwatosin Oluwakoyejo',
  title: 'Oluwatosin Oluwakoyejo',
  role: 'Founder & CEO, Chronicles Software · Convener, The CONFAB',
  heroTagline: "Oluwatosin Oluwakoyejo",
  bioHeadline: 'Investor. Software Architect. EdTech Pioneer. Youth Champion.',
  bioSummary:
    'Dedicated to unlocking the innate genius of Africa’s youth through systematic learning, educational technology, and enterprise.',
  quote:
    'Years from now, my legacy will not be defined by software infrastructure… but by an unwavering commitment to developing the innate genius of African youth.',
};

export const ASSETS = {
  bossHeroFullwidth: '/images/oluwatosin-hero-fullwidth.jpg',
  bossHeroColor: '/images/oluwatosin-color.jpg',
  bossAbout: '/images/oluwatosin-portrait.jpg',
  ariseThumbnail: '/images/arise-news-thumbnail.jpg',
  alaThumbnail: '/images/ala-masterclass-thumbnail.jpg',
  logoChronicles: '/images/logo-chronicles-real.png',
  logoSuccessbox: '/images/logo-successbox-real.png',
  logoSuccesstab: '/images/logo-succestab-real.png',
  chroniclesSuccessbox: '/images/chronicles-successbox.png',
  chroniclesSuccestab: '/images/chronicles-succestab.png',
  chroniclesUmbrella: '/images/chronicles-umbrella.jpg',
};

export const NAV = [
  { label: 'CHRONICLES', href: '#chronicles' },
  { label: 'THE CONFAB', href: '#confab' },
  { label: 'BROADCASTS', href: '#arise-broadcast' },
  { label: 'CONNECT', href: '#connect' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'ABOUT',
    links: [
      { label: 'Biography', href: '/about#biography' },
      { label: 'Executive Education', href: '/about#education' },
      { label: 'Milestones & History', href: '/about#timeline' },
    ],
  },
  {
    title: 'ECOSYSTEM',
    links: [
      { label: 'Chronicles Software', href: 'https://chroniclesoft.com/', external: true },
      { label: 'SuccessBOX AI Engine', href: 'https://successbox.ng/', external: true },
      { label: 'SuccessTAB Device', href: 'https://www.successtabs.com/', external: true },
    ],
  },
  {
    title: 'IMPACT & MEDIA',
    links: [
      { label: 'The CONFAB (Since 2011)', href: '#confab' },
      { label: 'CONFAB Instagram', href: 'https://www.instagram.com/confab_global/', external: true },
      { label: 'Arise News Broadcast', href: 'https://youtu.be/HtKqZbVGB88', external: true },
    ],
  },
  {
    title: 'CONNECT',
    links: [
      { label: 'Executive Network', href: '#connect' },
      { label: 'Direct Desk Inquiry', href: '/contact' },
    ],
  },
];

export const SOCIALS = [
  {
    platform: 'LinkedIn',
    handle: 'Oluwatosin Oluwakoyejo',
    url: 'https://www.linkedin.com/in/oluwatosin-oluwakoyejo/',
    icon: 'Linkedin',
    desc: 'Professional network, board advisory & executive commentary',
    tag: 'Executive Network',
  },
  {
    platform: 'Instagram',
    handle: '@confab_global',
    url: 'https://www.instagram.com/confab_global/',
    icon: 'Instagram',
    desc: 'Official platform for The CONFAB youth empowerment movement',
    tag: 'Youth Empowerment',
  },
  {
    platform: 'X (Twitter)',
    handle: '@koyejo_tosin',
    url: 'https://twitter.com/',
    icon: 'Twitter',
    desc: 'EdTech policy, AI regulation, and youth enterprise',
    tag: 'Ideas & Dialogue',
  },
  {
    platform: 'YouTube',
    handle: 'Broadcasts & Keynotes',
    url: 'https://youtu.be/HtKqZbVGB88?si=wnwvZnFDfB4vzsOT',
    icon: 'Youtube',
    desc: 'Television features, panel sessions, and masterclasses',
    tag: 'Broadcasts',
  },
];

export const STATS = [
  { value: '2007', label: 'Chronicles Founded' },
  { value: '220,000+', label: 'Active Learners' },
  { value: '30,000+', label: 'Exam Question Bank' },
  { value: '2011', label: 'The CONFAB Established' },
];

/* Chronicles Software Umbrella & Products */
export const CHRONICLES_ECOSYSTEM = {
  umbrella: {
    title: 'Chronicles Software',
    subtitle: 'Enterprise EdTech Infrastructure',
    year: 'Founded 2007',
    url: 'https://chroniclesoft.com/',
    highlights: [
      'Serving 220,000+ active users globally across primary, secondary and tertiary levels',
      'Proprietary Universal Test Engine (UTEn) architecture',
      'Recognized among Nigeria’s Top 50 Emerging Enterprises (Diamond Bank BET3)',
      'Home to flagship platforms SuccessBOX AI Engine and SuccessTAB Digital Device',
    ],
  },
  succestab: {
    title: 'SuccessTAB',
    tag: 'Flagship Digital Learning Tablet',
    url: 'https://www.successtabs.com/',
    achievements: [
      'State-wide deployment in public schools, endorsed by state ministries of education',
      'Preloaded with 40+ subject curricula, multimedia textbooks, and past questions',
      '100% offline capability ensuring seamless digital learning without internet access',
      'Tamper-proof security lock preventing non-educational web distractions',
    ],
  },
  successbox: {
    title: 'SuccessBOX AI Engine',
    tag: 'CBT Examination Readiness Engine',
    url: 'https://successbox.ng/',
    achievements: [
      'Over 30,000 curriculum-aligned questions for UTME, WAEC, NECO, and BECE',
      'AI diagnostic scoring to pinpoint subject weaknesses and predictive score assessments',
      'Instant explanations turning exam anxiety into systematic confidence',
      'Free nationwide access rollouts supporting millions of graduating SS3 students',
    ],
  },
};

/* The CONFAB UGC Gallery & Reel */
export const CONFAB_DATA = {
  reelUrl: 'https://www.instagram.com/reel/DaQYnVcIZk3/?utm_source=ig_web_copy_link',
  instagramProfile: 'https://www.instagram.com/confab_global/',
  title: 'The CONFAB',
  years: '15 Years',
  headline: 'Africa’s Premier Youth Empowerment Gathering',
  description:
    'Convened by Oluwatosin Oluwakoyejo since 2011, The CONFAB connects ambitious young Africans with mentors, founders, and industry leaders.',
  ugcPhotos: [
    {
      title: 'Audience Engagement',
      caption: 'Over 2,000 young leaders gathering annually for high-impact masterclasses',
      image: '/images/confab-ugc-1.jpg',
    },
    {
      title: 'Auditorium Sessions',
      caption: 'Standing ovation and plenary sessions with industry pioneers',
      image: '/images/confab-ugc-2.jpg',
    },
    {
      title: 'Youth Mentorship',
      caption: 'Direct executive mentorship sessions bridging the gap to opportunity',
      image: '/images/confab-ugc-3.jpg',
    },
    {
      title: 'Next-Gen Builders',
      caption: 'Ambitious African builders and innovators charting their future',
      image: '/images/confab-ugc-4.jpg',
    },
  ],
};

/* Arise News & Media */
export const ARISE_FEATURE = {
  videoId: 'HtKqZbVGB88',
  title: 'AI Regulation in Nigeria, Prompt Engineering & Educational Transformation',
  platform: 'Arise News Global Broadcast',
  quote:
    'Years from now, my legacy will not be defined by software infrastructure… but by an unwavering commitment to developing the innate genius of African youth.',
  author: 'Oluwatosin Oluwakoyejo',
  youtubeUrl: 'https://youtu.be/HtKqZbVGB88?si=wnwvZnFDfB4vzsOT',
};

/* Articles */
export const ARTICLES = [
  {
    slug: 'systematic-learning',
    title: 'Why Systematic Learning Beats Last-Minute Cramming',
    date: '2026-11-06',
    category: 'EdTech & Learning',
    readTime: '5 min read',
    excerpt:
      'Exam success is a habit, not an emergency. How structured practice through technology transforms student outcomes across Africa.',
    body: [
      'Every examination season across Nigeria and Africa, the same cycle repeats: students scramble through endless cramming sessions in the final weeks before national assessments, gripped by anxiety and guesswork.',
      'Exam success should never be an emergency. When learners practice systematically, week after week, preparation transforms from a frantic sprint into a structured habit.',
      'That deep conviction is what inspired the SuccessBOX AI Engine. By providing over 30,000 curriculum-aligned questions with instant feedback and performance diagnostics, students learn to treat tests as a measurable science rather than an unpredictable obstacle.',
      'Similarly, SuccessTAB brings structured, distraction-free digital environments directly into students’ hands. When children have access to high-quality curricula at home and in public schools, confidence replaces fear—and true intellectual excellence begins.',
    ],
  },
  {
    slug: 'ai-in-african-education',
    title: 'AI Regulation and Prompt Engineering in Africa: Building Builders, Not Just Consumers',
    date: '2026-10-24',
    category: 'AI & Policy',
    readTime: '6 min read',
    excerpt:
      'As artificial intelligence reshapes global economies, Africa must move from being passive consumers of technology to mastering foundational AI literacy and prompt engineering.',
    body: [
      'In our recent discussions on Arise News regarding AI regulation in Nigeria, one imperative stood clear: Africa cannot afford to be a spectator in the intelligence revolution.',
      'Artificial intelligence is not merely a tool for automation; it is an amplifier of human capability. For African youth, mastering prompt engineering, critical thinking, and algorithmic problem-solving will be as essential as reading and writing.',
      'Regulation must strike a careful balance: protecting data privacy, safeguarding ethical standards in educational testing, while fiercely encouraging grassroots innovation.',
      'At Chronicles Software, we are actively integrating AI diagnostics to help teachers assess individual student strengths in real-time. The goal is clear: use AI to democratize quality education across every classroom in Nigeria and beyond.',
    ],
  },
  {
    slug: 'the-confab-story',
    title: 'The CONFAB at 15: Convening the Next Generation of African Builders',
    date: '2026-10-15',
    category: 'Youth Empowerment',
    readTime: '4 min read',
    excerpt:
      'What began in 2011 as a single gathering is now a fifteen-year movement connecting ambitious young Africans with mentors, founders, and leaders.',
    body: [
      'When we convened the inaugural edition of The CONFAB in 2011, the premise was remarkably straightforward: young Africans do remarkably better when they share the same room with mentors, industry pioneers, and enterprise leaders.',
      'Over the past fifteen years, The CONFAB has served as an incubator of ideas, partnerships, and purpose. We have seen participants transform from curious undergraduates into startup founders, software architects, and civic leaders.',
      'Africa does not lack talent; Africa lacks structured bridges between potential and opportunity. Our duty as business leaders is to build those bridges, hold open the doors, and invest unapologetically in the innate genius of our youth.',
    ],
  },
];

/* Timeline */
export const TIMELINE = [
  {
    year: 'Early Years',
    title: 'UNAD Programmers’ Group',
    kicker: 'Roots of Software Architecture',
    body: 'Organized fellow student developers at the University of Ado-Ekiti (UNAD), establishing a lifelong dedication to software engineering.',
  },
  {
    year: '2007',
    title: 'Chronicles Software Founded',
    kicker: 'Sept 27, 2007',
    body: 'Incorporated Chronicles Software Development Company Limited during final undergraduate year, setting out to revolutionize digital testing.',
  },
  {
    year: '2011',
    title: 'The CONFAB Inaugural Gathering',
    kicker: 'Youth Empowerment Movement',
    body: 'Convened the first edition of The CONFAB, an annual youth empowerment conference uniting ambitious young Africans.',
  },
  {
    year: '2013',
    title: 'Diamond Bank BET3 Recognition',
    kicker: 'National Business Spotlight',
    body: 'Chronicles Software named among the Top 50 Emerging Enterprises in Nigeria under Diamond Bank’s BET3 program.',
  },
  {
    year: '2016',
    title: 'Stanford SEED Program',
    kicker: 'Executive Education Milestone',
    body: 'Completed the Stanford Graduate School of Business Seed Transformation Program (West Africa).',
  },
  {
    year: '2019',
    title: 'Ausso Leadership Academy (ALA)',
    kicker: 'Corporate Governance & Scaling',
    body: 'Completed executive masterclass in corporate governance and high-performance leadership under Austin Okere.',
  },
  {
    year: 'Present',
    title: 'NESG Human Capital Commission & Scale',
    kicker: 'National Impact & Policy',
    body: 'Serving on the Human Capital Development Commission of the Nigerian Economic Summit Group (NESG).',
  },
];

/* Lifestyle & Mentorship Pillars */
export const LIFESTYLE_PILLARS = [
  {
    title: 'Daily Discipline & Reflection',
    category: 'Morning Routine',
    body: 'Beginning each day with prayer and reading global technology policy before reviewing dashboards.',
  },
  {
    title: 'Mentoring Young Builders',
    category: 'The CONFAB Legacy',
    body: 'Conducting private mentorship sessions with young Nigerian developers and startup founders.',
  },
  {
    title: 'Public Policy Dialogue',
    category: 'Civic Engagement',
    body: 'Advocating for curriculum modernization and public school technology grants through the NESG.',
  },
  {
    title: 'Lifelong Executive Learning',
    category: 'Personal Growth',
    body: 'Active engagement with Stanford SEED and Ausso Leadership Academy alumni networks.',
  },
];

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
