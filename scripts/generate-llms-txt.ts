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
    const llmsTxtContent = `# CrashedOut.ai

> A comprehensive database of AI failures, mishaps, and lessons learned from real-world AI deployments. We document what went wrong, how companies fixed it, and what others can learn from these incidents.

Key terms: AI failures, machine learning mishaps, chatbot errors, AI hallucinations, automation failures, AI safety, AI ethics, AI debugging.

## Crashouts
${crashouts
  .map(
    (crashout) =>
      `- [${crashout.title}](https://crashedout.ai/crashouts/${crashout.slug}): ${crashout.description} (${crashout.company}, ${crashout.severity} severity)`,
  )
  .join('\n')}

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
