// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	build: {
		inlineStylesheets: 'always',
	},

	output: 'server',

	adapter: vercel({
		webAnalytics: { enabled: true },
		maxDuration: 60,
	}),

	site: 'https://www.cataterapias.cl',

	integrations: [react(), sitemap()],
})
