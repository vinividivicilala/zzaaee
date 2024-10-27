<script lang="ts">
	export let title: string = '';
</script>

<div class="flex w-full flex-col items-start justify-center space-y-8">
	<div class="w-full border-b-2 pb-2">
		<h1 class="text-left text-xl font-bold">{title}</h1>
	</div>
	<slot />
</div>
