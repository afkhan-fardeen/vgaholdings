import Image from 'next/image'
import Section from '@/components/Section'

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="w-full md:w-1/2">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4 sm:mb-6 animate-fade-up">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-4 animate-fade-up anim-delay-100 parallax-text">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-[#4A4F55] leading-relaxed mb-3 sm:mb-4 md:mb-6">
            VGA was established in 2014 in the Kingdom of Bahrain. We engage in a variety of sectors, such as Brokerage, Consultancy, Chemical Distribution, Oil and Gas Pipeline Services and various other investment portfolios.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light text-[#4A4F55] leading-relaxed">
            Goal setting is a powerful process for thinking about your ideal future and for motivating yourself to turn your vision of this future into reality, and VGA has the skills and the knowledge to help you do so.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#1F2A36] mt-3 sm:mt-4 md:mt-6">The VGA Team</p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] bg-[#E5E7EB] w-full overflow-hidden relative mt-4 sm:mt-0 animate-scale-in anim-delay-200">
            <Image
              src="/images/sections/about/mtower.jpg"
              alt="M Tower building"
              fill
              className="object-cover parallax"
              data-parallax="0.06"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
