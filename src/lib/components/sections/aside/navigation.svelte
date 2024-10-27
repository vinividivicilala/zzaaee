<script lang="ts">
	import type { TIcon } from '$lib/types';
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import NavigationItem from '$lib/components/common/item/navigation-item.svelte';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import Icon from '$lib/components/common/icon.svelte';
	import clsx from 'clsx';
	import { Utility } from '$lib/types/enums';

	export let data: TIcon[];
	export let id: string;
	export let classes: string = '';

	let isParentHovered: boolean = false;
	let isItemHovered: boolean = false;
	let popupState: boolean = false;

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom',
		state: (e) => (popupState = e.state)
	};

	function handleGroupHover(isEntering: boolean) {
		if (isEntering) {
			isParentHovered = true;
		} else {
			isParentHovered = false;
			isItemHovered = false;
		}
	}
	function handleItemHover(isEntering: boolean) {
		isItemHovered = isEntering;
	}

	$: isHovered = isParentHovered && isItemHovered;
	$: activeClasses = popupState
		? 'text-primary-500 bg-surface-800'
		: 'text-on-surface-token hover:bg-surface-800';
	$: buttonClasses = clsx(
		activeClasses,
		'flex w-fit items-center space-x-2 p-2 shadow-xl rounded-container-token'
	);
</script>

<SectionContainer {id} {classes}>
	<nav class="hidden w-full lg:block">
		<ul
			class="w-fit text-sm uppercase"
			on:mouseenter={() => handleGroupHover(true)}
			on:mouseleave={() => handleGroupHover(false)}
		>
			{#each data as item}
				<li
					on:mouseenter={() => handleItemHover(true)}
					on:mouseleave={() => handleItemHover(false)}
				>
					<NavigationItem {item} {isHovered} />
				</li>
			{/each}
		</ul>
	</nav>
	<nav
		class="bg-surface-backdrop-token fixed right-0 top-0 z-50 flex h-16 w-screen items-center justify-end p-4 lg:hidden"
	>
		<button class={buttonClasses} use:popup={popupFeatured}>
			<Icon color={false} icon={Utility.Menu} height={'size-8'} />
		</button>
		<div
			class="w-fit bg-surface-800 p-4 shadow-xl ring-1 ring-inset ring-white/5 rounded-container-token"
			data-popup="popupFeatured"
		>
			<ul
				class="w-fit text-sm uppercase"
				on:mouseenter={() => handleGroupHover(true)}
				on:mouseleave={() => handleGroupHover(false)}
			>
				{#each data as item}
					<li
						on:mouseenter={() => handleItemHover(true)}
						on:mouseleave={() => handleItemHover(false)}
					>
						<NavigationItem {item} {isHovered} />
					</li>
				{/each}
			</ul>
			<div class="arrow bg-surface-800" />
		</div>
	</nav>
</SectionContainer>
