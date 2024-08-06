import {
  TbBrandGithub,
  TbCode,
  TbLink,
  TbLinkOff,
  TbStack,
  TbX,
} from 'solid-icons/tb'
import { type Component } from 'solid-js'

import { baseURL } from '../utils/baseURL'
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
          'flex w-full max-w-[calc(100%-1rem)] flex-col overflow-hidden md:max-w-[680px]',
          'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'rounded-2xl border border-zinc-300 bg-zinc-50 shadow-2xl',
        ])}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.currentTarget.closest('dialog')?.close()
          }}
          class="absolute right-3 top-3 cursor-pointer rounded-md bg-zinc-50 p-1 text-lg text-zinc-700 transition-colors hover:bg-indigo-500 hover:text-zinc-50"
        >
          <TbX />
        </button>

        <div class="aspect-video h-auto w-full border-b border-b-zinc-300 bg-zinc-200">
          <img
            class="aspect-video h-auto w-full object-cover"
            src={baseURL + selectedProject()?.image}
            alt={`Imagem demonstrativa do projeto "${selectedProject()?.name}"`}
          />
        </div>

        <div class="flex flex-col gap-4 px-4 pb-8 pt-4">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 text-xl sm:text-3xl">
              {selectedProject()?.url === '' ? (
                <TbLinkOff size={18} class="text-zinc-700" />
              ) : (
                <TbLink size={18} class="text-zinc-700" />
              )}
              <h1 class="inline-flex flex-1 text-pretty font-bold">
                {selectedProject()?.url === '' ? (
                  selectedProject()?.name
                ) : (
                  <a
                    href={selectedProject()?.url}
                    target="_blank"
                    rel="noreferrer"
                    class="decoration-indigo-500 underline-offset-2 hover:underline"
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
                  'block aspect-square w-fit rounded border border-transparent bg-indigo-100 p-1.5 text-indigo-600 transition-colors',
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
          <div class="inline-flex items-center gap-2 text-indigo-600">
            <TbStack size={18} />
            <small class="text-sm italic">{selectedProject()?.stack}</small>
          </div>

          <div class="flex gap-2 text-zinc-600">
            <TbCode size={18} class="shrink-0" />
            <p class="max-w-prose text-base sm:text-lg">
              {selectedProject()?.description}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  )
}
