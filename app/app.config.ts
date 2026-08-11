import type { Nav } from './types/nav'

const nav: Nav = [
  {
    title: '菜单',
    items: [
      { icon: 'tabler:home', text: '首页', url: '/' },
      { icon: 'tabler:archive', text: '归档', url: '/archive' },
      { icon: 'tabler:link', text: '友链', url: '/link' },
    ],
  },
  {
    title: '更多',
    items: [
      { icon: 'tabler:palette', text: '主题', url: '/theme' },
      { icon: 'tabler:rss', text: 'RSS', url: '/atom.xml' },
      { icon: 'tabler:brand-github', text: 'GitHub', url: 'https://github.com/lingan9/blog-v3' },
    ],
  },
]

const footerNav: Nav = [
  {
    title: '链接',
    items: [
      { icon: 'tabler:home', text: '首页', url: '/' },
      { icon: 'tabler:archive', text: '归档', url: '/archive' },
      { icon: 'tabler:link', text: '友链', url: '/link' },
    ],
  },
  {
    title: '关于',
    items: [
      { icon: 'tabler:palette', text: '主题', url: '/theme' },
      { icon: 'tabler:rss', text: 'RSS', url: '/atom.xml' },
      { icon: 'tabler:brand-github', text: '源码', url: 'https://github.com/lingan9/blog-v3' },
    ],
  },
]

export default defineAppConfig({
  // 基本信息
  title: '凌安的小窝',
  description: '凌安的个人博客，分享技术深度思考与安全学习历程。目前正在从零入门 CTF-Web 方向，记录漏洞复现、网安刷题笔记与日常开发实践。寻找志同道合的技术伙伴，有无大手子带带我喵！欢迎一起交流碰撞，探索赛博荒野中的内在秩序。',
  language: 'zh-CN',
  url: 'https://oneloveyushi.top/',
  timeEstablished: '2026-07-05',

  author: {
    name: '凌安',
    avatar: '/avatar.png',
    email: '1905003027@qq.com',
    homepage: 'https://oneloveyushi.top/',
  },

  copyright: {
    abbr: 'CC BY-NC-SA 4.0',
    name: '署名-非商业性使用-相同方式共享 4.0 国际',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
  },

  // 头部配置
  header: {
    logo: '/avatar.png',
    showTitle: true,
    subtitle: '蓦然回首，那人却在，灯火阑珊处',
    emojiTail: ['🐱', '💻', '🔒', '🛡️', '⚔️'],
  },

  // 侧栏导航
  nav,

  // 页脚
  footer: {
    nav: footerNav,
    copyright: '&copy; 2026 <a href="https://oneloveyushi.top/">凌安</a> | 主题 <a href="https://github.com/L33Z22L11/blog-v3">Clarity</a> | <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a>',
    iconNav: [
      { icon: 'tabler:brand-github', text: 'GitHub', url: 'https://github.com/lingan9/blog-v3' },
      { icon: 'tabler:rss', text: 'RSS', url: '/atom.xml' },
    ],
  },

  // 主题切换
  themes: {
    system: { icon: 'tabler:device-desktop', tip: '跟随系统' },
    light: { icon: 'tabler:sun', tip: '浅色模式' },
    dark: { icon: 'tabler:moon', tip: '深色模式' },
  },

  // 组件配置
  component: {
    alert: {
      defaultStyle: 'card' as 'flat' | 'card',
    },
    codeblock: {
      indent: 2,
      triggerRows: 15,
      collapsedRows: 10,
      tabSize: 4,
      enableIndentGuide: true,
    },
    excerpt: {
      animation: true,
      caret: '_',
    },
    slide: {
      showTitle: true,
    },
    stats: {
      birthYear: 2005,
    },
  },

  // 友链配置
  link: {
    remindNoFeed: true,
    randomInGroup: false,
  },

  // 分页
  pagination: {
    sortOrder: 'date' as 'date' | 'updated',
    perPage: 10,
    allowAscending: true,
  },

  // 文章配置
  article: {
    categories: {
      '未分类': { icon: 'tabler:circle-dashed' },
      '技术': { icon: 'tabler:mouse', color: '#33aaff' },
      '开发': { icon: 'tabler:code', color: '#7777ff' },
      '安全': { icon: 'tabler:bug', color: '#ff7733' },
      '杂谈': { icon: 'tabler:message', color: '#33bbaa' },
      '生活': { icon: 'tabler:leaf', color: '#ff7777' },
    },
    order: {
      date: '创建日期',
      updated: '更新日期',
    },
  },

  // 评论
  twikoo: {
    envId: '',
  },
})
