<script lang="ts">
	import type { TSkillCategory, TSkillsFormatted } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import ResourceCard from '$lib/components/common/card/resource-card.svelte';

	export let data: TSkillsFormatted;
	export let id: string;

	let categories = Object.keys(data) as TSkillCategory[];
</script>

<SectionContainer {id} let:ContentContainer>
	<ContentContainer title={'Skills'}>
		<div class="flex size-full flex-col space-y-4">
			{#each categories as category}
				<div class="flex h-full w-full flex-col items-start space-y-2">
					<h1 class="font-semibold">{category}:</h1>
					<div class="flex flex-wrap justify-start gap-2">
						{#each data[category] as item}
							<ResourceCard {item} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ContentContainer>
</SectionContainer>
