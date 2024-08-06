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
const prodUrl = 'https://sethwololo.github.io/portfolio' as const
const baseUrl = import.meta.env.DEV ? window.location.href : prodUrl

export const fetchProjects = async () => {
  const response = await axios.get<Project[]>(baseUrl + '/projects.json')
  return response.data
}
