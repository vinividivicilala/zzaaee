import type { Config } from 'tailwindcss';
import { addIconSelectors } from '@iconify/tailwind';
import { baseTheme } from './custom-theme';
import forms from '@tailwindcss/forms';
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontSize: {
				'4.5xl': ['2.8rem', { lineHeight: '1' }]
			}
		}
	},
	plugins: [
		addIconSelectors(['devicon', 'mdi', 'logos']),
		forms,
		skeleton({
			themes: {
				custom: [baseTheme]
			}
		})
	]
} satisfies Config;

export default config;
