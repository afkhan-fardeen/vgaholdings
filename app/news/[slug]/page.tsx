import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getNewsArticle } from '@/data/news'

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace('www.', '')

    if (host === 'youtu.be') {
      const id = parsed.pathname.replace('/', '')
      return id ? `https://www.youtube.com/embed/${id}` : url
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = parsed.searchParams.get('v')
      return id ? `https://www.youtube.com/embed/${id}` : url
    }
  } catch {
    return url
  }

  return url
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const news = getNewsArticle(params.slug)

  if (!news) {
    return {
      title: 'News Not Found',
    }
  }

  return {
    title: news.title,
    description: news.content[0]?.substring(0, 160) || '',
    openGraph: {
      title: news.title,
      description: news.content[0]?.substring(0, 160) || '',
      images: (news.images.length ? news.images : [news.image]).map((img) => ({
        url: img,
        alt: news.title,
      })),
    },
  }
}

export default function NewsPage({ params }: { params: { slug: string } }) {
  const news = getNewsArticle(params.slug)

  if (!news) {
    notFound()
  }

  const videoEmbedUrl = news.videoUrl ? getYouTubeEmbedUrl(news.videoUrl) : null
  const imageCount = news.images.length
  const gridClass =
    imageCount <= 1
      ? ''
      : imageCount === 2
        ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8'
        : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8'
  const itemClass = imageCount <= 1 ? 'relative w-full aspect-[16/9]' : 'relative w-full aspect-[4/3]'

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/#news' },
    { label: news.title },
  ]

  return (
    <>
      <Header />
      <main>
        <article className="min-h-[100svh] snap-center py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={breadcrumbs} />

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-[#1F2A36] mb-6 sm:mb-8 leading-tight">
              {news.title}
            </h1>

          {/* News Images */}
          {imageCount > 0 ? (
            <div className={gridClass || 'mb-6 sm:mb-8'}>
              {news.images.map((image, index) => (
                <div key={index} className={itemClass}>
                  <Image
                    src={image}
                    alt={`${news.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes={
                      imageCount <= 1
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px'
                        : '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                    }
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          ) : null}

          {videoEmbedUrl ? (
            <div className="relative w-full aspect-video mb-6 sm:mb-8">
              <iframe
                src={videoEmbedUrl}
                title={`${news.title} Video`}
                className="absolute inset-0 w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}

          {/* News Content */}
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            {news.content.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base md:text-lg text-[#4A4F55] font-light leading-relaxed mb-4 sm:mb-6">
                {paragraph}
              </p>
            ))}
          </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#D9D9D9] flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors"
              >
                <iconify-icon icon="solar:home-2-linear" stroke-width="1.5" width="16" height="16" className="sm:w-5 sm:h-5" />
                Back to Home
              </Link>
              <Link
                href="/#news"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors"
              >
                <iconify-icon icon="solar:arrow-left-linear" stroke-width="1.5" width="16" height="16" className="sm:w-5 sm:h-5" />
                Back to All News
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
