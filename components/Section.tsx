import type { ReactNode } from 'react'
import { forwardRef } from 'react'

type Props = {
  id?: string
  className?: string
  containerClassName?: string
  fullWidth?: boolean
  children: ReactNode
}

const Section = forwardRef<HTMLElement, Props>(function Section(
  { id, className = '', containerClassName = '', fullWidth = false, children }: Props,
  ref
) {
  const containerBaseClass = fullWidth ? 'w-full px-0' : 'w-full max-w-7xl mx-auto px-4 sm:px-6'

  const hasBgColor = className.includes('bg-')
  const baseClasses = `min-h-[100svh] flex items-center py-12 sm:py-16 md:py-24 scroll-mt-16 ${hasBgColor ? '' : 'bg-white'} ${className}`.trim()

  return (
    <section
      ref={ref}
      id={id}
      className={baseClasses}
    >
      <div className={`${containerBaseClass} ${containerClassName}`.trim()} style={{ minHeight: containerClassName.includes('h-full') ? '100%' : undefined }}>{children}</div>
    </section>
  )
})

Section.displayName = 'Section'

export default Section
