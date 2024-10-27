<script lang="ts">
	import type { TIcon } from '$lib/types';
	import Icon from '../icon.svelte';

	export let item: TIcon;
</script>

<a href={item.url} class="flex items-center hover:text-primary-500">
	<Icon color={false} icon={item.icon} height="size-8" />
</a>
