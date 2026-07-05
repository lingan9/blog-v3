import type { Nav, NavItem } from '~/types/nav'
import { pascalCase } from 'es-toolkit/string'
import { Temporal } from 'temporal-polyfill'
import blogConfig from '~~/blog.config'
import { name, version } from '~~/package.json'

export default defineAppConfig({
	...blogConfig,

	component: {
		alert: {
			defaultStyle: 'card' as 'card' | 'flat',
		},
		codeblock: {
			triggerRows: 32,
			collapsedRows: 16,
			enableIndentGuide: true,
			indent: 4,
			tabSize: 3,
		},
		excerpt: {
			animation: true,
			caret: '_',
		},
		slide: {
			showTitle: true,
		},
		stats: {
			birthYear: 2026,
			wordCount: '约1千',
		},
	},

	footer: {
		copyright: `© ${Temporal.Now.plainDateISO().year.toString()} ${blogConfig.author.name}`,
		iconNav: [
			{ icon: 'tabler:home', text: '个人主页', url: blogConfig.author.homepage },
			{ icon: 'ri:qq-line', text: 'QQ：1905003027', url: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1905003027' },
			{ icon: 'tabler:brand-github', text: 'GitHub', url: 'https://github.com/lingan9' },
			{ icon: 'tabler:rss', text: 'Atom订阅', url: '/atom.xml' },
		] satisfies NavItem[],
		nav: [
			{
				title: '探索',
				items: [
					{ icon: 'tabler:rss', text: 'Atom订阅', url: '/atom.xml' },
				],
			},
			{
				title: '社交',
				items: [
					{ icon: 'tabler:brand-github', text: 'GitHub lingan9', url: 'https://github.com/lingan9' },
					{ icon: 'ri:qq-line', text: 'QQ：1905003027', url: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1905003027' },
					{ icon: 'tabler:mail', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
				],
			},
			{
				title: '信息',
				items: [
					{ icon: 'simple-icons:nuxt', text: `主题: ${pascalCase(name)} ${version}`, url: 'https://github.com/lingan9/blog-v3' },
					{ icon: 'tabler:color-swatch', text: '主题和组件文档', url: '/theme' },
				],
			},
		] satisfies Nav,
	},

	header: {
		logo: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg',
		showTitle: true,
		subtitle: blogConfig.subtitle,
		emojiTail: ['📄', '📈', '⚡', '🧠', '🏖️'], 
	},

	link: {
		remindNoFeed: true,
		randomInGroup: true,
	},

	nav: [
		{
			title: '',
			items: [
				{ icon: 'tabler:files', text: '文章', url: '/' },
				{ icon: 'tabler:link', text: '友链', url: '/link' },
				{ icon: 'tabler:archive', text: '归档', url: '/archive' },
			],
		},
	] satisfies Nav,

	pagination: {
		perPage: 10,
		sortOrder: 'date' as keyof typeof blogConfig.article.order,
		allowAscending: false,
	},

	themes: {
		light: {
			icon: 'tabler:sun',
			tip: '浅色模式',
		},
		system: {
			icon: 'tabler:device-desktop',
			tip: '跟随系统',
		},
		dark: {
			icon: 'tabler:moon',
			tip: '深色模式',
		},
	},
})
