import { defineNuxtModule } from 'nuxt/kit'
import { minify } from 'oxc-minify'
import blogConfig from '../../blog.config'
import handleMirror from './runtime/client'

const blacklist: string[] = []

export default defineNuxtModule({
	meta: {
		name: 'anti-mirror',
	},
	setup(options, nuxt) {
		if (blacklist.length > 0) {
			(nuxt.options.app.head.script ??= []).push({
				innerHTML: toIifeString(handleMirror, blacklist.map(btoa), btoa(blogConfig.url)),
			})
		}
	},
})

function toIifeString<T extends unknown[]>(fn: (...args: T) => void, ...args: T) {
	const fnString = fn.toString()
	const argsString = JSON.stringify(args).slice(1, -1)
	const minified = minify('', `(${fnString})(${argsString})`)
	return minified.code
}
