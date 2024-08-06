import { type Component, type JSX } from 'solid-js'

import { cn } from '../utils/cn'

const Root: Component<JSX.HTMLAttributes<'section'>> = (props) => {
  return (
    <section class={cn('flex flex-col gap-4', props.class)}>
      {props.children}
    </section>
  )
}

const Title: Component<{ children: JSX.Element }> = (props) => {
  return (
    <h2
      class="leading-none text-xl sm:text-2xl font-bold focus-visible:outline-0 focus-visible:underline focus-visible:decoration-indigo-500 underline-offset-8"
      tabIndex={0}
    >
      <span
        class="font-bold text-indigo-500 select-none leading-none"
        aria-hidden
      >
        ❯{' '}
      </span>
      {props.children}
    </h2>
  )
}

const Text: Component<{ children: JSX.Element }> = (props) => {
  return (
    <p class="text-md sm:text-lg text-pretty max-w-[80ch] pl-1 text-zinc-600">
      {props.children}
    </p>
  )
}

export { Root, Title, Text }
