import type { TIcon } from '$lib/types';
import { Navigation } from '$lib/types/enums';

export const navigations: TIcon[] = [
	{
		icon: Navigation.About,
		name: 'About',
		url: '#about'
	},
	{
		icon: Navigation.Skills,
		name: 'Skills',
		url: '#skills'
	},
	{
		icon: Navigation.Experiences,
		name: 'Experiences',
		url: '#experiences'
	},
	{
		icon: Navigation.Projects,
		name: 'Projects',
		url: '#projects'
	},
	{
		icon: Navigation.Contact,
		name: 'Contact',
		url: '#contact'
	}
];
