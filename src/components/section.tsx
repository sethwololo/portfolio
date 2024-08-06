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
      class="text-xl font-bold leading-none underline-offset-8 focus-visible:underline focus-visible:decoration-indigo-500 focus-visible:outline-0 sm:text-2xl"
      tabIndex={0}
    >
      <span
        class="select-none font-bold leading-none text-indigo-500"
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
    <p class="text-md max-w-[80ch] text-pretty pl-1 text-zinc-600 sm:text-lg">
      {props.children}
    </p>
  )
}

export { Root, Title, Text }
