import type { ReactNode } from 'react'
import { forwardRef } from 'react'

type Props = {
  id?: string
  className?: string
  containerClassName?: string
  children: ReactNode
}

const Section = forwardRef<HTMLElement, Props>(function Section(
  { id, className = '', containerClassName = '', children }: Props,
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`min-h-[100svh] snap-start [scroll-snap-stop:always] flex items-center py-12 sm:py-16 md:py-24 border-b border-[#D9D9D9] bg-white animate-fade-up ${className}`.trim()}
    >
      <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 ${containerClassName}`.trim()}>{children}</div>
    </section>
  )
})

export default Section
