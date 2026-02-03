import Section from '@/components/Section'

export default function Quote() {
  return (
    <Section containerClassName="max-w-4xl text-center">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <iconify-icon icon="solar:quote-up-linear" width="32" height="32" className="text-[#d4af37] sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#1F2A36] leading-relaxed mb-3 sm:mb-4 md:mb-6 italic px-2">
          Don't get wrapped up in an infinite loop. Life is short so do not waste it, live it, breathe it, love it. Don't be scared to fail as failure will only make you stronger.
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-[#4A4F55]">Terry Antoniadis</p>
    </Section>
  )
}
