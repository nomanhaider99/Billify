import { projectId } from '@/sanity/env'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '79kdp4hk',
  dataset: 'production',
  apiVersion: '2024-11-24', 
  useCdn: true 
})

export default client
