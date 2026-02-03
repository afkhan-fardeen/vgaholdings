import Image from 'next/image'
import Link from 'next/link'
import { newsItems } from '@/data/news'
import Section from '@/components/Section'

export default function News() {
  return (
    <Section id="news">
        <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] animate-fade-up anim-delay-100">Latest News</h2>
        </div>

        <div className="flex flex-col gap-px bg-[#D9D9D9] border border-[#D9D9D9]">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white hover:bg-white p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-4 sm:gap-6 md:items-center justify-between transition-colors animate-scale-in"
              style={{ animationDelay: `${index * 90 + 120}ms` }}
            >
              <div className="flex flex-col sm:flex-row gap-4 md:w-3/4 w-full">
                <div className="relative w-full sm:w-40 md:w-48 lg:w-64 h-40 sm:h-28 md:h-32 lg:h-40 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#1F2A36] mb-2 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#4A4F55] font-light line-clamp-2 sm:line-clamp-none">{item.description}</p>
                </div>
              </div>
              <div className="flex-shrink-0 md:self-center">
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors whitespace-nowrap"
                >
                  Read More{' '}
                  <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" width="16" height="16" className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
    </Section>
  )
}
