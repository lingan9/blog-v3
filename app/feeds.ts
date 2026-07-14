import type { FeedGroup } from './types/feed'

// 📋 友链数据列表
// 每个 group 代表一组友链，包含组名、描述和该组内的友链条目
// 要添加新友链，复制一个 {...} 条目到对应组的 entries 数组即可
const feeds: FeedGroup[] = [
  // 🏠 本尊专区：你的个人博客展示
  {
    name: '我的博客',
    desc: '欢迎来到凌安的小窝~',
    entries: [
      {
        author: '凌安',
        sitenick: '凌安的小窝',
        title: '凌安的小窝',
        desc: '正在入门ctf-web 大手子ddw',
        link: 'https://oneloveyushi.top/',
        // ⚠️ 网站上线后取消下面这行注释以启用友链订阅
        // feed: 'https://oneloveyushi.top/atom.xml',
        icon: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg',
        avatar: 'https://img2024.cnblogs.com/blog/3823631/202607/3823631-20260705132302916-2066211351.jpg',
        date: '2026-07-05',
        comment: '凌安的个人博客，目前正在入门 ctf-web 方向。',
      },
    ],
  },

  // 🏆 第一组：专门给安全圈/CTF圈的大佬们准备的跪拜席
  {
    name: 'CTFer',
    desc: '每日跪拜名单...',
    entries: [
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
]

export default feeds
