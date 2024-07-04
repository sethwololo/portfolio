import { cn } from '../utils/cn'

interface ProjectCardProps {
  name: string
  imageUrl: string
  onClick: () => void
  'aria-label'?: string
}

export function ProjectCard({ name, imageUrl, ...rest }: ProjectCardProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex flex-col overflow-hidden cursor-pointer transition-colors',
        'bg-stone-50 border border-stone-300 rounded-xl shadow-sm',
        'hover:shadow-md hover:border-viridian-green-500',
      )}
      {...rest}
    >
      <div className="bg-stone-200 w-full h-auto aspect-video">
        <img
          src={imageUrl}
          className="w-full h-auto object-cover aspect-video"
        />
      </div>
      <p className="block p-2 text-left truncate text-ellipsis w-full border-t text-base border-t-stone-300">
        {name}
      </p>
    </button>
  )
}
