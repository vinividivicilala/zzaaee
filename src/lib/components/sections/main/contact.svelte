<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import Form from '../../common/form/form.svelte';

	export let id: string;
</script>

<SectionContainer {id} let:ContentContainer>
	<ContentContainer title={'Contact'}>
		<Form />
	</ContentContainer>
</SectionContainer>
