<script lang="ts">
	import type { TParagraph } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import Paragraph from '$lib/components/common/paragraph.svelte';

	export let data: TParagraph[];
	export let id: string;
</script>

<SectionContainer {id} let:ContentContainer>
	<ContentContainer title={'About me'}>
		<article
			class="flex flex-col items-start justify-center space-y-4 leading-relaxed antialiased"
		>
			{#each data as content}
				<Paragraph {content} classes="text-tertiary-300" />
			{/each}
		</article>
	</ContentContainer>
</SectionContainer>
