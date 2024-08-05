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
        'bg-zinc-50 border border-zinc-300 rounded-xl shadow-sm',
        'hover:shadow-md hover:border-indigo-500',
      )}
      {...rest}
    >
      <div className="bg-zinc-200 w-full h-auto aspect-video">
        <img
          src={window.location.href + imageUrl}
          className="w-full h-auto object-cover aspect-video"
          alt={`Imagem do projeto ${name}`}
        />
      </div>
      <p className="block p-2 text-left truncate text-ellipsis w-full border-t text-base border-t-zinc-300">
        {name}
      </p>
    </button>
  )
}
