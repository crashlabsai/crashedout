import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import type { CrashOut } from '../src/types'

/**
 * Generates llms.txt file for AI mishaps site
 * Based on the llms.txt specification from https://www.tryprofound.com/guides/what-is-llms-txt-guide
 */
function generateLlmsTxt(): void {
  try {
    // Load crashouts data
    const crashoutsPath = join(process.cwd(), 'src', 'data', 'crashouts.json')
    const crashouts: CrashOut[] = JSON.parse(
      readFileSync(crashoutsPath, 'utf-8'),
    )

    // Generate llms.txt content
    const llmsTxtContent = `# llms.txt for Crashed Out

*A project by [CrashLabs](https://crashlabs.ai)*

> A curated collection of real-world AI failures, mishaps, and cautionary tales. This project documents when AI systems go wrong, from chatbots giving bad legal advice to voice assistants accepting impossible orders. Each crashout includes what went wrong, how it was fixed, the impact on users and companies, and source links for verification.

Key terms: AI failures, machine learning mishaps, chatbot errors, AI hallucinations, automation failures, AI safety, AI ethics, AI debugging.

## About
This is an open source project that showcases documented cases where AI systems have failed in production environments. We welcome contributions to expand this collection of AI mishaps.

## Crashouts
${crashouts
  .map(
    (crashout) =>
      `- [${crashout.title}](https://crashedout.ai/crashouts/${crashout.slug}): ${crashout.description} (${crashout.company}, ${crashout.severity} severity)`,
  )
  .join('\n')}

## Contributing
- [GitHub Repository](https://github.com/RyanJunejo/ai-mishaps): Source code and issue tracker
- Submit new crashouts by creating issues or pull requests
- Only include documented, verifiable incidents with reliable source links

## Optional
- [Sitemap](https://crashedout.ai/sitemap.xml): Complete site structure
- [Homepage](https://crashedout.ai/): Main landing page with featured crashouts
`

    // Write to public directory
    const outputPath = join(process.cwd(), 'public', 'llms.txt')
    writeFileSync(outputPath, llmsTxtContent, 'utf-8')

    console.log('✅ Generated llms.txt successfully')
    console.log(`📄 Output: ${outputPath}`)
    console.log(`📊 Included ${crashouts.length} crashouts`)
  } catch (error) {
    console.error('❌ Error generating llms.txt:', (error as Error).message)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateLlmsTxt()
}

export { generateLlmsTxt }
