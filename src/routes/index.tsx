import { createFileRoute } from '@tanstack/react-router'
import CrashOutsGrid from '@/components/CrashOutsGrid'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch('/api/crashouts')
    const data = await response.json()
    return data
  },
  component: App,
})

function App() {
  const data = Route.useLoaderData()
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CrashOutsGrid crashouts={data} />
      <Footer />
    </div>
  )
}
