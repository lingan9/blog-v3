<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 声明响应式变量，默认设为 null，避开编译干扰
const latestArticle = ref<any>(null)

onMounted(async () => {
	try {
		// 仅在浏览器挂载完成后静默查询最新文章
		const articles = await queryContent()
			.where({ _extension: 'md', _partial: false, _draft: false })
			.sort({ date: -1 })
			.limit(1)
			.find()
		
		if (articles && articles.length > 0) {
			latestArticle.value = articles[0]
		}
	} catch (err) {
		console.error('获取最新文章失败:', err)
	}
})

// 日期格式化
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
<BlogWidget
	card
	dim
	title="最新动态"
>
	<NuxtLink v-if="latestArticle" :to="latestArticle._path" class="latest-article-link">
		<div class="title text-creative">
			{{ latestArticle.title }}
		</div>

		<div class="tip mt-2">
			<Icon name="tabler:calendar" class="mr-1 inline-block align-text-bottom" />
			<span>更新于 {{ formatDate(latestArticle.date) }}</span>
		</div>
	</NuxtLink>

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
	font-size: 1.2em;
	font-weight: bold;
	color: transparent;
	transition: background-position 0.2s;
	
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
