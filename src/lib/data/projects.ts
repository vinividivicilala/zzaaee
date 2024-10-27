import type { TContentRaw } from '$lib/types';
import { getUrl } from '$lib/utils';
import developerPortfolioLogo from '$lib/assets/dev_portfolio_logo.png';

export const projects: TContentRaw[] = [
	{
		src: developerPortfolioLogo,
		alt: 'Developer Portfolio Logo',
		title: 'Developer Portfolio',
		url: getUrl(),
		subtitle: 'Personal Project',
		date: 'Sep 2024',
		info: 'A clear and informative portfolio website highlighting my development skills, professional growth, and notable projects.',
		stack: ['sveltekit', 'typescript', 'tailwindcss'],
		extra: [
			{
				icon: 'github',
				name: 'Source',
				url: 'https://github.com/markadriii/markadriii.github.io'
			}
		]
	}
];
