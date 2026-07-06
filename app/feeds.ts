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
			
			// 🎯 完美嵌入、严格契合底层 FeedEntry 类型定义的安全同行友链：
			{
				author: 'ss0t_HACKED',
				sitenick: 'ss0t_HACKED',
				title: 'ss0t_HACKED',
				desc: '一个刚刚入门的pwner，大手子ddw',
				link: 'https://blog.ss0t-hacked.top',
				feed: 'https://blog.ss0t-hacked.top/atom.xml',
				icon: 'https://q1.qlogo.cn/g?b=qq&nk=3255154497&s=640',
				avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3255154497&s=640',
				date: '2026-07-06',
				comment: '安全同行，Pwn 方向大佬',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
