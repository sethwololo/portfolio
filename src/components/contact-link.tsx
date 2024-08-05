interface ContactLinkProps {
  icon: React.ReactNode
  title: string
  linkTitle: string
  linkHref: string
}

export function ContactLink({
  icon,
  title,
  linkTitle,
  linkHref,
}: ContactLinkProps) {
  return (
    <div className="flex items-center gap-2 text-base">
      <span className="shrink-0" aria-hidden>
        {icon}
      </span>
      <p className="">
        <b>{title}: </b>
        <a
          target="_blank"
          rel="noreferrer"
          href={linkHref}
          className="text-indigo-600 hover:underline underline-offset-4 break-all"
        >
          {linkTitle}
        </a>
      </p>
    </div>
  )
}
