import type { Component } from 'solid-js'

import { baseURL } from '../utils/baseURL'
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
        'flex cursor-pointer flex-col overflow-hidden transition-colors',
        'rounded-xl border border-zinc-300 bg-zinc-50 shadow-sm',
        'hover:border-indigo-500 hover:shadow-md',
      )}
      {...props}
    >
      <div class="aspect-video h-auto w-full bg-zinc-200">
        <img
          src={baseURL + props.imageUrl}
          class="aspect-video h-auto w-full object-cover"
          alt={`Imagem do projeto ${props.name}`}
        />
      </div>
      <p class="block w-full truncate text-ellipsis border-t border-t-zinc-300 p-2 text-left text-base">
        {props.name}
      </p>
    </button>
  )
}
