# Crashed Out

A curated collection of real-world AI failures, mishaps, and cautionary tales. This project documents when AI systems go wrong, from chatbots giving bad legal advice to voice assistants accepting impossible orders.

## What This Is

Crashed Out is a web app that showcases documented cases where AI systems have failed in production environments. Each "crashout" includes:

- What went wrong
- How it was fixed (if at all)
- The impact on users and companies
- Source links for verification

## Getting Started

```bash
npm install
npm run dev
```

## Contributing

We welcome contributions to expand this collection of AI mishaps:

### Submit a New Crashout

1. **Create an issue** describing the AI mishap with:
   - Company name
   - Brief description of what went wrong
   - Source links
   - Date it occurred

2. **Or create a PR** by adding a new entry to `src/data/crashouts.json` following the existing format:

```json
{
  "id": "unique-id",
  "slug": "url-friendly-slug",
  "title": "Brief Title",
  "description": "One-line summary",
  "category": "Category",
  "severity": "Low|Medium|High",
  "date": "YYYY",
  "company": "Company Name",
  "fullDescription": "Detailed description...",
  "whatWentWrong": "What specifically failed...",
  "howFixed": "How it was resolved...",
  "sources": [
    {
      "title": "Source Title",
      "url": "https://example.com"
    }
  ]
}
```

### Guidelines

- Only include documented, verifiable incidents
- Include reliable source links
- Focus on production AI failures, not research experiments
- Be factual and avoid speculation

## License

MIT License - see LICENSE file for details.
