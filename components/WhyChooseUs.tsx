import Section from '@/components/Section'

const reasons = [
  {
    icon: 'solar:clock-circle-linear',
    title: 'Project Timeline Recovery',
    description:
      'We have delivered complex pipeline projects where conventional methods failed—achieving record timelines, including 25 km of 12-inch carbon steel, 47 expansion loops, and 12 major road crossings. Delivered in 16 days after mobilization.',
  },
  {
    icon: 'solar:rocket-linear',
    title: 'Oil Production Acceleration',
    description:
      'By dramatically reducing pipeline construction timelines, our solutions enable operators to accelerate production, increase export readiness, and protect margins against fixed operating costs.',
  },
  {
    icon: 'solar:lightning-linear',
    title: 'Faster Flow-Line Development',
    description:
      'Projects that traditionally take years can be delivered in months—resulting in significant cost savings, earlier hydrocarbon production, and reduced operational risk.',
  },
  {
    icon: 'solar:users-group-rounded-linear',
    title: 'Project & Programme Management',
    description:
      'Our experienced advisors manage complex, multi-stakeholder projects across regions, ensuring governance, delivery certainty, and operational excellence.',
  },
]

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] animate-fade-up anim-delay-100 parallax-text">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 90 + 120}ms` }}>
              <div className="mb-3 sm:mb-4 md:mb-6 text-[#d4af37]">
                <iconify-icon icon={reason.icon} width="24" height="24" stroke-width="1.5" className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#1F2A36] mb-2 sm:mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#4A4F55] font-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
    </Section>
  )
}
