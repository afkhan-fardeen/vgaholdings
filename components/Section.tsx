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
    <section ref={ref} id={id} className={`py-12 sm:py-16 md:py-24 border-b border-[#D9D9D9] bg-white animate-fade-up ${className}`.trim()}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${containerClassName}`.trim()}>{children}</div>
    </section>
  )
})

export default Section
