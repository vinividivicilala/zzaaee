import { getUrl } from '$lib/utils';

const name = 'Mark Adrian Escobar';
const title = 'Mark Adrian Escobar | Developer Portfolio';
const description =
	'Mark Adrian Escobar is an enthusiastic developer focused on coding solutions that streamline everyday tasks and improve efficiency.';
const url = getUrl();

export const metadata = {
	title: title,
	// metadata array
	metadata: [
		// common
		{
			name: 'title',
			content: title
		},
		{
			name: 'author',
			content: name
		},
		{
			name: 'keywords',
			content:
				'Mark, Adrian, Escobar, Software Developer, Web Developer, Developer, Portfolio, Coding, Programming'
		},
		{
			name: 'description',
			content: description
		},
		{
			name: 'image',
			content: `${url}/og.png`
		},
		// apple
		{
			name: 'apple-mobile-web-app-title',
			content: name
		},
		// og
		{
			property: 'og:title',
			content: title
		},
		{
			property: 'og:url',
			content: url
		},
		{
			property: 'og:description',
			content: description
		},
		{
			property: 'og:image',
			content: `${url}/og.png`
		},
		{
			property: 'og:type',
			content: 'website'
		},
		// twitter
		{
			property: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			property: 'twitter:site',
			content: '@markadriii'
		},
		{
			property: 'twitter:creator',
			content: '@markadriii'
		},
		{
			property: 'twitter:title',
			content: title
		},
		{
			property: 'twitter:description',
			content: description
		},
		{
			property: 'twitter:url',
			content: url
		},
		{
			property: 'twitter:image',
			content: `${url}/og.png`
		}
	],
	// font preload
	preload: [
		{
			rel: 'preload',
			href: '/fonts/inter/light.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/regular.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/medium.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/semibold.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		},
		{
			rel: 'preload',
			href: '/fonts/inter/bold.woff2',
			as: 'font',
			type: 'font/woff2',
			crossorigin: 'anonymous'
		}
	],
	// favicon links
	favicon: [
		{
			rel: 'icon',
			href: '/favicon/favicon-48x48.png',
			type: 'image/png',
			sizes: '48x48'
		},
		{
			rel: 'icon',
			href: '/favicon/favicon.svg',
			type: 'image/svg+xml'
		},
		{
			rel: 'shortcut icon',
			href: '/favicon/favicon.ico'
		},
		{
			rel: 'apple-touch-icon',
			href: '/favicon/apple-touch-icon.png',
			sizes: '180x180'
		},
		{
			rel: 'manifest',
			href: '/favicon/site.webmanifest'
		}
	]
};
