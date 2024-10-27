<script lang="ts">
	import type { TIcon } from '$lib/types';
	import { activeNav } from '$lib/stores';
	import Icon from '../icon.svelte';
	import clsx from 'clsx';

	export let item: TIcon;
	export let isHovered: boolean;

	$: isActive = $activeNav === item.name.toLowerCase();
	$: linkClasses = clsx('group flex items-start space-x-4 p-2', {
		'text-primary-500': isActive && !isHovered,
		'text-current hover:text-primary-500': !(isActive && !isHovered)
	});
	$: underlineClasses = clsx('h-[2px] transition-all duration-500', {
		'w-full bg-primary-500': isActive && !isHovered,
		'w-0 bg-transparent group-hover:w-full group-hover:bg-primary-500': !(
			isActive && !isHovered
		)
	});
</script>

<a href={item.url} class={linkClasses}>
	<Icon color={false} icon={item.icon} height="size-6" />
	<div class=" flex flex-col items-start">
		<span class="font-bold">{item.name}</span>
		<div class={underlineClasses}></div>
	</div>
</a>
