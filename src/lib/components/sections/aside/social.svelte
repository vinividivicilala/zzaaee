<script lang="ts">
	import type { TIcon } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import SocialItem from '$lib/components/common/item/social-item.svelte';
	import { popup } from '@skeletonlabs/skeleton';

	export let data: TIcon[];
	export let id: string;
</script>

<SectionContainer {id}>
	<nav>
		<ul class="flex space-x-4 text-sm">
			{#each data as item, i}
				<li
					class="w-fit"
					use:popup={{ event: 'hover', target: `popup-${i}`, placement: 'top' }}
				>
					<SocialItem {item} />
					<div
						class="w-fit bg-surface-800 p-2 shadow-xl ring-1 ring-inset ring-white/5 rounded-container-token"
						data-popup={`popup-${i}`}
					>
						<p>{item.name}</p>
						<div class="arrow bg-surface-800" />
					</div>
				</li>
			{/each}
		</ul>
	</nav>
</SectionContainer>
