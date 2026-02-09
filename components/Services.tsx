import Section from '@/components/Section'

const services = [
  {
    icon: 'solar:chart-2-linear',
    title: 'Analytics',
    description: 'Involves sifting through massive data sets to discover, interpret, and share new insights and knowledge.',
  },
  {
    icon: 'solar:palette-linear',
    title: 'Design',
    description: 'The process of envisioning and planning the creation of interactive and safe systems.',
  },
  {
    icon: 'solar:presentation-graph-linear',
    title: 'Consulting',
    description: 'Offering advice and our expertise to client organisations to help them improve their business performance.',
  },
  {
    icon: 'solar:dollar-linear',
    title: 'Fair Profits',
    description: 'We grow businesses to profit in fair and sustainable ways.',
  },
  {
    icon: 'solar:check-circle-linear',
    title: 'Best Practice',
    description: 'Is within our DNA in every thing we say and make.',
  },
  {
    icon: 'solar:settings-linear',
    title: 'Implementation',
    description: 'Having the right integrated services resources in putting a decision or plan into effect.',
  },
  {
    icon: 'solar:hand-shake-linear',
    title: 'Enabling Partners',
    description: 'We join hands for JVs, licensing, acquisitions and more.',
  },
  {
    icon: 'solar:chart-square-linear',
    title: 'Adding Value',
    description: 'To stakeholders, communities and the families that rely on us.',
  },
]

export default function Services() {
  return (
    <Section id="services">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-4 animate-fade-up anim-delay-100 parallax-text">Our Services</h2>
          <p className="text-base sm:text-lg font-light text-[#4A4F55] max-w-4xl mx-auto leading-relaxed">
            We carry your energy in safe, reliable and responsible ways. We are committed to the communities to which we serve on land and sea. We are part of those communities and as such, we fulfil our obligations to protect and vouch safe all people, all wildlife and our globally shared environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 hover:bg-white transition-all duration-300 group shadow-[0_10px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_10px_40px_rgba(15,23,42,0.12)] animate-scale-in"
              style={{ animationDelay: `${index * 80 + 100}ms` }}
            >
              <div className="mb-3 sm:mb-4 md:mb-6 text-[#1F2A36] group-hover:text-[#d4af37] transition-colors">
                <iconify-icon icon={service.icon} width="24" height="24" stroke-width="1.5" className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#1F2A36] mb-2 sm:mb-3 leading-tight">{service.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-[#4A4F55] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
    </Section>
  )
}
