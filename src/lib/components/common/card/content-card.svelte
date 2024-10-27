<script lang="ts">
	import type { TContentFormatted } from '$lib/types';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getInitials } from '$lib/utils';
	import Icon from '../icon.svelte';
	import ResourceCard from './resource-card.svelte';
	import { Utility } from '$lib/types/enums';

	export let item: TContentFormatted;
</script>

<div class="group relative rounded-container-token">
	<article class="h-fit space-y-6 px-6 py-4 rounded-container-token hover:bg-primary-500/5">
		<header class="flex items-center space-x-4 transition-all duration-500 sm:space-x-8">
			<div class="sm:w-24 lg:w-fit">
				<Avatar
					src={item.src}
					width="w-12"
					rounded=""
					initials={getInitials(item.title)}
					background="bg-transparent"
				/>
			</div>
			<div class="flex flex-col items-start lg:items-start">
				<a
					href={item.url}
					target="_blank"
					class="flex items-center text-tertiary-300 group-hover:text-primary-500"
					><h2 class="text-base font-semibold sm:text-lg">
						{item.title}<Icon
							color={false}
							icon={Utility.Link}
							classes={'ml-1 transform group-hover:rotate-180 transition-transform duration-700'}
						/>
					</h2>
					<span class="absolute inset-0 z-0 hidden lg:block"></span></a
				>
				<h3 class="text-sm">{item.subtitle}</h3>
			</div>
		</header>
		<section class="space-y-2 sm:ml-32 lg:ml-0">
			<p class="text-xs font-semibold uppercase text-tertiary-300">
				<time>{item.date}</time>
			</p>
			<p class="text-sm leading-relaxed">{item.info}</p>
		</section>
		<footer class="sm:ml-32 lg:ml-0">
			<ul class="flex flex-wrap items-center gap-2">
				{#each item.extra as resource}
					<li class="z-10">
						<ResourceCard item={resource} iconSize={'size-5'} textSize={'text-xs'} />
					</li>
				{/each}
				{#if item.extra.length > 0}
					<div class="h-8 w-0.5 bg-tertiary-300"></div>
				{/if}
				{#each item.stack as skill}
					<li class="z-10">
						<ResourceCard item={skill} iconSize={'size-5'} textSize={'text-xs'} />
					</li>
				{/each}
			</ul>
		</footer>
	</article>
</div>
