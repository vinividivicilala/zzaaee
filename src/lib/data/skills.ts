import type { TIconList, TSkillsRaw } from '$lib/types';
import { Technology } from '$lib/types/enums';

export const skills: TSkillsRaw = {
	Languages: ['c', 'java', 'html5', 'css3', 'javascript', 'typescript', 'python'],
	Frameworks: ['express', 'svelte', 'sveltekit', 'tailwindcss'],
	Databases: ['mysql', 'mongodb', 'firebase'],
	Others: ['nodejs', 'github', 'docker']
};

export const technologies: TIconList = {
	// * Languages
	c: {
		icon: Technology.C,
		name: 'C',
		url: 'https://en.wikipedia.org/wiki/C_(programming_language)'
	},
	java: {
		icon: Technology.Java,
		name: 'Java',
		url: 'https://www.oracle.com/java/'
	},
	html5: {
		icon: Technology.HTML5,
		name: 'HTML5',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
	},
	css3: {
		icon: Technology.CSS3,
		name: 'CSS3',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
	},
	javascript: {
		icon: Technology.JavaScript,
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	typescript: {
		icon: Technology.TypeScript,
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/'
	},
	python: {
		icon: Technology.Python,
		name: 'Python',
		url: 'https://docs.python.org/3/'
	},
	// * Frameworks
	express: {
		icon: Technology.Express,
		name: 'Express',
		url: 'https://expressjs.com/'
	},
	svelte: {
		icon: Technology.Svelte,
		name: 'Svelte',
		url: 'https://svelte.dev/docs/introduction'
	},
	sveltekit: {
		icon: Technology.SvelteKit,
		name: 'SvelteKit',
		url: 'https://kit.svelte.dev/docs/introduction'
	},
	tailwindcss: {
		icon: Technology.TailwindCSS,
		name: 'TailwindCSS',
		url: 'https://tailwindcss.com/docs/installation'
	},
	fastapi: {
		icon: Technology.FastAPI,
		name: 'FastAPI',
		url: 'https://fastapi.tiangolo.com/'
	},
	// * Databases
	mysql: {
		icon: Technology.MySQL,
		name: 'MySQL',
		url: 'https://www.mysql.com/'
	},
	mongodb: {
		icon: Technology.MongoDB,
		name: 'MongoDB',
		url: 'https://www.mongodb.com/'
	},
	firebase: {
		icon: Technology.Firebase,
		name: 'Firebase',
		url: 'https://firebase.google.com/'
	},
	// * Others
	nodejs: {
		icon: Technology.NodeJS,
		name: 'Node.js',
		url: 'https://nodejs.org/en'
	},
	github: {
		icon: Technology.GitHub,
		name: 'GitHub',
		url: 'https://github.com/'
	},
	docker: {
		icon: Technology.Docker,
		name: 'Docker',
		url: 'https://www.docker.com/'
	},
	dialogflow: {
		icon: Technology.Dialogflow,
		name: 'Dialogflow',
		url: 'https://cloud.google.com/dialogflow'
	}
};
