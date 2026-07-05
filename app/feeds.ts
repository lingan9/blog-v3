import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '清晰体验',
		desc: '使用 Clarity 博客主题构建的网站。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed, // 👈 你的自动化检测天眼会以你（myFeed）为核心起点运行
			
			// 💡 下面这里就是你以后自己加新友链的地方！
			// 当你有了新朋友，直接把下面这段注释解开，把它的信息填进去，自动检测脚本就会开始对它生效：
			/*
			{
				id: 'friend-id',
				name: '朋友的博客名字',
				desc: '朋友的网站简介',
				url: 'https://朋友的域名.com',
				feed: 'https://朋友的域名.com/atom.xml',
				avatar: 'https://朋友的头像.png',
				date: '2026-07-05',
			},
			*/
		],
	},
	// #endregion
] satisfies FeedGroup[]
