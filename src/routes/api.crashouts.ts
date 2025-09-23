import { createServerFileRoute } from '@tanstack/react-start/server'
import { loadCrashoutsData } from '@/lib/crashouts-data'

export const ServerRoute = createServerFileRoute('/api/crashouts').methods({
  GET: () => {
    const { crashouts } = loadCrashoutsData()

    return new Response(JSON.stringify(crashouts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600, public',
        'Access-Control-Allow-Origin': '*',
      },
    })
  },
})
