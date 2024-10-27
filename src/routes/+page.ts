import type { PageLoad } from './$types';
import { getPageData } from '$lib/utils/data';

export const load: PageLoad = async () => {
	const data = getPageData();
	return data;
};
