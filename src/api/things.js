import { api } from './api'

export const createThing = (thing) => {
  return api.post('things', {json: thing}).json()
}

export const listThings = () => {
  return api.get('things').json()
}

