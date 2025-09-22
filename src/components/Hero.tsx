import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      className="relative px-6 h-screen text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      {/* Gradient overlay to fade the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-70% to-white to-100%"></div>
      {/* Title positioned at top */}
      <div className="absolute top-60 left-[47%] transform -translate-x-1/2">
        <h1 className="font-heading text-5xl text-white font-bold tracking-tight glitch-text">
          Agent Mishaps
        </h1>
        <p className="text-white text-lg leading-relaxed pt-6">
          Mishaps happen. Learn from them.
        </p>
        <Button
          size="lg"
          className="bg-[#C0C0C0] text-black font-sans text-sm px-8 py-3 border-2 border-[#808080] border-t-[#E0E0E0] border-l-[#E0E0E0] border-b-[#808080] border-r-[#808080] hover:bg-[#B0B0B0] transition-all duration-200 mt-10 shadow-[inset_1px_1px_0px_0px_#E0E0E0,inset_-1px_-1px_0px_0px_#808080] rounded-sm"
        >
          Explore
        </Button>
      </div>
    </section>
  )
}
