import { createServerFileRoute } from '@tanstack/react-start/server'
import { loadCrashoutsData } from '@/lib/crashouts-data'

export const ServerRoute = createServerFileRoute(
  '/api/crashouts/$slug',
).methods({
  GET: ({ params }) => {
    const slug = params.slug
    const crashoutsMap = loadCrashoutsData().crashoutsMap

    const crashout = crashoutsMap.get(slug)

    if (!crashout) {
      return new Response(JSON.stringify({ error: 'Crashout not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    return new Response(JSON.stringify(crashout), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600, public',
        'Access-Control-Allow-Origin': '*',
      },
    })
  },
})
