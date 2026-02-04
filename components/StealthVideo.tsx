import Image from 'next/image'
import Section from '@/components/Section'

export default function StealthVideo() {
  return (
    <Section id="stealth-video" className="py-0" fullWidth containerClassName="max-w-none w-full px-0 sm:px-0 mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="relative w-full min-h-[40vh] md:min-h-[70svh] bg-[#E5E7EB] overflow-hidden">
          <Image
            src="/images/yt.png"
            alt="YouTube"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
        <div className="px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#1F2A36] leading-tight mb-4 sm:mb-6 text-center md:text-left animate-fade-up anim-delay-100 parallax-text">
            Stealth-Lock - The fastest mechanical pipeline in the world
          </h2>
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="https://www.youtube.com/watch?v=jvobKDCtljA&t=1s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:scale-105 transition-transform"
              aria-label="Watch Stealth-Lock video on YouTube"
            >
              <iconify-icon icon="mdi:youtube" width="24" height="24" className="text-[#d4af37] sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
