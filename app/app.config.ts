import blogConfig from '~~/blog.config'

export default defineAppConfig({
  // ========== 基础信息 ==========
  title: blogConfig.title,
  description: blogConfig.description,
  url: blogConfig.url,
  language: blogConfig.language,
  timeEstablished: blogConfig.timeEstablished,

  author: {
    name: blogConfig.author.name,
    avatar: blogConfig.author.avatar,
    email: blogConfig.author.email,
    homepage: blogConfig.author.homepage,
  },

  copyright: {
    abbr: blogConfig.copyright.abbr,
    name: blogConfig.copyright.name,
    url: blogConfig.copyright.url,
  },

  // ========== 头部配置 ==========
  header: {
    logo: blogConfig.author.avatar,
    showTitle: true,
    subtitle: blogConfig.subtitle || blogConfig.description,
    emojiTail: [] as string[],
  },

  // ========== 侧边栏导航 ==========
  nav: [
    {
      title: '',
      items: [
        { icon: 'tabler:home', text: '首页', url: '/' },
        { icon: 'tabler:archive', text: '归档', url: '/archive' },
        { icon: 'tabler:link', text: '友链', url: '/link' },
        { icon: 'tabler:palette', text: '主题', url: '/theme' },
      ],
    },
  ],

  // ========== 页脚配置 ==========
  footer: {
    nav: [
      {
        title: '导航',
        items: [
          { icon: 'tabler:home', text: '首页', url: '/' },
          { icon: 'tabler:archive', text: '归档', url: '/archive' },
          { icon: 'tabler:link', text: '友链', url: '/link' },
          { icon: 'tabler:palette', text: '主题', url: '/theme' },
        ],
      },
      {
        title: '更多',
        items: [
          { icon: 'tabler:brand-github', text: 'GitHub', url: 'https://github.com/lingan9/blog-v3', external: true },
          { icon: 'tabler:rss', text: 'Atom 订阅', url: '/atom.xml', external: true },
        ],
      },
    ],
    iconNav: [] as { icon: string, text: string, url: string }[],
    copyright: `&copy; ${new Date().getFullYear()} ${blogConfig.author.name} | Powered by <a href="https://github.com/lingan9/blog-v3" target="_blank">Clarity</a>`,
  },

  // ========== 文章配置 ==========
  article: {
    categories: blogConfig.article.categories,
    order: blogConfig.article.order,
  },

  // ========== 分页配置 ==========
  pagination: {
    perPage: 10,
    sortOrder: 'date' as string,
    allowAscending: true,
  },

  // ========== 组件配置 ==========
  component: {
    stats: {
      birthYear: new Date(blogConfig.timeEstablished).getFullYear(),
    },
    alert: {
      defaultStyle: 'flat' as string,
    },
    excerpt: {
      animation: true,
      caret: '_',
    },
    codeblock: {
      triggerRows: 20,
      collapsedRows: 10,
    },
    slide: {} as Record<string, any>,
  },

  // ========== 主题配置 ==========
  themes: {
    system: { icon: 'tabler:device-desktop', tip: '跟随系统' },
    light: { icon: 'tabler:sun', tip: '浅色模式' },
    dark: { icon: 'tabler:moon', tip: '深色模式' },
  } as Record<string, { icon: string, tip: string }>,

  // ========== 友链配置 ==========
  link: {
    randomInGroup: false,
    remindNoFeed: true,
  },

  // ========== 评论配置 ==========
  twikoo: {
    envId: blogConfig.twikoo?.envId || '',
  },
})
