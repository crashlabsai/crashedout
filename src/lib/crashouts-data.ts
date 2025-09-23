import { readFileSync, statSync } from 'fs'
import { join } from 'path'
import { CrashOut } from '@/types'

let cachedCrashouts: CrashOut[] | null = null
let crashoutsMap: Map<string, CrashOut> | null = null
let lastModified: number | null = null

export function loadCrashoutsData(): {
  crashouts: CrashOut[]
  crashoutsMap: Map<string, CrashOut>
} {
  const filePath = join(process.cwd(), 'src', 'data', 'crashouts.json')
  const stats = statSync(filePath)
  const currentModified = stats.mtime.getTime()

  if (cachedCrashouts && crashoutsMap && lastModified === currentModified) {
    return { crashouts: cachedCrashouts, crashoutsMap }
  }

  const data = JSON.parse(readFileSync(filePath, 'utf-8'))
  const slugMap = new Map<string, CrashOut>()

  data.forEach((crashout: CrashOut) => {
    slugMap.set(crashout.slug, crashout)
  })

  cachedCrashouts = data
  crashoutsMap = slugMap
  lastModified = currentModified

  return { crashouts: data, crashoutsMap: slugMap }
}
