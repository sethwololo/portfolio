import { GithubLogo, Link, X } from '@phosphor-icons/react'
import { useLayoutEffect, useRef } from 'react'

export function ProjectModal() {
  const dialog = useRef<HTMLDialogElement>(null)

  useLayoutEffect(() => {
    dialog.current?.showModal()
  }, [dialog])

  const closeModal = () => {
    dialog.current?.close()
  }

  return (
    <dialog
      ref={dialog}
      className="rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden relative shadow-3xl backdrop:bg-black/30 backdrop:backdrop-blur-md"
    >
      <div className="max-w-[600px] w-full ">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 rounded-md bg-gray-100 p-2 text-md cursor-pointer"
        >
          <X weight="bold" />
        </button>

        <div className="w-full h-[300px] bg-green-100" />

        <div className="p-4 flex flex-col gap-1">
          <div className="flex gap-2 justify-between items-center">
            <a href="#link" className="inline-flex items-center gap-2 text-3xl">
              <h1 className="font-bold">Projeto Selecionado</h1>
              <Link size={24} />
            </a>

            <a href="#git" className="block p-2 text-xl bg-gray-100 w-fit ">
              <GithubLogo />
            </a>
          </div>
          <small className="text-sm">Typescript, React, Webpack</small>
          <p className="text-md">
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
