import GitHub from '@auth/core/providers/github'
import Twitter from '@auth/core/providers/twitter'
import { defineConfig } from 'auth-astro'

export default defineConfig({
	providers: [
		GitHub({
			clientId: import.meta.env.GITHUB_ID,
			clientSecret: import.meta.env.GITHUB_SECRET,
		}),
		Twitter({
			clientId: import.meta.env.TWITTER_ID,
			clientSecret: import.meta.env.TWITTER_SECRET,
		})
	],
})
