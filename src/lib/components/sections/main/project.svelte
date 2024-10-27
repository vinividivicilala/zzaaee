<script lang="ts">
	import type { TContentFormatted } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import ContentCard from '../../common/card/content-card.svelte';

	export let data: TContentFormatted[];
	export let id: string;
</script>

<SectionContainer {id} let:ContentContainer>
	<ContentContainer title={'Projects'}>
		<ul class="flex w-full flex-col items-start justify-center space-y-4">
			{#each data as item}
				<li class="flex w-full items-center justify-center">
					<ContentCard {item} />
				</li>
			{/each}
		</ul>
	</ContentContainer>
</SectionContainer>
