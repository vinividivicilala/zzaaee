<script lang="ts">
	import Profile from '$lib/components/sections/aside/profile.svelte';
	import Navigation from '$lib/components/sections/aside/navigation.svelte';
	import Social from '$lib/components/sections/aside/social.svelte';
	import About from '$lib/components/sections/main/about.svelte';
	import Skill from '$lib/components/sections/main/skill.svelte';
	import Experience from '$lib/components/sections/main/experience.svelte';
	import Project from '$lib/components/sections/main/project.svelte';
	import Contact from '$lib/components/sections/main/contact.svelte';
	import Credit from '$lib/components/sections/main/credit.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { scrollActive } from '$lib/utils/scroll';

	export let data: any = null;
	let visible = false;

	onMount(async () => {
		if (data) {
			visible = true;
		}
		window.addEventListener('scroll', scrollActive);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', scrollActive);
		}
	});
</script>

{#if visible}
	<div class="mx-auto grid max-w-screen-xl px-12 md:px-20 lg:grid-cols-2 lg:gap-28 lg:px-36">
		<aside
			class="flex max-h-screen flex-col items-start justify-between pt-20 lg:sticky lg:top-0 lg:py-20"
		>
			<div>
				<Profile id="profile" data={data.profile} classes={'mb-8'} />
				<Navigation id="navigation" data={data.navigations} classes={'relative'} />
			</div>
			<Social id="social" data={data.socials} />
		</aside>
		<main class="space-y-24 py-20">
			<About id="about" data={data.about} />
			<Skill id="skills" data={data.skills} />
			<Experience id="experiences" data={data.experiences} />
			<Project id="projects" data={data.projects} />
			<Contact id="contact" />
			<Credit id="credits" data={data.credits} />
		</main>
	</div>
{/if}
