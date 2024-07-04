export function SectionText({ children }: React.PropsWithChildren) {
  return (
    <p className="text-md sm:text-lg text-pretty max-w-[80ch] pl-1 text-stone-600">
      {children}
    </p>
  )
}
