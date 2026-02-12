import Section from '@/components/Section'

const services = [
  {
    icon: 'ion:ios-pie-outline',
    title: 'Analytics',
    description: 'Involves sifting through massive data sets to discover, interpret, and share new insights and knowledge.',
  },
  {
    icon: 'ion:ios-basketball-outline',
    title: 'Design',
    description: 'The process of envisioning and planning the creation of interactive and safe systems.',
  },
  {
    icon: 'ion:ios-monitor-outline',
    title: 'Consulting',
    description: 'Offering advice and our expertise to client organisations to help them improve their business performance.',
  },
  {
    icon: 'mdi:currency-usd',
    title: 'Fair Profits',
    description: 'We grow businesses to profit in fair and sustainable ways.',
  },
  {
    icon: 'ion:ios-checkmark-empty',
    title: 'Best Practice',
    description: 'Is within our DNA in every thing we say and make.',
  },
  {
    icon: 'ion:android-alarm-clock',
    title: 'Implementation',
    description: 'Having the right integrated services resources in putting a decision or plan into effect.',
  },
  {
    icon: 'ion:ios-people',
    title: 'Enabling Partners',
    description: 'We join hands for JVs, licensing, acquisitions and more.',
  },
  {
    icon: 'ion:cash',
    title: 'Adding Value',
    description: 'To stakeholders, communities and the families that rely on us.',
  },
]

export default function Services() {
  return (
    <Section id="services">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          {/* <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            Capabilities
          </span> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#d4af37] mb-4 animate-fade-up anim-delay-100 parallax-text">Our Services</h2>
          <p className="text-sm sm:text-base font-light text-[#4A4F55] max-w-4xl mx-auto leading-relaxed">
            We carry your energy in safe, reliable and responsible ways. We are committed to the communities to which we serve on land and sea. We are part of those communities and as such, we fulfil our obligations to protect and vouch safe all people, all wildlife and our globally shared environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 hover:bg-white transition-all duration-300 group shadow-[0_0_20px_rgba(15,23,42,0.10)] hover:shadow-[0_0_20px_rgba(15,23,42,0.12)] rounded-md animate-scale-in"
              style={{ animationDelay: `${index * 80 + 100}ms` }}
            >
              <div className="mb-3 sm:mb-4 md:mb-6 text-[#d4af37] group-hover:text-[#d4af37] transition-colors">
                <iconify-icon icon={service.icon} width="48" height="48" stroke-width="1.5" className="sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#1F2A36] mb-2 sm:mb-3 leading-tight">{service.title}</h3>
              <p className="text-sm sm:text-base text-[#4A4F55] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
    </Section>
  )
}
