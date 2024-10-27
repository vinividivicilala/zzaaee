<script lang="ts">
	import type { TIcon } from '$lib/types';
	import Icon from '../icon.svelte';
	import clsx from 'clsx';

	export let item: TIcon;
	export let iconSize = 'size-6';
	export let textSize = 'text-sm';
</script>

<a
	href={item.url}
	target="_blank"
	class="flex w-fit items-center space-x-2 bg-tertiary-300 p-2 rounded-container-token text-on-tertiary-token hover:bg-tertiary-300/80"
>
	<Icon icon={item.icon} height={iconSize} />
	<span class={clsx(textSize, 'font-bold')}>{item.name}</span>
</a>
