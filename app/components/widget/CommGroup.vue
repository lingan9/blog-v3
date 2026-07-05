<script setup lang="ts">
// 🎯 核心数据黑魔法：使用 Nuxt Content 异步查询你博客中最新的一篇文章
const { data: latestArticle } = await useAsyncData('sidebar-latest-article', () =>
	queryContent()
		.where({ _extension: 'md', _partial: false, _draft: false }) // 只过滤正文 Markdown 文章
		.sort({ date: -1 }) // 按照创建日期倒序排列（最新的在最前）
		.limit(1)
		.findOne()
)

// 安全的日期格式化函数，防止动态解析时爆出 SSR 服务端错误
const formatDate = (dateStr: any) => {
	if (!dateStr) return ''
	try {
		const d = new Date(dateStr)
		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
	} catch {
		return dateStr
	}
}
</script>

<template>
<!-- 💡 将标题魔改成“最新动态”，并去掉了原本属于原作者 QQ 群的背景头像 -->
<BlogWidget
	card
	dim
	title="最新动态"
>
	<!-- 当系统抓取到最新文章时，点击整个卡片会直接自动跳转到该文章 -->
	<NuxtLink v-if="latestArticle" :to="latestArticle._path" class="latest-article-link">
		<div class="title text-creative">
			{{ latestArticle.title }}
		</div>

		<div class="tip mt-2">
			<Icon name="tabler:calendar" class="mr-1 inline-block align-text-bottom" />
			<span>更新于 {{ formatDate(latestArticle.date) }}</span>
		</div>
	</NuxtLink>

	<!-- 如果目前还没有写任何文章，自动显示优雅的兜底状态 -->
	<div v-else class="tip">
		<Icon name="tabler:edit" class="mr-1 inline-block align-text-bottom" />
		<span>暂无动态，正在酝酿新笔记...</span>
	</div>
</BlogWidget>
</template>

<style lang="scss" scoped>
.latest-article-link {
	display: block;
	text-decoration: none;
	color: inherit;
}

.title {
	background-clip: text;
	background-image: linear-gradient(60deg, var(--c-accent) -30%, var(--c-primary), var(--c-text-1));
	background-position: 100% 0;
	background-size: 200%;
	font-size: 1.3em; /* 适当调小了字号，确保长文章标题也能完美放下 */
	font-weight: bold;
	color: transparent;
	transition: background-position 0.2s;
	
	/* 超过两行自动显示省略号，绝对不撑破侧边栏布局 */
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;

	.latest-article-link:hover & {
		background-position: 0 0;
	}
}

.tip {
	font-size: 0.85em;
	line-height: 2;
	color: var(--c-text-2, #666);
}
</style>
