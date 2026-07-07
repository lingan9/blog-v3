import type { FeedGroup } from '../app/types/feed'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// 🏆 第一组：专门给安全圈/CTF圈的大佬们准备的跪拜席
	{
		name: 'CTFer',
		desc: '每日跪拜名单...',
		entries: [
			// 🎯 你的安全同行兼 Pwn 大佬完美归位到这里
			{
				author: 'ss0t_HACKED',
				sitenick: 'ss0t_HACKED',
				title: 'ss0t_HACKED',
				desc: '一个超级厉害的pwn大手子',
				link: 'https://blog.ss0t-hacked.top',
				feed: 'https://blog.ss0t-hacked.top/atom.xml',
				icon: 'https://q1.qlogo.cn/g?b=qq&nk=3255154997&s=640',
				avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3255154997&s=640',
				date: '2026-07-06',
				comment: 'Pwn 方向大佬',
			},
		],
	},

	// 🌐 第二组：留给日常技术、生活以及其他类型的常规博客好友
	{
		name: '好友博客',
		desc: '凌安的好友们',
		entries: [
			/* 🌟 以后有了新朋友，直接模仿上面的格式把大括号 {...} 复制到这里来就行啦 */
		],
	},
] satisfies FeedGroup[]
