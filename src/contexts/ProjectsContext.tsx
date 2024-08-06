import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export type Project = {
  id: number
  name: string
  url: string
  ghUrl: string
  stack: string
  description: string
  image: string
}

export const ProjectsContext = createContext<Project[]>([])

export const ProjectsProvider = ({ children }: PropsWithChildren) => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(window.location.href + '/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.reverse()))
  }, [])

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  )
}