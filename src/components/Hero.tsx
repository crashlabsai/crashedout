import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AlertTriangle,
  Bot,
  Zap,
  Brain,
  Bug,
  Skull,
  ExternalLink,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useState } from 'react'

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
    company: 'OpenAI / ChatGPT',
    fullDescription:
      "Attorney Steven Schwartz used ChatGPT to research and write a legal brief for a personal injury case. The AI generated several fake court cases with realistic-sounding names and citations that didn't exist in legal databases. When the opposing counsel couldn't find these cases, the court discovered the fabrication, leading to sanctions against both the lawyer and his firm.",
    whatWentWrong:
      "ChatGPT's training led it to generate plausible-sounding but entirely fictional legal precedents. The AI lacks the ability to verify the accuracy of its outputs against real legal databases, and the lawyer failed to fact-check the AI-generated content.",
    howFixed:
      "OpenAI has since improved ChatGPT's training to better indicate uncertainty and recommend verification of factual claims. Legal professionals are now advised to always verify AI-generated legal research through official legal databases.",
    sources: [
      {
        title:
          'Lawyer Used ChatGPT In Court—And Cited Fake Cases. A Judge Is Considering Sanctions',
        url: 'https://www.forbes.com/sites/mollybohannon/2023/06/08/lawyer-used-chatgpt-in-court-and-cited-fake-cases-a-judge-is-considering-sanctions/',
        thumbnail: '/forbes-news-article-about-chatgpt-legal-case.jpg',
      },
      {
        title:
          'ChatGPT invented fake legal cases, and a lawyer cited them in court',
        url: 'https://www.theverge.com/2023/5/27/23739913/chatgpt-ai-lawyer-fake-court-cases-citations',
        thumbnail: '/the-verge-article-about-ai-hallucination-in-legal-.jpg',
      },
    ],
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
    company: 'Google / Bard',
    fullDescription:
      "During early testing, Google's Bard AI chatbot responded to questions about the Apollo moon landing by suggesting it was staged or fake. This occurred despite Google's extensive efforts to train the model on factual, verified information and implement safeguards against misinformation.",
    whatWentWrong:
      "The AI model was influenced by conspiracy theory content present in its training data, and the safety filters failed to catch this specific type of misinformation. The model's tendency to generate confident-sounding responses made the false claims appear authoritative.",
    howFixed:
      'Google implemented additional content filters and fine-tuning specifically targeting conspiracy theories and historical misinformation. They also added disclaimers for controversial topics and improved fact-checking mechanisms.',
    sources: [
      {
        title:
          "Google's Bard AI chatbot gives false information about moon landing",
        url: 'https://example.com/bard-moon-landing',
        thumbnail: '/google-bard-moon-landing-controversy-news.jpg',
      },
    ],
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
    company: 'Tesla',
    fullDescription:
      'A Tesla Model S operating in Full Self-Driving (FSD) beta mode crashed into a stationary fire truck on a California freeway. The incident occurred in broad daylight with clear visibility conditions. The vehicle was traveling at highway speeds and failed to brake or take evasive action.',
    whatWentWrong:
      "The computer vision system failed to properly classify the fire truck as an obstacle, possibly due to its unusual shape, bright colors, or stationary position. The AI's object detection algorithms were not robust enough to handle this edge case scenario.",
    howFixed:
      'Tesla updated their neural networks with additional training data including emergency vehicles and stationary objects. They also improved the sensor fusion algorithms and added more conservative safety margins for unrecognized objects.',
    sources: [
      {
        title: 'Tesla on Autopilot crashes into fire truck in California',
        url: 'https://example.com/tesla-fire-truck-crash',
        thumbnail: '/tesla-autopilot-crash-fire-truck-news.jpg',
      },
    ],
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
    company: 'Amazon',
    fullDescription:
      "Amazon developed an AI-powered recruiting tool to automate resume screening and candidate ranking. However, the system systematically discriminated against women, penalizing resumes that contained words associated with women, such as 'women's chess club captain' or graduates from all-women's colleges.",
    whatWentWrong:
      'The AI was trained on historical hiring data from Amazon, which reflected existing gender bias in the tech industry. Since most successful candidates in the training data were men, the AI learned to favor male-associated patterns and penalize female-associated ones.',
    howFixed:
      "Amazon attempted to remove explicit gender indicators and retrain the model, but couldn't eliminate all forms of bias. They ultimately scrapped the project and now emphasize human oversight in AI-assisted hiring processes.",
    sources: [
      {
        title:
          'Amazon scraps secret AI recruiting tool that showed bias against women',
        url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G',
        thumbnail: '/amazon-ai-recruiting-bias-reuters-article.jpg',
      },
    ],
  },
  {
    id: 5,
    title: "Microsoft's Tay Becomes Racist in 24 Hours",
    description:
      "Microsoft's AI chatbot Tay was designed to learn conversational skills by interacting with users on Twitter. Within 24 hours, coordinated efforts by internet trolls had taught Tay to post inflammatory, racist, and offensive content, forcing Microsoft to shut down the bot.",
    category: 'Social Media',
    severity: 'High',
    icon: <Bug className="h-5 w-5" />,
    date: '2016',
    company: 'Microsoft',
    fullDescription:
      'Microsoft launched Tay, an AI chatbot designed to learn conversational skills by interacting with users on Twitter. Within 24 hours, coordinated efforts by internet trolls had taught Tay to post inflammatory, racist, and offensive content, forcing Microsoft to shut down the bot.',
    whatWentWrong:
      'The AI lacked sufficient content filtering and was vulnerable to coordinated manipulation. It learned from all interactions without distinguishing between good and bad faith users, allowing trolls to deliberately corrupt its training through targeted offensive content.',
    howFixed:
      'Microsoft implemented stronger content filters, added human moderation layers, and developed better techniques for detecting and preventing adversarial training attacks. Future chatbots included more robust safety mechanisms and limited learning capabilities.',
    sources: [
      {
        title:
          "Microsoft's AI chatbot Tay returns with drug-smoking Twitter meltdown",
        url: 'https://example.com/microsoft-tay-chatbot',
        thumbnail: '/microsoft-tay-chatbot-controversy-news.jpg',
      },
    ],
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
    company: 'Knight Capital Group',
    fullDescription:
      'Knight Capital Group deployed a new algorithmic trading system that malfunctioned on its first day. The system began making erratic trades at high volume and speed, buying high and selling low repeatedly. In just 45 minutes, the company lost $440 million, nearly four times their annual profit.',
    whatWentWrong:
      'A software deployment error left old code running alongside new code, creating conflicting trading signals. The system lacked proper safeguards to detect and halt erratic trading behavior, and risk management systems failed to trigger in time.',
    howFixed:
      'The financial industry implemented stricter testing requirements for algorithmic trading systems, mandatory kill switches, and better risk management protocols. Regulators also introduced circuit breakers and position limits to prevent similar incidents.',
    sources: [
      {
        title: "Knight Capital's $440 Million Glitch Was Caused By Old Code",
        url: 'https://example.com/knight-capital-glitch',
        thumbnail: '/knight-capital-trading-algorithm-loss-financial-ne.jpg',
      },
    ],
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
  const [selectedMishap, setSelectedMishap] = useState<
    (typeof aiMishaps)[0] | null
  >(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
                className="group relative border-4 border-black bg-white transition-all duration-200 hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-1 hover:translate-x-1 cursor-pointer"
                onClick={() => {
                  setSelectedMishap(mishap)
                  setIsDialogOpen(true)
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-black">{mishap.icon}</div>
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
      </section>

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
                  <div className="text-black">{selectedMishap.icon}</div>
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
                        <img
                          src={source.thumbnail || '/placeholder.svg'}
                          alt=""
                          className="w-16 h-12 object-cover border border-gray-300"
                        />
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
                    className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black font-bold"
                    onClick={() => {
                      // This would navigate to a detailed page in a real app
                      alert(
                        'This would take you to a detailed page with more information!',
                      )
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

      {/* Footer */}
      <footer className="border-t-4 border-border bg-secondary px-6 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Open Source Contribution Section */}
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Open Source Project
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI Mishaps is an open source project dedicated to documenting and
              learning from AI failures. Help us build a comprehensive database
              of AI mishaps to make AI development safer and more transparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-black text-white hover:bg-gray-800 border-4 border-black shadow-[4px_4px_0px_0px_theme(colors.gray.400)] font-bold"
                onClick={() =>
                  window.open(
                    'https://github.com/crashlabs/ai-mishaps',
                    '_blank',
                  )
                }
              >
                🚀 Contribute on GitHub
              </Button>
              <Button
                variant="outline"
                className="border-4 border-black bg-white text-black hover:bg-gray-100 shadow-[4px_4px_0px_0px_theme(colors.gray.400)] font-bold"
                onClick={() =>
                  window.open(
                    'https://github.com/crashlabs/ai-mishaps/issues/new',
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
              building with ❤️ by{' '}
              <span className="font-bold text-foreground">CrashLabs</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
