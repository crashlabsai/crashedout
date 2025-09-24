import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import crashoutsData from './src/data/crashouts.json'

import { wrapVinxiConfigWithSentry } from '@sentry/tanstackstart-react'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      prerender: {
        // Enable prerendering
        enabled: true,

        // Enable if you need pages to be at `/page/index.html` instead of `/page.html`
        autoSubfolderIndex: true,

        // How many prerender jobs to run at once
        concurrency: 14,

        // Whether to extract links from the HTML and prerender them also
        crawlLinks: true,

        // Number of times to retry a failed prerender job
        retryCount: 2,

        // Delay between retries in milliseconds
        retryDelay: 1000,

        // Callback when page is successfully rendered
        onSuccess: ({ page }) => {
          console.log(`Rendered ${page.path}!`)
        },
      },
      // Explicitly configure crashout pages for prerendering
      pages: [
        // Home page
        {
          path: '/',
          prerender: { enabled: true, outputPath: '/index.html' },
        },
        // All crashout pages
        ...crashoutsData.map((crashout) => ({
          path: `/crashouts/${crashout.slug}`,
          prerender: {
            enabled: true,
            outputPath: `/crashouts/${crashout.slug}/index.html`,
          },
        })),
      ],
    }),
    viteReact(),
  ],
})

export default wrapVinxiConfigWithSentry(config, {
  org: process.env.VITE_SENTRY_ORG,
  project: process.env.VITE_SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,
})
