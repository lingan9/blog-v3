import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: '凌安的小窝',
	subtitle: '蓦然回首，那人却在，灯火阑珊处',
	// 长 description 利好于 SEO
	description: '凌安的个人博客，分享技术深度思考与安全学习历程。目前正在从零入门 CTF-Web 方向，记录漏洞复现、网安刷题笔记与日常开发实践。寻找志同道合的技术伙伴，有无大手子带带我喵！欢迎一起交流碰撞，探索赛博荒野中的内在秩序。',
	author: {
		name: '凌安',
		avatar: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg',
		email: '1905003027@qq.com',
		homepage: 'https://oneloveyushi.top/', 
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	// 💡 稳定保障：直接读取本地打包后的静态图标，确保浏览器能够完美、稳定地加载出标签页图标
	favicon: '/favicon.png',
	language: 'zh-CN',
	timeEstablished: '2026-07-05',
	timeZone: 'Asia/Shanghai',
	url: 'https://oneloveyushi.top/', 
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// @keep-sorted
const blogConfig = {
	...basicConfig,

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

	/** 博客 Atom 订阅源 */
	feed: {
		limit: 50,
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 自己网站的 Cloudflare Insights 统计服务
		{ 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
		// 恢复基础依赖，防止组件找不到声明抛出 500
		{ src: 'https://lib.baomitu.com/twikoo/1.6.44/twikoo.min.js', defer: true },
	],

	// 💡 终极修复：不再填写任何会引发解析错误的非数据库链接，保持安全结构，让挂件在后台彻底安静下来
	twikoo: {
		envId: '',
		preload: '',
	},
}

/** 用于生成 OPML 和友链页面配置 */
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
