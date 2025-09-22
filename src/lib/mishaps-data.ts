import { readFileSync, statSync } from 'fs'
import { join } from 'path'
import { Mishap } from '@/types'

let cachedMishaps: Mishap[] | null = null
let mishapMap: Map<string, Mishap> | null = null
let lastModified: number | null = null

export function loadMishapsData(): {
  mishaps: Mishap[]
  mishapMap: Map<string, Mishap>
} {
  const filePath = join(process.cwd(), 'src', 'data', 'mishaps.json')
  const stats = statSync(filePath)
  const currentModified = stats.mtime.getTime()

  if (cachedMishaps && mishapMap && lastModified === currentModified) {
    return { mishaps: cachedMishaps, mishapMap }
  }

  const data = JSON.parse(readFileSync(filePath, 'utf-8'))
  const slugMap = new Map<string, Mishap>()

  data.forEach((mishap: Mishap) => {
    slugMap.set(mishap.slug, mishap)
  })

  cachedMishaps = data
  mishapMap = slugMap
  lastModified = currentModified

  return { mishaps: data, mishapMap: slugMap }
}
