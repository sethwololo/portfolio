import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { type ButtonHTMLAttributes, useRef, useState } from 'react'

import { cn } from '../utils/cn'
import { ProjectCard } from './project-card'
import { ProjectModal } from './project-modal'

const PgButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    type="button"
    className={cn(
      'flex items-center aspect-square p-2 rounded-full cursor-pointer',
      'transition-colors text-stone-800 hover:bg-stone-200',
      'disabled:opacity-50',
    )}
  />
)

export function ProjectGrid() {
  const mockData = Array.from({ length: 20 }, (_, i) => i + 1)

  const modalRef = useRef<HTMLDialogElement>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const pages = Math.ceil(mockData.length / itemsPerPage)

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

  const handleOpenModal = () => {
    modalRef.current?.showModal()
  }

  return (
    <div className="flex flex-col gap-4">
      <ProjectModal ref={modalRef} project={undefined} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full">
        {mockData
          .reverse()
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item) => (
            <ProjectCard
              key={`project-${item}-card`}
              name={`Projeto ${item}`}
              onClick={handleOpenModal}
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
            <span className="sr-only">Página selecionada:</span>
            <select
              className="rounded-md px-2 py-1 border border-stone-400 bg-transparent text-base"
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
            >
              {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                <option
                  value={page}
                  key={`pagination-option-${page}`}
                  className="bg-stone-100 rounded-md border-amber-400"
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
    </div>
  )
}
