export type CrashOut = {
  id: string
  slug: string
  title: string
  description: string
  category: string
  severity: string
  date: string
  company: string
  fullDescription: string
  whatWentWrong: string
  howFixed: string
  sources: {
    title: string
    url: string
  }[]
  lessons: string[]
  timeline: {
    date: string
    event: string
  }[]
  impact: string
}
