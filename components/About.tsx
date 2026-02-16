import Image from 'next/image'
import Section from '@/components/Section'

export default function About() {
  return (
    <Section
      id="about"
      containerClassName="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
    >
      <div className="bg-white shadow-[0_8px_30px_rgba(15,23,42,0.12)] rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center p-8 sm:p-10 md:p-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#d4af37] mb-6 text-left">
              Who We Are
            </h2>
            <p className="text-sm sm:text-base font-light text-[#4A4F55] leading-relaxed mb-4 text-left">
              VGA was established in 2014 in the Kingdom of Bahrain. We engage in a variety of sectors, such as Brokerage, Consultancy, Chemical Distribution, Oil and Gas Pipeline Services and various other investment portfolios.
            </p>
            <p className="text-sm sm:text-base font-light text-[#4A4F55] leading-relaxed mb-6 text-left">
              Goal setting is a powerful process for thinking about your ideal future and for motivating yourself to turn your vision of this future into reality, and VGA has the skills and the knowledge to help you do so.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#1F2A36] font-gloria text-left">The VGA Team</p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[4/3] bg-[#E5E7EB] w-full overflow-hidden relative rounded-lg">
              <Image
                src="/images/sections/about/mtower.jpg"
                alt="M Tower building"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 45vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
