import Section from '@/components/Section'

const services = [
  {
    icon: 'solar:chart-2-linear',
    title: 'Analytics',
    description: 'Transforming large data sets into actionable insights.',
  },
  {
    icon: 'solar:palette-linear',
    title: 'Design',
    description: 'Planning and engineering safe, interactive systems.',
  },
  {
    icon: 'solar:presentation-graph-linear',
    title: 'Consulting',
    description: 'Driving performance improvement across organizations.',
  },
  {
    icon: 'solar:dollar-linear',
    title: 'Fair Profits',
    description: 'Sustainable growth without compromise.',
  },
  {
    icon: 'solar:check-circle-linear',
    title: 'Best Practice',
    description: 'Embedded in everything we build and deliver.',
  },
  {
    icon: 'solar:settings-linear',
    title: 'Implementation',
    description: 'Turning strategy into execution through integrated services.',
  },
  {
    icon: 'solar:hand-shake-linear',
    title: 'Enabling Partnerships',
    description: 'Joint ventures, licensing, acquisitions.',
  },
  {
    icon: 'solar:chart-square-linear',
    title: 'Adding Value',
    description: 'For stakeholders, communities, and families.',
  },
]

export default function Services() {
  return (
    <Section id="services">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-4 animate-fade-up anim-delay-100">Our Services</h2>
          <p className="text-base sm:text-lg font-light text-[#4A4F55] max-w-3xl">
            We operate with responsibility—to our clients, communities, and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D9D9D9] border border-[#D9D9D9]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 hover:bg-white transition-colors duration-300 group animate-scale-in"
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
