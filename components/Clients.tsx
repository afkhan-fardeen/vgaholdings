import Image from 'next/image'
import Section from '@/components/Section'

const clients = [
  { name: 'ADNOC', logo: '/images/ADNOC.png' },
  { name: 'Bapco', logo: '/images/Bapco.jpg' },
  { name: 'GALFAR', logo: '/images/GALFAR.png' },
  { name: 'PDO', logo: '/images/PDO.png' },
  { name: 'TENARIS', logo: '/images/TENARIS.png' },
  { name: 'RAFCO', logo: '/images/RAFCO.png' },
  { name: 'OXY', logo: '/images/OXY.png' },
]

export default function Clients() {
  return (
    <Section id="clients">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-8 sm:mb-12 text-center animate-fade-up anim-delay-100">
          Meet Our Clients
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative h-10 w-20 sm:h-12 sm:w-24 md:h-16 md:w-32 animate-scale-in"
              style={{ animationDelay: `${index * 60 + 120}ms` }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
    </Section>
  )
}
