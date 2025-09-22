import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="border-t-4 border-border bg-secondary px-6 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Open Source Contribution Section */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Open Source Project
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AI Mishaps is an open source project dedicated to documenting and
            learning from AI failures. Help us build a comprehensive database of
            AI mishaps to make AI development safer and more transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="inverse"
              onClick={() =>
                window.open(
                  'https://github.com/crashlabsai/ai-mishaps',
                  '_blank',
                )
              }
            >
              🚀 Contribute on GitHub
            </Button>
            <Button
              onClick={() =>
                window.open(
                  'https://github.com/crashlabsai/ai-mishaps/issues/new',
                  '_blank',
                )
              }
            >
              📝 Submit a Mishap
            </Button>
          </div>
        </div>
        <div className="text-center">
          <div className="mt-8 h-1 w-24 bg-primary mx-auto"></div>

          {/* CrashLabs Branding */}
          <div className="mt-8 text-sm text-muted-foreground font-mono">
            A project by{' '}
            <a
              className="font-bold text-foreground"
              href="https://crashlabs.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              CrashLabs
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
