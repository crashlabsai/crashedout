import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Mishap } from '@/types'

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-black text-white border-2 border-black'
    case 'High':
      return 'bg-gray-800 text-white border-2 border-gray-800'
    case 'Medium':
      return 'bg-gray-600 text-white border-2 border-gray-600'
    default:
      return 'bg-gray-200 text-black border-2 border-gray-200'
  }
}

export default function MishapsGrid({ mishaps }: { mishaps: Mishap[] }) {
  const [selectedMishap, setSelectedMishap] = useState<Mishap | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <section className="px-6 py-16" data-section="mishaps-grid">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            When AI Goes Wrong
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {'Real mishaps, real lessons.'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mishaps.map((mishap) => (
            <Card
              key={mishap.id}
              className="group relative border-4 border-black bg-white transition-all duration-200 hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-1 hover:translate-x-1 cursor-pointer"
              onClick={() => {
                setSelectedMishap(mishap)
                setIsDialogOpen(true)
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <Badge className={getSeverityColor(mishap.severity)}>
                    {mishap.severity}
                  </Badge>
                </div>

                <CardTitle className="font-heading text-xl font-bold leading-tight text-balance mt-4">
                  {mishap.title}
                </CardTitle>

                <div className="text-xs text-gray-600 font-mono">
                  {mishap.category} • {mishap.date}
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-pretty leading-relaxed text-black">
                  {mishap.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mishap Details Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open)
          if (!open) {
            // Clear the selected mishap after dialog closes
            setTimeout(() => setSelectedMishap(null), 150)
          }
        }}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-4 border-black bg-white">
          {selectedMishap && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <DialogTitle className="font-heading text-2xl font-bold text-left mb-2">
                      {selectedMishap.title}
                    </DialogTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        className={getSeverityColor(selectedMishap.severity)}
                      >
                        {selectedMishap.severity}
                      </Badge>
                      <span className="text-sm text-gray-600 font-mono">
                        {selectedMishap.category} • {selectedMishap.date}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">
                      {selectedMishap.company}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 border-b-2 border-black pb-1">
                    Description
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {selectedMishap.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 border-b-2 border-black pb-1">
                    What Went Wrong
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {selectedMishap.whatWentWrong}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 border-b-2 border-black pb-1">
                    How It Was Fixed
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {selectedMishap.howFixed}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 border-b-2 border-black pb-1">
                    News Sources
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {selectedMishap.sources.map((source, index) => (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 p-3 border-2 border-black bg-gray-50 hover:bg-gray-100 transition-colors group"
                      >
                        {/* <img
                          src={source.thumbnail || '/placeholder.svg'}
                          alt=""
                          className="w-16 h-12 object-cover border border-gray-300"
                        /> */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:underline">
                            {source.title}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <ExternalLink className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-500">
                              External link
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-200">
                  <Button
                    variant="inverse"
                    className="w-full"
                    onClick={() => {
                      if (selectedMishap) {
                        navigate({ to: `/mishaps/${selectedMishap.slug}` })
                      }
                    }}
                  >
                    View Full Details
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
