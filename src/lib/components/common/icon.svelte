<script lang="ts">
	import clsx from 'clsx';

	export let color = true;
	export let icon = '';
	export let height = '';
	export let classes = '';

	const colored = color ? 'iconify-color' : 'iconify';
	const iconClasses = clsx(colored, icon, height, classes);
</script>

<span class={iconClasses}></span>
