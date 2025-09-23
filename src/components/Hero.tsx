import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToGrid = () => {
    const gridElement = document.querySelector(
      '[data-section="crashouts-grid"]',
    )
    if (gridElement) {
      gridElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="https://assets.crashedout.ai/background.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-70% to-white to-100%"></div>

      <div className="absolute left-[45%] md:left-[47%] top-[40%]  xl:top-[38%] transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4 ">
        <h1 className="font-heading text-3xl xl:text-5xl text-white font-bold tracking-tight glitch-text">
          Crashed Out
        </h1>
        <div>
          <p className="text-white text-sm sm:text-base xl:text-xl leading-relaxed text-wrap">
            Real AI crash outs, real lessons.
          </p>
        </div>

        <Button size="lg" onClick={scrollToGrid}>
          Explore
        </Button>
        <p className="text-white/80 text-sm md:text-base xl`:text-lg leading-relaxed">
          A project by{' '}
          <a
            href="https://crashlabs.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline"
          >
            CrashLabs
          </a>
        </p>
      </div>
    </section>
  )
}
