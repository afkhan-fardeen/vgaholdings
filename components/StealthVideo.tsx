import Section from '@/components/Section'

export default function StealthVideo() {
  return (
    <Section id="stealth-video" containerClassName="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-4 sm:mb-6 md:mb-8 leading-tight px-2 animate-fade-up anim-delay-100">
          Stealth-Lock - The fastest mechanical pipeline in the world
        </h2>
        <div className="aspect-video overflow-hidden rounded-sm">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/jvobKDCtljA?start=1"
            title="Stealth-Lock Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
    </Section>
  )
}
