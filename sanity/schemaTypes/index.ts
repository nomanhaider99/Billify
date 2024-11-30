import { type SchemaTypeDefinition } from 'sanity'
import { service } from '../service'
import { homepage } from '../homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, homepage],
}
