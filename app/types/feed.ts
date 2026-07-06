import type { FeedGroup } from '../app/types/feed'
import { myFeed } from '../blog.config'
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '清晰体验',
		desc: '使用 Clarity 博客主题构建的网站。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			
			// 🎯 100% 对齐严格类型、补齐所有必填字段的 ss0t_HACKED 友链
			{
				author: 'ss0t_HACKED',
				sitenick: 'ss0t_HACKED',
				title: 'ss0t_HACKED',
				desc: '一个超级厉害的pwn大手子',
				link: 'https://blog.ss0t-hacked.top',
				feed: 'https://blog.ss0t-hacked.top/atom.xml',
				icon: 'https://q1.qlogo.cn/g?b=qq&nk=3255154497&s=640',   
				avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3255154497&s=640', 
				archs: ['Nuxt', 'Vercel'],
				date: '2026-07-06',                                       
				comment: '安全同行，Pwn 方向大佬',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
