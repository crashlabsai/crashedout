import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import MishapsGrid from '@/components/MishapsGrid'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <MishapsGrid />
      <Footer />
    </div>
  )
}
