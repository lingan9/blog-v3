<script setup lang="ts">
withDefaults(defineProps<{
	tag?: string
}>(), {
	tag: 'div',
})
const appConfig = useAppConfig()
</script>

<template>
<UtilLink class="blog-header">
	<div v-if="appConfig.header.emojiTail" class="emoji-tail">
		<span
			v-for="(emoji, emojiIndex) in appConfig.header.emojiTail"
			:key="emojiIndex"
			class="split-char"
			:style="getFixedDelay(emojiIndex * .6 - 3)"
			v-text="emoji"
		/>
	</div>

	<div class="avatar-wrapper">
		<NuxtImg
			:src="appConfig.header.logo"
			class="blog-logo round-cobblestone"
			:class="{ circle: appConfig.header.showTitle }"
			:alt="appConfig.title"
		/>
		<div class="avatar-ring" />
	</div>

	<div v-if="appConfig.header.showTitle" class="blog-text">
		<component :is="tag" class="header-title">
			<span
				v-for="(char, charIndex) in appConfig.title"
				:key="charIndex"
				class="split-char"
				:style="getFixedDelay((charIndex + 1) * .1)"
				v-text="char"
			/>
		</component>

		<div class="header-subtitle">
			<span class="subtitle-deco">✧ </span>{{ appConfig.header.subtitle }}<span class="subtitle-deco"> ✧</span>
		</div>
	</div>
</UtilLink>
</template>

<style lang="scss" scoped>
.blog-header {
	contain: layout;
	display: flex;
	align-items: center;
	gap: 0.5em;
	position: relative;
	margin: clamp(1rem, 2rem, 5vh) 1rem min(1rem, 5vh);
	line-height: 1.4;
	color: var(--c-text);
	user-select: none;
}

.avatar-wrapper {
	position: relative;
	flex-shrink: 0;
}

.avatar-ring {
	position: absolute;
	inset: -4px;
	border-radius: 50%;
	border: 3px solid transparent;
	background: linear-gradient(135deg, var(--c-primary), var(--c-accent), var(--c-accent-2)) border-box;
	mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	mask-composite: exclude;
	-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	opacity: 0.5;
	transition: opacity 0.4s, transform 0.4s;
	animation: rotate-ring 6s linear infinite;
}

@keyframes rotate-ring {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

.blog-header:hover .avatar-ring {
	opacity: 1;
	animation-duration: 3s;
}

.blog-logo {
	height: 3em;
	position: relative;
	z-index: 1;
	transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

	&.circle {
		width: 3em;
		border-radius: 50%;
		box-shadow: var(--box-shadow-1), var(--box-shadow-3);
	}

	.blog-header:hover & {
		transform: scale(1.08);
	}
}

@font-face {
	font-family: AlimamaFangYuanTi;
	src: url("/fonts/AlimamaFangYuanTi.woff2");
}

.header-title {
	font-family: AlimamaFangYuanTi, "Noto Sans SC", sans-serif;
	font-size: 1.5em;
	font-synthesis: none;
	font-variation-settings: "wght" 600, "BEVL" 100;
	background: linear-gradient(135deg, var(--c-primary), var(--c-accent-2), var(--c-accent));
	background-size: 200% 200%;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: title-shimmer 5s ease infinite;

	> .split-char {
		animation: 3.14s infinite alternate vf-weight, 2.72s infinite alternate vf-bevel;
		animation-delay: var(--delay);
		animation-play-state: paused;
	}
}

@keyframes title-shimmer {
	0%, 100% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
}

.header-subtitle {
	opacity: 0.55;
	font-size: 0.8em;
	font-style: italic;

	.subtitle-deco {
		color: var(--c-primary);
		opacity: 0.5;
	}
}

@keyframes vf-weight {
	0% { font-weight: 600; }
	38.2% { font-weight: 300; }
	100% { font-weight: 900; }
}

@keyframes vf-bevel {
	from { font-variation-settings: "BEVL" 100; }
	to { font-variation-settings: "BEVL" 1; }
}

.emoji-tail {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
	align-content: center;
	justify-items: center;
	position: absolute;
	opacity: 0.12;
	inset: 0;
	font-size: 4rem;
	transition: opacity 1s;
	filter: blur(2px);
	pointer-events: none;
	z-index: -2;

	> .split-char {
		animation: 5s infinite alternate emoji-floating;
		animation-delay: var(--delay);
		animation-play-state: paused;
	}
}

.blog-header:hover {
	.emoji-tail {
		opacity: 0.3;
	}

	.split-char {
		animation-play-state: running;
	}
}

@keyframes emoji-floating {
	50% {
		transform: translate(-12px, -4px) scale(1.2);
		filter: blur(4px);
	}

	100% {
		transform: translate(-4px, -12px) scale(0.9);
		filter: blur(1px);
	}
}
</style>
