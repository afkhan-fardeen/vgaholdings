import Image from 'next/image'
import Section from '@/components/Section'

const capabilities = [
  {
    title: 'Oil and Gas Pipeline Services',
    description: 'AGODCO the proprietary owner of the Stealth-Lock technology designs, builds and develops, innovative and technically advanced Pipeline construction technology. But it doesn\'t stop there. Its Integrated Services Resource typically delivers pipeline construction ten times faster than welding with 2km of constructed carbon steel pipeline per crew, per day. We carry your energy in safe, reliable and responsible ways. We are committed to the communities to which we serve to.',
    image: '/images/sections/what-we-do/SL-Pipeline-Construction.jpeg',
    category: 'Agodco Group',
    percentage: 50,
  },
  {
    title: 'Chemical Distribution',
    description: 'VGA Chemicals is the exlusive distributor of Carbontech in the Kingdom of Bahrain. The place where chemistry, engineering and global expertise are brought together to drive progressive innovation in advanced composite technologies for the emergency repair of critical assets "There is nothing generic about us" we don\'t just sell pipe wraps; we provide accurate engineering backing to deliver tailored solutions in accordance with ASME Pcc2 and ISO TS 24817.',
    image: '/images/sections/what-we-do/carbontechimg.jpg',
    category: 'Carbontech',
    percentage: 20,
  },
  {
    title: 'Consultancy Services',
    description: 'We are a group of multi-skilled and diverse business advisors experienced in global markets, specifically in the Middle East. Our practitioners have worked in the United States, Europe, and across the Middle East in Finance/Banking, Oil, Gas & Energy, Transaction Advisory, Process Improvement and Project & Programme Management. We\'re always curious and totally invested in finding the best solution to every challenge.',
    image: '/images/sections/what-we-do/Consultancy-service.jpg',
    category: 'Consultancy',
    percentage: 5,
  },
  {
    title: 'Brokerage Services',
    description: 'Connecting the west to the Middle East and to the Far East, VGA has longstanding, mutually respectful relationships with industry leaders; governmental and non-governmental key players not only for Energy and Maritime but related and also much wider sectors of business and industry. VGA\'s team of experienced, skilled and detail-oriented brokers are at your disposal for executing client orders.',
    image: '/images/sections/what-we-do/Brokerage.jpg',
    category: 'Brokerage',
    percentage: 5,
  },
]

export default function WhatWeDo() {
  return (
    <Section id="what-we-do">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] animate-fade-up anim-delay-100 parallax-text">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 hover:bg-white transition-all duration-300 group shadow-[0_10px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_10px_40px_rgba(15,23,42,0.12)] animate-scale-in"
              style={{ animationDelay: `${index * 80 + 120}ms` }}
            >
              <div className="w-full h-32 sm:h-40 md:h-44 relative overflow-hidden mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow duration-300 parallax" data-parallax="0.03">
                <Image
                  src={capability.image}
                  alt={`${capability.title} - ${capability.category}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#1F2A36] mb-2 sm:mb-3 leading-tight">{capability.title}</h3>
              <p className="text-xs sm:text-sm text-[#4A4F55] font-light leading-relaxed mb-3 sm:mb-4">
                {capability.description}
              </p>
              <div className="pt-3 sm:pt-4 border-t border-[#D9D9D9]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#4A4F55] uppercase">
                    {capability.category}
                  </span>
                  <span className="text-sm font-bold text-[#d4af37]">{capability.percentage}%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#d4af37] h-full rounded-full transition-all duration-500"
                    style={{ width: `${capability.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  )
}
