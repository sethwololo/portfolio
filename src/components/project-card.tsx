import type { Component } from 'solid-js'

import { cn } from '../utils/cn'

interface ProjectCardProps {
  name: string
  imageUrl: string
  onClick: () => void
  'aria-label'?: string
}

export const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <button
      type="button"
      class={cn(
        'flex flex-col overflow-hidden cursor-pointer transition-colors',
        'bg-zinc-50 border border-zinc-300 rounded-xl shadow-sm',
        'hover:shadow-md hover:border-indigo-500',
      )}
      {...props}
    >
      <div class="bg-zinc-200 w-full h-auto aspect-video">
        <img
          src={window.location.href + props.imageUrl}
          class="w-full h-auto object-cover aspect-video"
          alt={`Imagem do projeto ${props.name}`}
        />
      </div>
      <p class="block p-2 text-left truncate text-ellipsis w-full border-t text-base border-t-zinc-300">
        {props.name}
      </p>
    </button>
  )
}
