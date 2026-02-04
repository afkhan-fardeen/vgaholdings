export type NewsArticle = {
  title: string
  excerpt: string
  content: string[]
  /** Used for the listing card image */
  image: string
  /** Used on the detail page (3-up grid) */
  images: string[]
  /** Optional video to show on the detail page */
  videoUrl?: string
}

export const newsBySlug: Record<string, NewsArticle> = {
  'greek-street-sold': {
    title: 'GREEK STREET "MYKONOS" GETS SOLD TO THE BAHRAIN SOLYMAR GROUP.',
    excerpt:
      'Greek Street first opened its doors on the 6th April 2022. In a very short period of time our customers became regulars and Greek Street became the most attractive hang-out spot in the Kingdom of Bahrain.',
    content: [
      'Greek Street first opened its doors on the 6th April 2022. In a very short period of time our customers became regulars and Greek Street became the most attractive hang-out spot in the Kingdom of Bahrain.',
      'Greek Street is a unique dining concept inspired by a Mykonos vibe, a mix between a tavern and a bakery which attracts a modern, young, affluent crowd. Combining traditional Greek flavors, we bring you healthy, delicious food including the popular souvlaki with fresh products imported from Greece. Customers can also sample our original salads and homemade pastries alongside other baked goods.',
      'The dining experience will allow our customers to relax in an elegant, minimalistic environment, transported to a setting with Mykonian island vibes surrounded by local music and decorations. The bakery is designed in calming shades of blue and white, using simple, organic architecture. We include indoor and outdoor dining with a seating capacity of approximately 75 guests.',
      'A Greek management team with more than twenty years of experience in the elite Greek food and beverage industry is brought in to maintain the highest of standards. Our customer experience will guarantee repeat business, making this location a focal point in Bahrain.',
      'In April 2023 Greek Street got sold to the Bahrain Solymar Group, adding its Greek flavour to their portfolio.',
    ],
    image: '/images/sections/news/greek-street-news.png',
    images: [
      '/images/sections/news/greek-street-news.png',
      '/images/sections/news/greek1image.png',
      '/images/sections/news/Greekimage2.png',
    ],
  },
  'greek-street-tv': {
    title: 'GREEK STREET "MYKONOS" GOES LIVE ON BAHRAIN & GREEK TV CHANNELS.',
    excerpt:
      'Live on Bahrain and ALPHA Greek TV. The founders who have brought "a taste of Mykonos" to the Kingdom of Bahrain.',
    content: [
      "Watch Greek Street on Greece's No1 TV station \"ALPHA TV\" where questions and answers are made on how beautiful the Kingdom of Bahrain is and how friendly the Bahraini people are. In essence Greece is being promoted to our citizens of Bahrain which can travel and have a taste of \"Mykonos\", Greece without even leaving the country.",
    ],
    image: '/images/sections/news/alpha-live.png',
    images: ['/images/sections/news/alpha-live.png'],
    videoUrl: 'https://www.youtube.com/watch?v=AgXjfCbAdhA',
  },
  'vga-chemicals-carbontech': {
    title: 'VGA CHEMICALS SIGNS AGREEMENT WITH CARBONTECH IN BAHRAIN.',
    excerpt:
      'VGA Chemicals signs an exclusive agreement with Carbontech for the supply of Revowrap, a very High-End Leak repair product for the Oil & Gas Industry in the Kingdom of Bahrain.',
    content: [
      'VGA Chemicals signs an exclusive agreement with Carbontech for the supply of Revowrap, a very High-End Leak repair product for the Oil & Gas Industry in the Kingdom of Bahrain.',
      'Carbontech: The place where chemistry, engineering and global expertise are brought together to drive progressive innovation in advanced composite technologies for the emergency repair of critical assets "There is nothing generic about us" we don\'t just sell pipe wraps; we provide accurate engineering backing to deliver tailored solutions in accordance with ASME Pcc2 and ISO TS 24817.',
      'Sound and Responsible engineering is the basis on which we build our company, products and services. It is the core to our success and it is the foundation on which we have engineered and manufacture our innovative and bespoke Revowrap® systems.',
      'Carbontech composite systems are the developers and manufacturers of engineered composite materials formulated to restore critical assets back to the original design specifications. Our systems are compliant with engineering codes: ISO TS-24817 and ASME Pcc2 and are TUV accredited.',
      'If you have any inquiry regarding the Revowrap systems please feel free to get in touch with us.',
    ],
    image: '/images/sections/news/carbontech.png',
    images: [
      '/images/sections/news/cbn1.jpg',
      '/images/sections/news/cbn2.jpg',
      '/images/sections/news/cbn3.jpg',
    ],
  },
  'vga-consultants-arthur-little': {
    title: 'VGA CONSULTANTS SIGN AGREEMENT WITH ARTHUR D. LITTLE IN SAUDI ARABIA.',
    excerpt:
      'VGA and Arthur D. Little sign an agreement in Saudi to provide excellent consultancy and planning services for a large insurance firm.',
    content: [
      'VGA and Arthur D. Little sign an agreement for Saudi to provide excellent consultancy and planning services for a large Insurance firm. Part of our scope of work is to re-define the insurance industry using maximum optimization.',
      'Our competitive advantage is a strategic and relationship-driven approach to making tactical execution plans that allows our clients to align delivery with overarching business strategy.',
      'The services provided by VGA to ADL include but are not limited to:',
      '• Project & Programme Management',
      '• Transaction Advisory & Investor Sourcing',
      '• Feasibility Studies',
      '• Process Improvement',
      '• Organisation Design',
      '• Professional Training for employees and Executives',
      '• Merger & Acquisition Advisory',
    ],
    image: '/images/sections/news/arthur.png',
    images: ['/images/sections/news/arthur.png'],
  },
  'stealth-lock-new-generation': {
    title: 'STEALTH-LOCK "NEW GENERATION" LAUNCHED.',
    excerpt:
      'Automation, remote-control, data capture, stabilizer modules – this new generation of the Stealth-Lock pipeline connection technology is the product of innovation.',
    content: [
      'Automation, remote-control, data capture, stabilizer modules – this new generation Stealth-Lock pipe connection technology is the product of innovation and ingenuity fueled by multimillion-dollar R&D investment.',
      'We listened to our end-users, technicians, operations engineers, and we settled on developing Mechanical Interference Fit technology for the 21st century. With fully automated prepping facilities, the NewGen Stealth-Lock system removes hazard and risk as it minimizes workforce "hands-on" processing. The data capture features, enable evaluation of each joint whether real-time or postproduction. In the field, the Stealth-Lock Assembly Machines are semi-automated, and this not only makes the work-zone safer, but it also ensures quality and integrity verification on each and every connection.',
    ],
    image: '/images/sections/news/stealth.png',
    images: ['/images/sections/news/sl1.jpg', '/images/sections/news/sl2.jpg'],
  },
  'agodco-tenaris-contract': {
    title: 'AGODCO & TENARIS INK STEALTH-LOCK LATIN AMERICA CONTRACT.',
    excerpt:
      'After 4 years of relationship development, field trials, end-user qualifications and contractual negotiations, AGODCO and TENARIS inked their deal.',
    content: [
      'After 4 years of relationship development, field trials, end-user qualifications and contractual negotiations, AGODCO and TENARIS, one of the worlds largest tubular goods manufacturers, inked their deal.',
      'The agreement is to roll-out and develop Stealth-Lock mechanical interference fit products and services across Latin America through the broad stable of manufacturing outlets that TENARIS owns and operates in the region.',
      '"I believe the deal could be a blockbuster for both companies" said AGODCO Group CEO, Adam Harcourt. He continued: …if delivered as a full, vertically integrated product and service, client productivity increases whilst, costs decrease. With this, carbon steel is here to stay, giving greater value and confidence compared to immature emerging materials and systems for pipe connection".',
    ],
    image: '/images/sections/news/tenaris-new.png',
    images: ['/images/sections/news/tenaris-new.png'],
  },
}

export const newsSlugs = Object.keys(newsBySlug)

export const newsItems = newsSlugs.map((slug) => ({
  id: slug,
  title: newsBySlug[slug]!.title,
  description: newsBySlug[slug]!.excerpt,
  image: newsBySlug[slug]!.image,
}))

export function getNewsArticle(slug: string) {
  return newsBySlug[slug]
}
