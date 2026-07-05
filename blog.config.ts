import type { FeedEntry } from './app/types/feed'

const basicConfig = {
	title: '凌安的小窝',
	// 1. 修正了错别字：慕 -> 蓦
	subtitle: '蓦然回首，那人却在，灯火阑珊处',
	// 2. 丰富了长 description，自然嵌入高权重关键词，既保留你的个性和“求带”口吻，又利好于 SEO 爬虫抓取
	description: '凌安的个人博客，分享技术深度思考与安全学习历程。目前正在从零入门 CTF-Web 方向，记录漏洞复现、网安刷题笔记与日常开发实践。寻找志同道合的技术伙伴，有无大手子带带我喵！欢迎一起交流碰撞，探索赛博荒野中的内在秩序。',
	author: {
		name: '凌安',
		// 提示：博客园图床有防盗链，若图片裂开，请将其下载到 public 目录改用 '/avatar.jpg'
		avatar: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg',
		email: '1905003027@qq.com',
		// 3. 将作者主页改为了你自己的博客地址（或换成你刚买的阿里云域名）
		homepage: 'https://blog.zhilu.site/', 
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://www.zhilu.site/api/icon.png', // 记得后续把图标也丢进 public 换成自己的
	language: 'zh-CN',
	timeEstablished: '2019-07-19',
	timeZone: 'Asia/Shanghai',
	url: 'https://blog.zhilu.site/', // 购买域名后记得把这里的 url 一起换掉
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'tabler:circle-dashed' },
			/** 实践可复用操作经验：工具/系统/部署/排障 */
			技术: { icon: 'tabler:mouse', color: '#33aaff' },
			/** 编程：代码实现/工程实践/开发方法 */
			开发: { icon: 'tabler:code', color: '#7777ff' },
			/** 安全：漏洞/CTF/恶意软件/安全事件分析 */
			安全: { icon: 'tabler:bug', color: '#ff7733' },
			/** 思考：观点讨论/复盘反思/行业或产品观察 */
			杂谈: { icon: 'tabler:message', color: '#33bbaa' },
			/** 记录叙事：个人经历/校园家庭/日常片段 */
			生活: { icon: 'tabler:leaf', color: '#ff7777' },
		},
		/** 文章版式，首个为默认版式 */
		types: {
			tech: {},
			story: {},
		},
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		limit: 50,
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 4. 注意：这里注释掉了纸鹿个人的 Umami 统计。如果你自己没有用 Docker 部署过 Umami，留着这一行会导致你网站的数据全部报批给别人。
		// 如果你以后自己部署了统计，可以取消注释并换上你自己的域名和 ID：
		// { 'src': 'https://你的统计域名/zhi.js', 'data-website-id': '你的ID', 'defer': true },
		
		// 自己网站的 Cloudflare Insights 统计服务（记得在 Cloudflare 后台换成自己的 token）
		{ 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
		// Twikoo 评论系统
		{ src: 'https://lib.baomitu.com/twikoo/1.6.44/twikoo.min.js', defer: true },
	],

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: 'https://twikoo.zhilu.site/',
		preload: 'https://twikoo.zhilu.site/',
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
