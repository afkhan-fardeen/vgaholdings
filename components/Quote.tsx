import Image from 'next/image'
import Section from '@/components/Section'

export default function Quote() {
  return (
    <Section fullWidth containerClassName="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="bg-white shadow-[0_4px_20px_rgba(15,23,42,0.10)] rounded-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
          <div className="relative w-full bg-[#E5E7EB] overflow-hidden min-h-[300px] max-md:min-h-[250px]">
            <Image
              src="/images/infinite.png"
              alt="Infinite"
              fill
              className="object-cover max-md:object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="text-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 flex flex-col justify-center">
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
      </div>
    </Section>
  )
}
