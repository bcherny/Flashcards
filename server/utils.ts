import {createHash} from 'crypto'

export function sha1(s: string): string {
  let hash = createHash('sha1')
  hash.update(s)
  return hash.digest('hex').slice(0, 7)
}
