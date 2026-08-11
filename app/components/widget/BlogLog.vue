<script setup lang="ts">
const { timeEstablished } = useAppConfig()

const blogLog = [
	{ label: '2026-07-05', value: '基于 Nuxt 4 + Nuxt Content v3 搭建博客，启用 oneloveyushi.top 域名' },
	{ label: timeEstablished, value: '发布第一篇文章' },
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
