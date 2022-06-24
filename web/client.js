import sanityClient from '@sanity/client'

export default sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2022-06-24', // use a UTC date string
  token: process.env.SANITY_API_TOKEN,
})