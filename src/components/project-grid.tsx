import { TbChevronLeft, TbChevronRight } from 'solid-icons/tb'
import {
  type Component,
  createMemo,
  createResource,
  createSignal,
  For,
  type JSX,
  Suspense,
} from 'solid-js'

import { cn } from '../utils/cn'
import { fetchProjects } from '../utils/fetchProjects'
import { Modal } from './modal'
import { ProjectCard } from './project-card'

const PageButton: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => (
  <button
    type="button"
    class={cn(
      'flex items-center aspect-square p-2 rounded-full cursor-pointer bg-transparent',
      'transition-colors text-zinc-800 hover:bg-zinc-200 disabled:bg-transparent',
      'disabled:opacity-50',
    )}
    {...props}
  />
)

export type Project = {
  id: number
  name: string
  url: string
  ghUrl: string
  stack: string
  description: string
  image: string
}

export function ProjectGrid() {
  const [currentProjectId, setCurrentProjectId] = createSignal(0)
  const [currentPage, setCurrentPage] = createSignal(1)

  const [data] = createResource(fetchProjects)
  const projects = () => data()?.reverse() || []

  let modalRef!: HTMLDialogElement

  const itemsPerPage = 6 as const

  const handleOpenModal = async (projectId: number) => {
    setCurrentProjectId(projectId)
    modalRef.showModal()
  }

  const numberOfPages = createMemo(() =>
    Math.ceil(projects().length / itemsPerPage),
  )

  const nextPage = () => {
    if (currentPage() < numberOfPages()) {
      setCurrentPage(currentPage() + 1)
    }
  }

  const previousPage = () => {
    if (currentPage() > 1) {
      setCurrentPage(currentPage() - 1)
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= numberOfPages()) {
      setCurrentPage(page)
    }
  }

  return (
    <div class="flex flex-col gap-4">
      <Modal
        ref={modalRef}
        selectedProject={projects().find(({ id }) => id === currentProjectId())}
      />

      <Suspense fallback="Carregando...">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full">
          <For
            each={projects().slice(
              (currentPage() - 1) * itemsPerPage,
              currentPage() * itemsPerPage,
            )}
          >
            {(item) => (
              <ProjectCard
                name={item.name}
                onClick={() => handleOpenModal(item.id)}
                imageUrl={item.image}
                aria-label={`Card do projeto ${item.name}`}
              />
            )}
          </For>
        </div>

        <nav aria-label="Paginação">
          <ul class="flex items-center w-fit mx-auto gap-2">
            <li>
              <PageButton
                aria-label="Anterior"
                onClick={previousPage}
                disabled={currentPage() === 1}
              >
                <TbChevronLeft />
              </PageButton>
            </li>
            <li class="text-base">
              <label class="sr-only" for="pagination-select">
                Página selecionada:
              </label>
              <select
                id="pagination-select"
                class="appearance-none rounded-md px-3 py-1 border border-indigo-400 bg-transparent text-base focus:outline-0 focus-visible:outline-2"
                value={currentPage()}
                onChange={(e) => goToPage(Number(e.target.value))}
              >
                <For
                  each={Array.from(
                    { length: numberOfPages() },
                    (_, i) => i + 1,
                  )}
                >
                  {(page) => (
                    <option value={page} class="bg-zinc-50 text-zinc-800">
                      {page}
                    </option>
                  )}
                </For>
              </select>{' '}
              de {numberOfPages()}
            </li>
            <li>
              <PageButton
                aria-label="Próximo"
                onClick={nextPage}
                disabled={currentPage() === numberOfPages()}
              >
                <TbChevronRight />
              </PageButton>
            </li>
          </ul>
        </nav>
      </Suspense>
    </div>
  )
}
