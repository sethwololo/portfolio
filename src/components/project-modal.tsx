import {
  GithubLogo,
  Link,
  LinkBreak,
  Quotes,
  Stack,
  X,
} from '@phosphor-icons/react'
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

import { ProjectsContext } from '../contexts/ProjectsContext'
import { cn } from '../utils/cn'

interface ProjectModalProps {
  projectId: number
}

export const ProjectModal = forwardRef<HTMLDialogElement, ProjectModalProps>(
  ({ projectId }, ref) => {
    const innerRef = useRef<HTMLDialogElement>(null)
    useImperativeHandle(ref, () => innerRef.current!, [])

    const projects = useContext(ProjectsContext)
    const project = useMemo(() => {
      return projects.find((p) => p.id === projectId)
    }, [projectId, projects])

    const closeModal = () => {
      innerRef.current?.close()
    }

    return (
      <dialog
        ref={innerRef}
        className={cn([
          'backdrop:bg-black/30 backdrop:backdrop-blur-md',
          'open:animate-fade-in open:backdrop:animate-fade-in',
        ])}
        onClick={(e) => e.currentTarget.close()}
        data-id=""
      >
        <div
          className={cn([
            'max-w-[calc(100%-1rem)] md:max-w-[680px] w-full flex flex-col overflow-hidden',
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'bg-zinc-50 shadow-2xl rounded-2xl border border-zinc-300',
          ])}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute text-zinc-700 top-3 right-3 rounded-md bg-zinc-50 p-1 text-lg cursor-pointer hover:bg-indigo-500 hover:text-zinc-50 transition-colors"
          >
            <X weight="bold" />
          </button>

          <div className="w-full h-auto bg-zinc-200 aspect-video border-b border-b-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={window.location.href + project?.image}
              alt={`Imagem demonstrativa do projeto "${project?.name}"`}
            />
          </div>

          <div className="px-4 pt-4 pb-8 flex flex-col gap-4">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex items-center gap-2 text-xl sm:text-3xl">
                {project?.url === '' ? (
                  <LinkBreak
                    size={18}
                    weight="regular"
                    className="text-zinc-700"
                  />
                ) : (
                  <Link size={18} weight="regular" className="text-zinc-700" />
                )}
                <h1 className="inline-flex font-bold text-pretty flex-1">
                  {project?.url === '' ? (
                    project?.name
                  ) : (
                    <a
                      href={project?.url}
                      target="_blank"
                      rel="noreferrer"
                      className=" hover:underline decoration-indigo-500 underline-offset-2"
                    >
                      {project?.name}
                    </a>
                  )}
                </h1>
              </div>
              {project?.ghUrl && (
                <a
                  href={project?.ghUrl}
                  className={cn([
                    'block p-1.5 text-indigo-600 bg-indigo-100 w-fit aspect-square border border-transparent rounded transition-colors',
                    'hover:bg-indigo-200 hover:text-indigo-600',
                  ])}
                  title="Abrir no GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo size={18} />
                </a>
              )}
            </div>
            <div className="inline-flex gap-2 items-center text-indigo-600">
              <Stack weight="duotone" size={18} />
              <small className="text-sm italic ">{project?.stack}</small>
            </div>

            <div className="flex gap-2 text-zinc-600">
              <Quotes size={18} weight="duotone" className="shrink-0" />
              <p className="text-base sm:text-lg max-w-prose ">
                {project?.description}
              </p>
            </div>
          </div>
        </div>
      </dialog>
    )
  },
)
