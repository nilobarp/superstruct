
import { struct } from '../../..'

export const Struct = struct({
  name: 'string',
  age: 'number',
  address: {
    street: 'string',
    city: 'string',
  }
})

export const data = {
  name: 'john',
  age: 42,
  address: {
    street: '123 fake st',
    city: 'springfield',
    state: 'unknown',
  }
}

export const error = {
  code: 'property_unknown',
  path: ['address', 'state'],
  key: 'state',
}
