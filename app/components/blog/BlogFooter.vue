<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
<footer class="blog-footer">
	<nav class="footer-nav">
		<div v-for="(group, groupIndex) in appConfig.footer.nav" :key="groupIndex">
			<hgroup class="text-creative" v-text="group.title" />
			<menu>
				<li v-for="(item, itemIndex) in group.items" :key="itemIndex">
					<UtilLink :to="item.url">
						<Icon :name="item.icon" />
						<span class="nav-text">{{ item.text }}</span>
					</UtilLink>
				</li>
			</menu>
		</div>
	</nav>
	<p class="copyright" v-html="appConfig.footer.copyright" />
</footer>
</template>

<style lang="scss" scoped>
.blog-footer {
	margin: 3rem 1rem;
	font-size: 0.9em;
	color: var(--c-text-2);
	border-top: 1px solid var(--c-border);
	padding-top: 2.5rem;
	position: relative;

	&::before {
		content: "🌸 ♪ ★ ✿ ♪ ✦";
		position: absolute;
		top: -0.7em;
		left: 50%;
		transform: translateX(-50%);
		padding: 0 1em;
		background: var(--c-bg-1);
		color: var(--c-primary);
		font-size: 0.85em;
		letter-spacing: 0.5em;
		white-space: nowrap;
	}

	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 5vw clamp(2rem, 5%, 5vw);
		padding-block: 2rem;

		hgroup {
			margin: 0.5em;
			color: var(--c-text);
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.3em;
			width: fit-content;
			padding: 0.3em 0.6em;
			border-radius: 0.6em;
			font-size: 0.9em;
			transition: all 0.2s;

			&:hover {
				background-color: var(--c-primary-soft);
				color: var(--c-primary);
			}
		}
	}

	.copyright {
		margin: 0.5em;
		opacity: 0.55;
		font-size: 0.85em;
		text-align: center;
	}
}
</style>
