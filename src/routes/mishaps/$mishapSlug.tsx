import { createFileRoute, notFound } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Mishap } from '@/types'
import { Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/mishaps/$mishapSlug')({
  loader: async ({ params }) => {
    const { mishapSlug } = params
    const response = await fetch(`/api/mishaps/${mishapSlug}`)

    if (!response.ok && response.status === 404) {
      throw notFound()
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch mishap: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  },
  component: RouteComponent,
})

function RouteComponent() {
  const mishap: Mishap = Route.useLoaderData()

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-white text-black border-2 border-black'
      case 'High':
        return 'bg-white text-black border-2 border-black'
      case 'Medium':
        return 'bg-white text-black border-2 border-black'
      default:
        return 'bg-gray-200 text-black border-2 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className="border-b-4 border-border px-6 py-6 relative"
        style={{
          backgroundImage: 'url(/background-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/8"></div>
        <div className="mx-auto max-w-4xl relative z-10">
          <Link to="/">
            <Button className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h1 className="font-heading text-4xl font-bold text-white mb-4 text-balance">
                {mishap.title}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge className={getSeverityColor(mishap.severity)}>
                  {mishap.severity}
                </Badge>
                <span className="text-sm text-white font-mono">
                  {mishap.category} • {mishap.date}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">
                {mishap.company}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Overview */}
          <section className="border-4 border-black bg-white p-8">
            <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">
              Overview
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              {mishap.fullDescription}
            </p>
          </section>

          {/* What Went Wrong */}
          <section className="border-4 border-black bg-white p-8">
            <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">
              What Went Wrong
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              {mishap.whatWentWrong}
            </p>

            {mishap.lessons && (
              <div>
                <h3 className="font-bold text-lg mb-3">Key Lessons</h3>
                <ul className="space-y-2">
                  {mishap.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-800">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* How It Was Fixed */}
          <section className="border-4 border-black bg-white p-8">
            <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">
              How It Was Fixed
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              {mishap.howFixed}
            </p>

            {mishap.impact && (
              <div className="bg-gray-50 border-2 border-gray-300 p-4">
                <h3 className="font-bold text-lg mb-2">Long-term Impact</h3>
                <p className="text-gray-800">{mishap.impact}</p>
              </div>
            )}
          </section>

          {/* Timeline */}
          {mishap.timeline && (
            <section className="border-4 border-black bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-6 border-b-2 border-black pb-2">
                Timeline
              </h2>
              <div className="space-y-4">
                {mishap.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-24 flex-shrink-0 font-mono text-sm font-bold text-gray-600">
                      {item.date}
                    </div>
                    <div className="w-3 h-3 bg-black rounded-full mt-1 flex-shrink-0"></div>
                    <div className="flex-1 text-gray-800">{item.event}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* News Sources */}
          <section className="border-4 border-black bg-white p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 border-b-2 border-black pb-2">
              News Sources & References
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mishap.sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-4 border-2 border-black bg-gray-50 hover:bg-gray-100 transition-colors group hover:shadow-[4px_4px_0px_0px_black] hover:-translate-y-1"
                >
                  <img
                    src={source.thumbnail || '/placeholder.svg'}
                    alt=""
                    className="w-20 h-16 object-cover border border-gray-300 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 line-clamp-3 group-hover:underline mb-2">
                      {source.title}
                    </p>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">
                        Read full article
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
