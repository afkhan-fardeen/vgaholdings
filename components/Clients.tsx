import Image from 'next/image'
import Section from '@/components/Section'

const clients = [
  { name: 'ADNOC', logo: '/images/sections/clients/ADNOC.png' },
  { name: 'Bapco', logo: '/images/sections/clients/Bapco.jpg' },
  { name: 'GALFAR', logo: '/images/sections/clients/GALFAR.png' },
  { name: 'PDO', logo: '/images/sections/clients/PDO.png' },
  { name: 'TENARIS', logo: '/images/sections/clients/TENARIS.png' },
  { name: 'RAFCO', logo: '/images/sections/clients/RAFCO.png' },
  { name: 'OXY', logo: '/images/sections/clients/OXY.png' },
]

export default function Clients() {
  return (
    <Section id="clients">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-8 sm:mb-12 text-center animate-fade-up anim-delay-100 parallax-text">
          Meet Our Clients
        </h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 lg:h-28 lg:w-56 animate-scale-in"
              style={{ animationDelay: `${index * 60 + 120}ms` }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
    </Section>
  )
}
