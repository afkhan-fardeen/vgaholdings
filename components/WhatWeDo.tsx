import Image from 'next/image'
import Section from '@/components/Section'

const capabilities = [
  {
    title: 'Oil and Gas Pipeline Services',
    description: 'Through proprietary and advanced mechanical pipeline technologies, we design, build, and deliver pipeline construction solutions that significantly outperform conventional welding methods.',
    image: '/images/SL-Pipeline-Construction.jpeg',
    category: 'OIL AND GAS',
    percentage: 50,
  },
  {
    title: 'Chemical Distribution',
    description: 'VGA Chemicals is the exclusive distributor of Carbontech in the Kingdom of Bahrain. Carbontech is a global leader in composite repair systems, delivering engineered solutions for pipeline repairs and equipment rehabilitation.',
    image: '/images/carbontechimg.jpg',
    category: 'CHEMICAL DISTRIBUTION',
    percentage: 20,
  },
  {
    title: 'Consultancy Services',
    description: 'Our consultancy arm comprises multi-skilled advisors with experience across Finance & Banking, Oil, Gas & Energy, Transaction Advisory, Process Improvement, and Project & Programme Management.',
    image: '/images/Consultancy-service.jpg',
    category: 'CONSULTANCY',
    percentage: 5,
  },
  {
    title: 'Brokerage Services',
    description: 'VGA connects Western markets with the Middle East and Far East through longstanding, trust-based relationships with industry leaders and governments.',
    image: '/images/Brokerage.jpg',
    category: 'BROKERAGE',
    percentage: 5,
  },
]

export default function WhatWeDo() {
  return (
    <Section id="what-we-do">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] animate-fade-up anim-delay-100">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 hover:bg-white transition-all duration-300 group border border-[#D9D9D9] hover:border-[#d4af37]/30 hover:shadow-md animate-scale-in"
              style={{ animationDelay: `${index * 80 + 120}ms` }}
            >
              <div className="w-full h-28 sm:h-36 md:h-32 relative overflow-hidden mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={capability.image}
                  alt={`${capability.title} - ${capability.category}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#1F2A36] mb-1 sm:mb-2 leading-tight">{capability.title}</h3>
              <p className="text-xs sm:text-sm text-[#4A4F55] font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                {capability.description}
              </p>
              <div className="pt-4 border-t border-[#D9D9D9]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#4A4F55] uppercase">
                    {capability.category}
                  </span>
                  <span className="text-sm font-bold text-[#d4af37]">{capability.percentage}%</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#d4af37] h-full rounded-full"
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
