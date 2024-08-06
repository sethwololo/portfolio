import axios from 'axios'

export type Project = {
  id: number
  name: string
  url: string
  ghUrl: string
  stack: string
  description: string
  image: string
}

export const fetchProjects = async () => {
  const response = await axios.get<Project[]>(
    window.location.href + '/projects.json',
  )
  return response.data
}
