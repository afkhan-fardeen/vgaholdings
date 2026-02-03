import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[#4A4F55]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <iconify-icon
                icon="solar:alt-arrow-right-linear"
                width="12"
                height="12"
                className="mx-1 sm:mx-2 text-[#D9D9D9] sm:w-4 sm:h-4"
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#d4af37] transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#1F2A36] font-medium truncate max-w-[200px] sm:max-w-none">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
