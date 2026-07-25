<script setup lang="ts">
import type { ArticleProps } from '~/types/article'

const props = defineProps<{ useUpdated?: boolean } & ArticleProps>()
const showAllDate = isTimeDiffSignificant(props.date, props.updated)
</script>

<template>
<UtilLink class="article-card card upraise">
	<NuxtImg v-if="image" class="article-cover" :src="image" :alt="title" />
	<article>
		<h2 class="article-title text-creative">
			<span class="title-icon">✦</span>
			{{ title }}
		</h2>

		<p v-if="description" class="article-description">
			{{ description }}
		</p>

		<div class="article-info">
			<UtilDate
				v-if="date && (showAllDate || !useUpdated)"
				:date
				icon="tabler:pencil-minus"
			/>

			<UtilDate
				v-if="updated && (showAllDate || useUpdated)"
				:class="{ 'use-updated': useUpdated }"
				:date="updated"
				icon="tabler:clock-edit"
			/>

			<span v-if="categories" class="article-category" :style="{ color: getCategoryColor(categories[0]) }">
				<Icon :name="getCategoryIcon(categories[0])" />
				{{ categories[0] }}
			</span>

			<span v-if="readingTime?.words" class="article-words">
				<Icon name="tabler:pilcrow" />
				{{ formatNumber(readingTime?.words) }}字
			</span>
		</div>
	</article>
</UtilLink>
</template>

<style lang="scss" scoped>
.article-card {
	container-type: inline-size;
	position: relative;
	margin: 1em 0;
	border-radius: 1em;
	border: 1px solid var(--c-border);
	color: var(--c-text);
	animation: float-in 0.35s var(--delay) backwards;
	overflow: hidden;

	> article {
		display: grid;
		gap: 0.5em;
		padding: 1.2em;
	}
}

.article-info {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em clamp(1em, 5%, 1.5em);
	font-size: 0.8em;
	color: var(--c-text-2);

	&:empty {
		display: none;
	}

	.use-updated {
		order: -1;
	}
}

.article-category {
	font-weight: 600;
}

.article-title {
	font-size: 1.2em;
	color: var(--c-text);
	display: flex;
	align-items: center;
	gap: 0.3em;

	.title-icon {
		color: var(--c-primary);
		font-size: 0.7em;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.article-card:hover & .title-icon {
		transform: rotate(180deg) scale(1.3);
	}
}

.article-description {
	font-size: 0.9em;
	color: var(--c-text-2);
	line-height: 1.6;
}

.article-cover {
	position: absolute;
	opacity: 0.45;
	inset-inline-end: 0;
	top: 0;
	width: calc(40% + 2em);
	height: 100%;
	margin: 0;
	mask-image: linear-gradient(to var(--end), transparent, #FFF 60%);
	transition: opacity 0.3s;
	object-fit: cover;
	border-radius: 0 1em 1em 0;

	:hover > & {
		opacity: 0.7;
	}

	& + article {
		position: relative;
		width: 60%;
	}

	@mixin cover-narrow {
		position: revert;
		width: 100%;
		height: auto;
		max-width: none;
		max-height: 256px;
		aspect-ratio: 2.4;
		margin-bottom: -10%;
		mask-image: linear-gradient(#FFF 50%, transparent);
		border-radius: 1em 1em 0 0;

		& + article {
			width: auto;

			> .article-title {
				text-shadow: 0 0 0.2em var(--ld-bg-card), 0 0 0.5em var(--ld-bg-card), 0 0 1em var(--ld-bg-card);
			}
		}
	}

	@media (max-width: $breakpoint-phone) {
		@include cover-narrow;
	}

	@container (max-width: #{$breakpoint-phone}) {
		@include cover-narrow;
	}
}
</style>
