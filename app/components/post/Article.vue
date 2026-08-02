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
			<span class="title-text">{{ title }}</span>
			<span class="title-line" />
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
	border-radius: 0.8em;
	border: 1px solid var(--c-border);
	color: var(--c-text);
	animation: float-in 0.3s var(--delay) backwards;
	overflow: hidden;

	/* 左侧装饰条 */
	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 10%;
		height: 80%;
		width: 3px;
		background: linear-gradient(180deg, var(--c-primary), var(--c-accent), var(--c-accent-2));
		border-radius: 0 2px 2px 0;
		opacity: 0;
		transform: scaleY(0);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	&:hover::before {
		opacity: 1;
		transform: scaleY(1);
	}

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
	flex-direction: column;
	gap: 0.3em;

	.title-line {
		display: block;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, var(--c-primary), var(--c-accent));
		border-radius: 1px;
		transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.article-card:hover & .title-line {
		width: 3em;
	}
}

.article-description {
	font-size: 0.9em;
	color: var(--c-text-2);
	line-height: 1.6;
}

.article-cover {
	position: absolute;
	opacity: 0.5;
	inset-inline-end: 0;
	top: 0;
	width: calc(40% + 2em);
	height: 100%;
	margin: 0;
	mask-image: linear-gradient(to var(--end), transparent, #FFF 50%);
	transition: opacity 0.3s;
	object-fit: cover;
	filter: brightness(0.9);

	:hover > & {
		opacity: 0.8;
		filter: brightness(1);
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
