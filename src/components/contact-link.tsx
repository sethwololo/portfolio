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
    <p className="text-base inline-flex gap-1">
      {icon}
      <b>{title}:</b>{' '}
      <a href={linkHref} className="text-blue-600">
        {linkTitle}
      </a>
    </p>
  )
}
