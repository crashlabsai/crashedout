import { createServerFileRoute } from '@tanstack/react-start/server'
import { loadMishapsData } from '@/lib/mishaps-data'

export const ServerRoute = createServerFileRoute('/api/mishaps').methods({
  GET: () => {
    const { mishaps } = loadMishapsData()

    return new Response(JSON.stringify(mishaps), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600, public',
        'Access-Control-Allow-Origin': '*',
      },
    })
  },
})
