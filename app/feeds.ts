import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: '凌安的小窝',
	subtitle: '何处不逢春',
	description: '凌安的个人博客，分享技术深度思考与安全学习历程。目前正在从零入门 CTF-Web 方向，记录漏洞复现、网安刷题笔记与日常开发实践。寻找志同道合的技术伙伴，有无大手子带带我喵！欢迎一起交流碰撞，探索赛博荒野中的内在秩序。',
	author: {
		name: '凌安',
		avatar: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg', // 还原旧头像
		email: '1905003027@qq.com',
		homepage: 'https://oneloveyushi.top/', 
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg', // 还原旧小图标
	language: 'zh-CN',
	timeEstablished: '2026-07-05',
	timeZone: 'Asia/Shanghai',
	url: 'https://oneloveyushi.top/', 
	defaultCategory: '未分类',
}

const blogConfig = {
	...basicConfig,

	// 👇 补丁 1：增加 header 配置，防止 BlogHeader 等组件读取 undefined 导致页面彻底崩溃
	header: {
		logo: basicConfig.favicon,
		showTitle: true,
		subtitle: basicConfig.subtitle,
		iconNav: [], // 核心修复点：给它一个空数组，即使找不到图标也不会报错退出
	},

	// 👇 补丁 2：部分主题会从 nav 里读取 iconNav，双重保险
	nav: {
		iconNav: [], 
	},

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'tabler:circle-dashed' },
			技术: { icon: 'tabler:mouse', color: '#33aaff' },
			开发: { icon: 'tabler:code', color: '#7777ff' },
			安全: { icon: 'tabler:bug', color: '#ff7733' },
			杂谈: { icon: 'tabler:message', color: '#33bbaa' },
			生活: { icon: 'tabler:leaf', color: '#ff7777' },
		},
		types: {
			tech: {},
			story: {},
		},
		order: {
			date: '创建日期',
			updated: '更新日期',
		},
		useRandomPremalink: false,
		hidePostPrefix: true,
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	feed: {
		limit: 50,
		enableStyle: true,
	},

	scripts: [
		{ 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
	],

	twikoo: {
		envId: '',
		preload: '',
	},
}

export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	sitenick: '凌安的小窝',
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url, 
	feed: new URL('/atom.xml', blogConfig.url).toString(), 
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'Vercel'],
	date: blogConfig.timeEstablished,
	comment: '凌安的个人博客，目前正在入门 ctf-web 方向。',
}

export default blogConfig
