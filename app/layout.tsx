import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { Gloria_Hallelujah } from 'next/font/google'
import { SITE_NAME, SITE_URL } from '@/config/site'

const gloriaHallelujah = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gloria',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VGA Holdings | Enterprise Investment & Industrial Services',
    template: '%s | VGA Holdings',
  },
  description:
    'Established in 2014 in the Kingdom of Bahrain, VGA Holdings operates across oil & gas, chemical distribution, consultancy, brokerage, and strategic investment portfolios—delivering value through speed, expertise, and integrity.',
  keywords: [
    'VGA Holdings',
    'Bahrain',
    'Oil & Gas',
    'Pipeline Services',
    'Chemical Distribution',
    'Consultancy',
    'Brokerage',
    'Investment Portfolio',
    'Stealth-Lock',
    'Carbontech',
    'Enterprise Services',
  ],
  authors: [{ name: 'VGA Holdings' }],
  creator: 'VGA Holdings',
  publisher: 'VGA Holdings',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'VGA Holdings | Enterprise Investment & Industrial Services',
    description:
      'Established in 2014 in the Kingdom of Bahrain, VGA Holdings operates across oil & gas, chemical distribution, consultancy, brokerage, and strategic investment portfolios.',
    images: [
      {
        url: '/logos/vgalogo.png',
        width: 1200,
        height: 630,
        alt: 'VGA Holdings Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VGA Holdings | Enterprise Investment & Industrial Services',
    description:
      'Established in 2014 in the Kingdom of Bahrain, VGA Holdings operates across oil & gas, chemical distribution, consultancy, brokerage, and strategic investment portfolios.',
    images: ['/logos/vgalogo.png'],
  },
  icons: {
    icon: '/images/favicons/favicon.ico',
    shortcut: '/images/favicons/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/vgalogo.png`,
    description:
      'Established in 2014 in the Kingdom of Bahrain, VGA Holdings operates across oil & gas, chemical distribution, consultancy, brokerage, and strategic investment portfolios.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mandarin Tower, Office 101, 10th Floor, Road 3615, Block 436, Building 681',
      addressLocality: 'Al Seef',
      addressCountry: 'BH',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+973-17005357',
      contactType: 'Customer Service',
      email: 'info@vgaholdings.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/vga-holdings',
    ],
  }

  return (
    <html lang="en" className={`scroll-smooth ${gloriaHallelujah.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F5F6F7] text-[#4A4F55]">
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  )
}
