<script lang="ts">
	import type { TProfile } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';

	export let data: TProfile;
	export let id: string;
	export let classes: string = '';
</script>

<SectionContainer {id} {classes}>
	<article class="space-y-4 text-left">
		<h1 class="text-4xl font-bold tracking-tight text-tertiary-300 md:text-4.5xl">
			{data.name}
		</h1>
		<h2 class="animate-character text-2xl font-bold">{data.header}</h2>
		<p class="max-w-sm text-base leading-relaxed antialiased">
			{data.info}
		</p>
	</article>
</SectionContainer>

<!-- https://codepen.io/alvarotrigo/pen/PoKMyNO -->
<!-- https://www.joshwcomeau.com/gradient-generator/ -->
<style>
	.animate-character {
		background-image: linear-gradient(
			90deg,
			hsl(325deg 100% 80%) 0%,
			hsl(241deg 100% 88%) 18%,
			hsl(192deg 100% 76%) 26%,
			hsl(180deg 100% 80%) 33%,
			hsl(192deg 100% 84%) 39%,
			hsl(206deg 64% 87%) 44%,
			hsl(225deg 10% 84%) 50%,
			hsl(252deg 43% 85%) 56%,
			hsl(290deg 56% 81%) 61%,
			hsl(325deg 100% 80%) 67%,
			hsl(241deg 100% 88%) 74%,
			hsl(192deg 100% 76%) 82%,
			hsl(180deg 100% 80%) 100%
		);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: textclip 2s linear infinite;
		display: inline-block;
	}

	@keyframes textclip {
		from {
			background-position: 200% center;
		}
	}
</style>
