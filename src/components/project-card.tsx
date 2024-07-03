import { cn } from '../utils/cn'

interface ProjectCardProps {
  name: string
  onClick: () => void
  'aria-label'?: string
}

export function ProjectCard({ name, ...rest }: ProjectCardProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex flex-col overflow-hidden cursor-pointer transition-all',
        'bg-stone-50 border border-stone-300 rounded-lg shadow-sm outline-0',
        'hover:shadow-md hover:border-stone-400 focus-visible:outline focus-visible:outline-stone-400 ',
      )}
      {...rest}
    >
      <div className="bg-stone-200 w-full h-auto aspect-video" />
      <span className="p-2 inline-flex">{name}</span>
    </button>
  )
}
