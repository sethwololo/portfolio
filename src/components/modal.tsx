import {
  TbBrandGithub,
  TbCode,
  TbLink,
  TbLinkOff,
  TbStack,
  TbX,
} from 'solid-icons/tb'
import { type Component } from 'solid-js'

import { cn } from '../utils/cn'

type SelectedProject = {
  id: number
  name: string
  url?: string
  ghUrl?: string
  stack: string
  description: string
  image: string
}

interface ModalProps {
  ref: HTMLDialogElement
  selectedProject?: SelectedProject
}

export const Modal: Component<ModalProps> = (props) => {
  const selectedProject = () => props.selectedProject

  return (
    <dialog
      ref={props.ref}
      class={cn([
        'backdrop:bg-black/30 backdrop:backdrop-blur-md',
        'open:animate-fade-in open:backdrop:animate-fade-in',
      ])}
      onClick={(e) => e.currentTarget.close()}
      onKeyPress={(e) =>
        (e.key || e.code) === 'Escape' ? e.currentTarget.close() : null
      }
    >
      <div
        class={cn([
          'max-w-[calc(100%-1rem)] md:max-w-[680px] w-full flex flex-col overflow-hidden',
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'bg-zinc-50 shadow-2xl rounded-2xl border border-zinc-300',
        ])}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.currentTarget.closest('dialog')?.close()
          }}
          class="absolute text-zinc-700 top-3 right-3 rounded-md bg-zinc-50 p-1 text-lg cursor-pointer hover:bg-indigo-500 hover:text-zinc-50 transition-colors"
        >
          <TbX />
        </button>

        <div class="w-full h-auto bg-zinc-200 aspect-video border-b border-b-zinc-300">
          <img
            class="w-full h-full object-cover"
            src={window.location.href + selectedProject()?.image}
            alt={`Imagem demonstrativa do projeto "${selectedProject()?.name}"`}
          />
        </div>

        <div class="px-4 pt-4 pb-8 flex flex-col gap-4">
          <div class="flex gap-2 justify-between items-center">
            <div class="flex items-center gap-2 text-xl sm:text-3xl">
              {selectedProject()?.url === '' ? (
                <TbLinkOff size={18} class="text-zinc-700" />
              ) : (
                <TbLink size={18} class="text-zinc-700" />
              )}
              <h1 class="inline-flex font-bold text-pretty flex-1">
                {selectedProject()?.url === '' ? (
                  selectedProject()?.name
                ) : (
                  <a
                    href={selectedProject()?.url}
                    target="_blank"
                    rel="noreferrer"
                    class=" hover:underline decoration-indigo-500 underline-offset-2"
                  >
                    {selectedProject()?.name}
                  </a>
                )}
              </h1>
            </div>
            {selectedProject()?.ghUrl && (
              <a
                href={selectedProject()?.ghUrl}
                class={cn([
                  'block p-1.5 text-indigo-600 bg-indigo-100 w-fit aspect-square border border-transparent rounded transition-colors',
                  'hover:bg-indigo-200 hover:text-indigo-600',
                ])}
                title="Abrir no GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub size={18} />
              </a>
            )}
          </div>
          <div class="inline-flex gap-2 items-center text-indigo-600">
            <TbStack size={18} />
            <small class="text-sm italic ">{selectedProject()?.stack}</small>
          </div>

          <div class="flex gap-2 text-zinc-600">
            <TbCode size={18} class="shrink-0" />
            <p class="text-base sm:text-lg max-w-prose ">
              {selectedProject()?.description}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  )
}
