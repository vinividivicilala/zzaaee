<script lang="ts">
	import '../app.css';

	export let data: any = null;
</script>

<svelte:head>
	<title>{data.title}</title>

	{#each data.metadata as { name, property, content }}
		<meta {name} {property} {content} />
	{/each}

	{#each data.preload as { rel, href, as, type, crossorigin }}
		<link {rel} {href} {as} {type} {crossorigin} />
	{/each}

	{#each data.favicon as { rel, href, type, sizes }}
		<link {rel} {href} {type} {sizes} />
	{/each}
</svelte:head>

<slot></slot>
