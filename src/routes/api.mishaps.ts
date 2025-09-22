import { createServerFileRoute } from '@tanstack/react-start/server'
import { readFileSync } from 'fs'
import { join } from 'path'
import { Mishap } from '@/types'

function loadMishapsData(): Mishap[] {
  const filePath = join(process.cwd(), 'src', 'data', 'mishaps.json')
  const data = JSON.parse(readFileSync(filePath, 'utf-8'))

  return data
}

export const ServerRoute = createServerFileRoute('/api/mishaps').methods({
  GET: () => {
    const mishaps = loadMishapsData()

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
