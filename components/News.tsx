import Image from 'next/image'
import Link from 'next/link'
import { newsItems } from '@/data/news'
import Section from '@/components/Section'

export default function News() {
  return (
    <Section id="news">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="block text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-4">
            News
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] animate-fade-up anim-delay-100 parallax-text">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_10px_40px_rgba(15,23,42,0.12)] transition-all duration-300 flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 90 + 120}ms` }}
            >
              <div className="relative w-full h-32 sm:h-36 md:h-40 flex-shrink-0 parallax" data-parallax="0.03">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-medium text-[#1F2A36] mb-2 leading-tight">{item.title}</h3>
                <p className="text-sm sm:text-base text-[#4A4F55] font-light line-clamp-2 mb-3 flex-1">{item.description}</p>
                <div className="mt-auto">
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors"
                  >
                    Read More{' '}
                    <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" width="16" height="16" className="sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
    </Section>
  )
}
