import type { TContentRaw } from '$lib/types';
import dlsuLogo from '$lib/assets/dlsu_logo.png';

export const experiences: TContentRaw[] = [
	{
		src: dlsuLogo,
		alt: 'DLSU Logo',
		url: 'https://www.dlsu.edu.ph/research/research-centers/adric/te3d/',
		title: 'TE3D House',
		subtitle: 'Developer Intern',
		date: 'Sep 2023 – Dec 2023',
		info: 'Restructured and optimized existing conversational flows using Dialogflow CX, refined server-side operations using Python (FastAPI), and utilized JavaScript to automate tasks for improved efficiency.',
		stack: ['dialogflow', 'fastapi', 'python', 'javascript'],
		extra: []
	}
];
