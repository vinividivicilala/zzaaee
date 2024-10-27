<script lang="ts">
	import type { TParagraph } from '$lib/types';
	import Paragraph from '$lib/components/common/paragraph.svelte';

	export let data: TParagraph[];
	export let id: string;
</script>

<footer {id}>
	<article class="space-y-4 text-sm leading-relaxed">
		{#each data as content}
			<Paragraph {content} />
		{/each}
	</article>
</footer>
