<script lang="ts">
	import { parseText } from '$lib/utils';
	import clsx from 'clsx';

	export let content: string[];
	export let classes: string = '';
</script>

<p>
	{#each parseText(content) as part, index}
		{#if part.type === 'link'}
			<a
				href={part.url}
				class={clsx(classes, 'inline font-semibold hover:text-primary-500')}
				target="_blank"
				rel="noopener noreferrer"
			>
				{part.text}&#8203;
			</a>
		{:else}
			{part.text}
		{/if}
	{/each}
</p>
