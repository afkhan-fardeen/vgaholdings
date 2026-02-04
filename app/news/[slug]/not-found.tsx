import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-medium text-[#1F2A36] mb-4">News Article Not Found</h1>
          <p className="text-lg text-[#4A4F55] mb-8">
            The news article you're looking for doesn't exist.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors"
            >
              <iconify-icon icon="solar:home-2-linear" stroke-width="1.5" />
              Back to Home
            </Link>
            <Link
              href="/#news"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2A36] hover:text-[#d4af37] transition-colors"
            >
              <iconify-icon icon="solar:arrow-left-linear" stroke-width="1.5" />
              Back to News
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
