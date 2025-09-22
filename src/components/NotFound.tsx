import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* AI MISHAPS Logo */}
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="AI Mishaps Logo"
            className="w-48 h-48 mx-auto"
          />
        </div>

        <div className="mb-6">
          <h1 className="font-heading text-8xl font-bold text-foreground mb-2 glitch-text">
            404
          </h1>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            PAGE NOT FOUND
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page seems to have experienced its own mishap.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/" className="block">
            <Button className="w-full">BACK</Button>
          </Link>

          <a href="https://github.com/crashlabsai/ai-mishaps" className="block">
            <Button variant="inverse" className="w-full">
              REPORT THIS MISHAP
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
