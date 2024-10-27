<script lang="ts">
	import clsx from 'clsx';
	import ContentContainer from './content-container.svelte';
	import { fade } from 'svelte/transition';

	export let id: string;
	export let classes: string = '';

	let sectionClasses = clsx(classes, 'flex min-h-fit scroll-m-20 items-center justify-center');
</script>

<section {id} class={sectionClasses} transition:fade>
	<slot {ContentContainer} />
</section>
