import Image from 'next/image'
import Section from '@/components/Section'

export default function Quote() {
  return (
    <Section fullWidth containerClassName="max-w-none w-full px-0 sm:px-0 mx-0">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
        <div className="relative w-full h-full min-h-[100svh] bg-[#E5E7EB] overflow-hidden">
          <Image
            src="/images/infinite.png"
            alt="Infinite"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
        <div className="text-center px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 flex flex-col justify-center">
          <div className="mb-4 sm:mb-6">
            <iconify-icon icon="mdi:infinity" width="60" height="60" className="sm:w-10 sm:h-10 md:w-12 md:h-12" style={{ color: '#d4af37' }} />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#1F2A36] leading-relaxed mb-4 sm:mb-6 italic">
            Don't get wrapped up in an infinite loop. Life is short so do not waste it, live it, breathe it, love it. Don't be scared to fail as failure will only make you stronger.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]/60" aria-hidden="true" />
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#d4af37] font-gloria">Terry Antoniadis</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
