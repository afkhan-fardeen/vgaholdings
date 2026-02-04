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

  return (
    <section
      ref={ref}
      id={id}
      className={`min-h-[100svh] snap-center [scroll-snap-stop:always] flex items-center py-12 sm:py-16 md:py-24 bg-white scroll-mt-16 sm:scroll-mt-20 ${className}`.trim()}
    >
      <div className={`${containerBaseClass} ${containerClassName}`.trim()}>{children}</div>
    </section>
  )
})

export default Section
