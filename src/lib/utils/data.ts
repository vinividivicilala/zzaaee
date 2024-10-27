import type {
	TContentFormatted,
	TContentRaw,
	TIcon,
	TSkillCategory,
	TSkillsFormatted,
	TSkillsRaw
} from '$lib/types';
import { about } from '$lib/data/about';
import { experiences } from '$lib/data/experiences';
import { navigations } from '$lib/data/navigations';
import { profile } from '$lib/data/profile';
import { projects } from '$lib/data/projects';
import { skills, technologies } from '$lib/data/skills';
import { credits } from '$lib/data/credits';
import { socials } from '$lib/data/socials';
import { metadata } from '$lib/data/metadata';

export function getLayoutData(): any {
	return metadata;
}

export function getPageData(): any {
	const formattedData = {
		profile: profile,
		navigations: navigations,
		socials: socials,
		about: about,
		skills: handleSkills(skills),
		experiences: handleContent(experiences),
		projects: handleContent(projects),
		credits: credits
	};
	return formattedData;
}

function handleIcons(data: string[]): TIcon[] {
	return data.map((key) => technologies[key]);
}

function handleExtraResources(data: TIcon[]): TIcon[] {
	return data.map((item) => ({
		...item,
		icon: technologies[item.icon].icon
	}));
}

function handleSkills(skills: TSkillsRaw): TSkillsFormatted {
	return Object.keys(skills).reduce((formattedSkills, category) => {
		formattedSkills[category as TSkillCategory] = handleIcons(skills[category]);
		return formattedSkills;
	}, {} as TSkillsFormatted);
}

function handleContent(content: TContentRaw[]): TContentFormatted[] {
	return content.map((item) => ({
		...item,
		stack: handleIcons(item.stack),
		extra: handleExtraResources(item.extra)
	}));
}
