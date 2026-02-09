import Image from 'next/image'
import Section from '@/components/Section'

const portfolioItems = [
  {
    name: 'Playsy',
    logo: '/images/sections/portfolio/Playsy-logo.jpg',
    url: 'https://www.playsy.com/',
  },
  {
    name: 'VGA Events',
    logo: '/images/sections/portfolio/vga-events-logo.jpg',
    url: 'https://vga-events.com/',
  },
  {
    name: 'The Agency',
    logo: '/images/sections/portfolio/agency-logo.jpg',
    url: 'https://vgaholdings.com/wp-content/uploads/2024/09/The-Agency-3-Step-System.pdf',
  },
  {
    name: 'Playbox',
    logo: '/images/sections/portfolio/Playbox-Logo.jpg',
    url: 'https://playboxbh.com/',
  },
  {
    name: 'Metakid',
    logo: '/images/sections/portfolio/metakid-logo.jpg',
    url: null,
  },
  {
    name: 'MoneyTree',
    logo: '/images/sections/portfolio/Moneytree_logo.png',
    url: 'https://vgaholdings.com/wp-content/uploads/2024/09/MoneyTree_2024.pdf',
  },
]

export default function Portfolio() {
  return (
    <Section id="portfolio">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-4 animate-fade-up anim-delay-100 parallax-text">
            Investment Portfolio
          </h2>
          <p className="text-sm sm:text-base font-light text-[#4A4F55] max-w-4xl mb-4 mx-auto leading-relaxed">
            Welcome to VGA Holdings Investment Portfolios, where innovation meets opportunity!
          </p>
          <p className="text-sm sm:text-base font-light text-[#4A4F55] max-w-4xl mx-auto leading-relaxed">
            Our diverse offerings are designed to enhance your entertainment, event planning, and educational experiences. At the forefront is Playsy, our dual reality innovative play center that seamlessly merges creativity and technology for unparalleled fun. We also feature VGA Events, your one-stop shop for event solutions, serving everything from corporate gatherings to VIP events. The Agency introduces Orizon, our groundbreaking 3-step system that transforms sales and marketing strategies for measurable success. Additionally, Playbox encourages kids to step away from screens and engage their craft skills and imagination through hands-on activities. Metakid offers interactive dual challenges, teaching kids how to use technology as a tool rather than mere entertainment. Finally, MoneyTree is our initiative focused on fostering financial literacy in children from an early age, ensuring they are well-prepared for the future.
          </p>
          <p className="text-sm sm:text-base font-light text-[#4A4F55] max-w-4xl mx-auto mt-4 leading-relaxed">
            Discover the potential of each portfolio by clicking on the logos below and embark on a journey of engagement and growth with VGA!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => {
            const content = (
              <div
                className="h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center border border-[#D9D9D9] bg-white hover:border-[#d4af37] hover:shadow-lg transition-all duration-300 p-2 sm:p-3 md:p-4 group animate-scale-in"
                style={{ animationDelay: `${index * 70 + 120}ms` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    loading="lazy"
                  />
                </div>
              </div>
            )

            return item.url ? (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-[#4A4F55] uppercase tracking-wider">
              Investment Portfolio
            </span>
            <span className="text-sm font-bold text-[#d4af37]">20%</span>
          </div>
          <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
            <div className="bg-[#d4af37] h-full rounded-full" style={{ width: '20%' }} />
          </div>
        </div>
    </Section>
  )
}
