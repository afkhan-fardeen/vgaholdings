import Section from '@/components/Section'

const reasons = [
  {
    icon: 'ion:ios-stopwatch-outline',
    title: 'Project Timeline Recovery',
    description:
      'We have performed countless project recovery missions whereby conventional welding has failed to deliver pipelines to agreed project deadlines. How about 25-km of 12-inch carbon steel with 47 expansion loops and 12 major road crossings? Timeline – 16 days after two days of mobilization.',
  },
  {
    icon: 'ion:soup-can',
    title: 'Oil Production Acceleration',
    description:
      'Many national economies and global Oil & Gas operators are dependent on accelerated production volumes in order to maintain margin over and above their fixed operating costs. Through its fast pipeline construction, Stealth-Lock is an important partner to increasing volume production ready for export.',
  },
  {
    icon: 'ion:flash',
    title: 'Faster Flow-Line Development',
    description:
      'If you consider that with welding, it might take a four-year contract to complete a gathering network comprising of over 300 hook ups. Then, consider Stealth-Lock that performed its scope in 14 months! Substantial operational cost savings, not to mention the hydrocarbon production brought forward.',
  },
  {
    icon: 'ion:android-people',
    title: 'Project & Programme Management',
    description:
      'We are a group of multi-skilled and diverse business advisors experienced in global markets, specifically the Middle East. Our practitioners have worked in the United States, Europe, and across the Middle East in Finance/Banking, Oil, Gas & Energy, Transaction Advisory, Process Improvement and Project & Programme Management.',
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
                <iconify-icon icon={reason.icon} width="48" height="48" stroke-width="1.5" className="sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-[#1F2A36] mb-2 sm:mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4A4F55] font-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
    </Section>
  )
}
