import type { TPart } from '$lib/types';
import { Website } from '$lib/types/enums';

export function getUrl(): string {
	return import.meta.env.PROD ? Website.Production : Website.Development;
}

export function getInitials(name: string): string {
	const words = name.trim().split(/\s+/);

	if (words.length === 1) {
		return words[0].charAt(0).toUpperCase();
	}

	const firstWord = words[0];
	const lastWord = words[words.length - 1];

	const initials = firstWord.charAt(0).toUpperCase() + lastWord.charAt(0).toUpperCase();

	return initials;
}

export function parseText(paragraphs: string[]): TPart[] {
	const regex = /\[(.*?)\]\((.*?)\)/g;

	return paragraphs.map((text) => {
		const match = regex.exec(text);
		if (match) {
			return {
				type: 'link',
				url: match[2],
				text: match[1]
			};
		} else {
			return {
				type: 'plain',
				text: text
			};
		}
	});
}
