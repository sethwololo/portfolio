import type { Component, JSX } from 'solid-js'

interface ContactLinkProps {
  icon: JSX.Element
  title: string
  linkTitle: string
  linkHref: string
}

export const ContactLink: Component<ContactLinkProps> = (props) => {
  return (
    <div class="flex items-center gap-2 text-base">
      <span class="shrink-0" aria-hidden>
        {props.icon}
      </span>
      <p class="">
        <b>{props.title}: </b>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.linkHref}
          class="break-all text-indigo-600 underline-offset-4 hover:underline"
        >
          {props.linkTitle}
        </a>
      </p>
    </div>
  )
}
