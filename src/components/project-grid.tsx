import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import {
  type ButtonHTMLAttributes,
  Suspense,
  useContext,
  useRef,
  useState,
} from 'react'

import { ProjectsContext } from '../contexts/ProjectsContext'
import { cn } from '../utils/cn'
import { ProjectCard } from './project-card'
import { ProjectModal } from './project-modal'

const PgButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    type="button"
    className={cn(
      'flex items-center aspect-square p-2 rounded-full cursor-pointer bg-transparent',
      'transition-colors text-zinc-800 hover:bg-zinc-200 disabled:bg-transparent',
      'disabled:opacity-50',
    )}
  />
)

export function ProjectGrid() {
  const projects = useContext(ProjectsContext)

  const modalRef = useRef<HTMLDialogElement>(null)
  const [currentProjectId, setCurrentProjectId] = useState(0)

  const itemsPerPage = 6
  const pages = Math.ceil(projects.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleOpenModal = (projectId: number) => {
    setCurrentProjectId(projectId)
    modalRef.current?.showModal()
  }

  return (
    <div className="flex flex-col gap-4">
      <ProjectModal ref={modalRef} projectId={currentProjectId} />

      <Suspense fallback="Carregando...">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full">
          {projects
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => (
              <ProjectCard
                key={`project-${item.id}-card`}
                name={item.name}
                onClick={() => handleOpenModal(item.id)}
                imageUrl={item.image}
                aria-label={`Card do projeto ${item.name}`}
              />
            ))}
        </div>

        <nav aria-label="Paginação">
          <ul className="flex items-center w-fit mx-auto gap-2">
            <li>
              <PgButton
                aria-label="Anterior"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <CaretLeft weight="bold" />
              </PgButton>
            </li>
            <li className="text-base">
              <label className="sr-only" htmlFor="pagination-select">
                Página selecionada:
              </label>
              <select
                id="pagination-select"
                className="appearance-none rounded-md px-3 py-1 border border-indigo-400 bg-transparent text-base focus:outline-0 focus-visible:outline-2"
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
              >
                {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                  <option
                    value={page}
                    key={`pagination-option-${page}`}
                    className="bg-zinc-50 text-zinc-800"
                  >
                    {page}
                  </option>
                ))}
              </select>{' '}
              de {pages}
            </li>
            <li>
              <PgButton
                aria-label="Próximo"
                onClick={handleNextPage}
                disabled={currentPage === pages}
              >
                <CaretRight weight="bold" />
              </PgButton>
            </li>
          </ul>
        </nav>
      </Suspense>
    </div>
  )
}
