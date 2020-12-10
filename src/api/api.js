import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'http://67.205.160.56:3000/api/',
})

