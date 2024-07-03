import { ArrowSquareOut, GithubLogo, X } from '@phosphor-icons/react'

import { cn } from '../utils/cn'

interface ProjectModalProps {
  ref: React.RefObject<HTMLDialogElement | null>
  project:
    | {
        name: string
        description: string
        link: string
        githubLink?: string
      }
    | undefined
}

export function ProjectModal({ ref }: ProjectModalProps) {
  const dialogRef = ref

  const closeModal = () => {
    dialogRef.current?.close()
  }

  return (
    <dialog
      ref={dialogRef}
      className={cn([
        'backdrop:bg-black/30 backdrop:backdrop-blur-md',
        'open:animate-fade-in open:backdrop:animate-fade-in',
      ])}
      onClick={(e) => e.currentTarget.close()}
    >
      <div
        className={cn([
          'max-w-[600px] w-full flex flex-col overflow-hidden',
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'bg-stone-50 shadow-2xl rounded-xl border border-stone-300 text-stone-800',
        ])}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 rounded-md bg-stone-50 p-1   text-lg cursor-pointer"
        >
          <X weight="bold" />
        </button>

        <div className="w-full h-auto bg-stone-200 aspect-video" />

        <div className="px-4 pt-4 pb-8 flex flex-col gap-4">
          <div className="flex gap-2 justify-between items-center">
            <a
              href="#link"
              className="inline-flex items-center gap-1 text-3xl hover:underline"
            >
              <h1 className="font-bold">Projeto Selecionado</h1>
              <ArrowSquareOut size={20} />
            </a>

            <a
              href="#git"
              className="block p-1.5 text-stone-800 bg-stone-100 w-fit aspect-square border border-transparent rounded hover:border-stone-400 transition-colors"
              title="Abrir no GitHub"
            >
              <GithubLogo size={24} />
            </a>
          </div>

          <small className="text-sm italic text-stone-700">
            Typescript, React, Webpack
          </small>

          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            saepe dolor fuga maiores rerum quae quibusdam, necessitatibus
            deserunt quos! Sunt voluptatibus neque nesciunt iusto nulla officiis
            ratione. Nulla, ipsum consequuntur.
          </p>
        </div>
      </div>
    </dialog>
  )
}
