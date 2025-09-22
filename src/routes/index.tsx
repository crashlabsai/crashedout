import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import MishapsGrid from '@/components/MishapsGrid'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch('/api/mishaps')
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
      <MishapsGrid mishaps={data} />
      <Footer />
    </div>
  )
}
