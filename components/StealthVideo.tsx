import Image from 'next/image'
import Section from '@/components/Section'

export default function StealthVideo() {
  return (
    <Section id="stealth-video">
      <div className="bg-white shadow-[0_0_20px_rgba(15,23,42,0.10)] rounded-md px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] bg-[#E5E7EB] w-full overflow-hidden relative mt-4 sm:mt-0 shadow-[0_4px_20px_rgba(15,23,42,0.15)] rounded-md">
              <Image
                src="/images/stealth1.png"
                alt="Stealth-Lock"
                fill
                className="object-cover parallax"
                data-parallax="0.06"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4 sm:mb-6 text-center md:text-left">
              Technology
            </span> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-4 parallax-text text-center md:text-left">
              Stealth-Lock - The fastest mechanical pipeline in the world
            </h2>
            <div className="flex items-center justify-center mt-6 sm:mt-8">
              <a
                href="https://www.youtube.com/watch?v=jvobKDCtljA&t=1s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 hover:scale-105 transition-transform rounded-full shadow-lg"
                style={{ backgroundColor: '#F5F6F7' }}
                aria-label="Watch Stealth-Lock video on YouTube"
              >
                <iconify-icon icon="mdi:youtube" width="80" height="80" className="sm:w-12 sm:h-12" style={{ color: '#FF0000' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
