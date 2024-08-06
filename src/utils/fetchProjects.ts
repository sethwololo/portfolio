import axios from 'axios'

import { baseURL } from './baseURL'

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
  const response = await axios.get<Project[]>(baseURL + '/projects.json')
  return response.data
}
