
import { struct } from '../../..'

export const Struct = struct({
  title: 'string',
  tags: ['string'],
})

export const data = {
  title: 'hello world',
  tags: [false],
}

export const error = {
  code: 'element_invalid',
  type: 'string',
  path: ['tags', 0],
  index: 0,
  value: false,
}
