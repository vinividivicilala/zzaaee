import type { TParagraph } from '$lib/types';
import { getUrl } from '$lib/utils';

export const about: TParagraph[] = [
	[
		"Hi, I'm ",
		`[Mark Adrian](${getUrl()})`,
		"! I'm enthusiastic about utilizing my skills and technical expertise to contribute to projects. I am eager to learn and grow, embracing new challenges while building meaningful connections in the tech industry."
	],
	[
		'I graduated with a Bachelor of Science in Computer Science, majoring in Software Technology, from ',
		'[De La Salle University - Manila](https://www.dlsu.edu.ph/)',
		' in 2024. Prior to that, I completed the STEM track during my Senior High School years at ',
		'[Darwin International School](https://darwininternationalschool.org.ph/)',
		' in 2019.'
	]
];
