import { createServerFileRoute } from '@tanstack/react-start/server'
import { loadMishapsData } from '@/lib/mishaps-data'

export const ServerRoute = createServerFileRoute('/api/mishaps/$slug').methods({
  GET: ({ params }) => {
    const slug = params.slug
    const mishapMap = loadMishapsData().mishapMap

    const mishap = mishapMap.get(slug)

    if (!mishap) {
      return new Response(JSON.stringify({ error: 'Mishap not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(JSON.stringify(mishap), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600, public',
        'Access-Control-Allow-Origin': '*',
      },
    })
  },
})
