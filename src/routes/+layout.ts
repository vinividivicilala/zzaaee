import type { PageLoad } from './$types';
import { getLayoutData } from '$lib/utils/data';
import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
import { storePopup } from '@skeletonlabs/skeleton';

export const load: PageLoad = async () => {
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	const data = getLayoutData();
	return data;
};

export const prerender = true;
