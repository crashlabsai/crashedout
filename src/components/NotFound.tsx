import { Link } from '@tanstack/react-router'

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
          <Link
            to="/"
            className="block w-full bg-background border-4 border-border px-6 py-3 font-bold text-foreground hover:bg-secondary transition-colors duration-200 shadow-[4px_4px_0px_0px_theme(colors.foreground)]"
          >
            BACK
          </Link>

          <a
            href="https://github.com/crashlabs/ai-mishaps"
            className="block w-full bg-primary border-4 border-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-[4px_4px_0px_0px_theme(colors.foreground)]"
          >
            REPORT THIS MISHAP
          </a>
        </div>
      </div>
    </div>
  )
}
