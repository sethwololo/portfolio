import { PropsWithChildren } from 'react'

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2
      className="leading-none text-xl sm:text-2xl font-bold focus-visible:outline-0 focus-visible:underline focus-visible:decoration-indigo-500 underline-offset-8"
      tabIndex={0}
    >
      <span
        className="font-bold text-indigo-500 select-none leading-none"
        aria-hidden
      >
        ❯{' '}
      </span>
      {children}
    </h2>
  )
}
