import { activeNav } from '$lib/stores';

export function scrollActive(): void {
	const mainElement: HTMLElement | null = document.querySelector('main');
	const scrollY = window.scrollY;
	const sections: HTMLElement[] = mainElement
		? Array.from(mainElement.querySelectorAll(':scope > section'))
		: [];
	const windowHeight: number = window.innerHeight;
	const documentHeight: number = document.documentElement.scrollHeight;
	const reachedBottom: boolean = windowHeight + scrollY >= documentHeight - 5; // (-5 for accuracy)

	// determine which section is active
	sections.forEach((section, index) => {
		const sectionHeight: number = section.offsetHeight;
		const sectionTop: number = section.offsetTop - 100; // 80px (+20 for accuracy)
		const sectionId: string | null = section.getAttribute('id');

		if (sectionId) {
			// check if the section is in the viewport
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				activeNav.set(sectionId);
			}

			// check if bottom of the page is reached
			if (reachedBottom && index === sections.length - 1) {
				activeNav.set(sectionId);
			}
		}
	});
}
