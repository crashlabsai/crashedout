import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Bot, Zap, Brain, Bug, Skull } from 'lucide-react'

const aiMishaps = [
  {
    id: 1,
    title: 'ChatGPT Hallucinates Legal Cases',
    description:
      "A lawyer used ChatGPT to write a legal brief, but the AI invented fake court cases and citations that didn't exist, leading to sanctions.",
    category: 'Legal',
    severity: 'High',
    icon: <AlertTriangle className="h-5 w-5" />,
    date: '2023',
  },
  {
    id: 2,
    title: "Google's Bard Claims Moon Landing Was Fake",
    description:
      "Google's AI chatbot Bard incorrectly stated that the moon landing was staged, spreading conspiracy theories despite being trained on factual data.",
    category: 'Misinformation',
    severity: 'Medium',
    icon: <Bot className="h-5 w-5" />,
    date: '2023',
  },
  {
    id: 3,
    title: 'Tesla Autopilot Crashes Into Fire Truck',
    description:
      "Tesla's Full Self-Driving beta failed to recognize a stationary fire truck, resulting in a collision despite clear visibility conditions.",
    category: 'Autonomous Vehicles',
    severity: 'Critical',
    icon: <Skull className="h-5 w-5" />,
    date: '2022',
  },
  {
    id: 4,
    title: 'AI Recruiter Discriminates Against Women',
    description:
      "Amazon's AI recruiting tool showed bias against women, downgrading resumes that included words like 'women's' (as in 'women's chess club captain').",
    category: 'Bias',
    severity: 'High',
    icon: <Brain className="h-5 w-5" />,
    date: '2018',
  },
  {
    id: 5,
    title: "Microsoft's Tay Becomes Racist in 24 Hours",
    description:
      "Microsoft's AI chatbot Tay was designed to learn from Twitter interactions but quickly began posting inflammatory and racist tweets.",
    category: 'Social Media',
    severity: 'High',
    icon: <Bug className="h-5 w-5" />,
    date: '2016',
  },
  {
    id: 6,
    title: 'AI Trading Bot Loses $440 Million',
    description:
      "Knight Capital's trading algorithm malfunctioned and made erratic trades, losing $440 million in just 45 minutes and nearly bankrupting the company.",
    category: 'Finance',
    severity: 'Critical',
    icon: <Zap className="h-5 w-5" />,
    date: '2012',
  },
]

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

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Mishaps Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Hall of Failures
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {'Real AI mishaps that made headlines'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiMishaps.map((mishap) => (
              <Card
                key={mishap.id}
                className="group relative overflow-hidden border-4 border-border bg-card transition-all duration-300 ease-out hover:shadow-[8px_8px_0px_0px_theme(colors.foreground)] hover:border-primary hover:-translate-y-1 hover:translate-x-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                      {mishap.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getSeverityColor(mishap.severity)}>
                        {mishap.severity}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {mishap.date}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="font-heading text-xl font-bold leading-tight text-balance">
                    {mishap.title}
                  </CardTitle>

                  <Badge variant="secondary" className="w-fit">
                    {mishap.category}
                  </Badge>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-pretty leading-relaxed">
                    {mishap.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-border bg-secondary px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Learn from AI Failures
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {
              'These mishaps serve as important reminders that AI systems require careful design, testing, and human oversight. Each failure teaches us valuable lessons about building more reliable and ethical AI.'
            }
          </p>
          <div className="mt-8 h-1 w-24 bg-primary mx-auto"></div>
        </div>
      </footer>
    </div>
  )
}
