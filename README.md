# 凌安的小窝

[![框架](https://img.shields.io/badge/框架-Nuxt-00DC82?logo=Nuxt.js)](https://nuxt.com/)
[![CMS](https://img.shields.io/badge/CMS-Nuxt%20Content-00DC82?logo=Nuxt.js)](https://content.nuxt.com/)
[![代码风格](https://img.shields.io/badge/代码风格-ESLint-4B32C3?logo=ESLint)](https://eslint.org/)
[![代码风格](https://img.shields.io/badge/代码风格-Stylelint-263238?logo=Stylelint)](https://stylelint.io/)

凌安的个人博客，基于 Clarity 主题构建，于 2026 年 7 月上线。



### 创建文章

- 启用 `blog.config.ts` 中的 `article.useRandomPremalink`，即可在创建文章时随机生成 URL。

```sh
pnpm new
```

### 运行开发环境

```sh
pnpm dev
```

### 构建生产环境

```sh
pnpm generate
pnpm preview
```

### 部署指南

支持 Vercel、Netlify、Cloudflare Pages、EdgeOne Makers 等平台部署。建议采用静态（SSG）部署方式：

- 构建命令: `pnpm generate`
- 输出目录: `dist`
- 安装命令: `pnpm i`

如果直接使用平台提供的“Nuxt”预设部署，则会变成 SSR 模式，此模式每次访问都会等待服务端重新渲染。请参阅 [Nuxt 文档](https://nuxt.com/docs/getting-started/deployment) 和 [Nuxt Content 文档](https://content.nuxt.com/docs/deploy/static) 的“部署”一节。

#### 疑难解答

- 当你发现文章页面 404 问题时，请注意文章 URL 不应尾随 `/`。
- 如果修改了 API 路径，使用 EdgeOne Makers 部署需要同步修改 `edgeone.json`。
- 运行、部署项目时 Node.js 版本需要遵照 `package.json` 限制，推荐使用 Node LTS 最新版。

### 检测友链状态

```sh
pnpm check:feed # 检测某友链 / 任意 URL 的托管商及可访问性
pnpm check:feed/all # 检测所有友链可访问性并生成报告
```

## 贡献

欢迎参与项目：如果有具体问题或功能建议，可以发起 Issue；如果愿意在已确定的方向上增加功能或修复问题，可以提交 Pull Request。

## 许可证

- 项目本体：[MIT](LICENSE)
- 博客文章：[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)
- 希望你在页脚保留此项目链接，助力开源传播。
