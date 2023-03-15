import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, url }) => {
	const categories = async () =>
		await fetch('https://dummyjson.com/products/categories').then((res) =>
			res.json().then((res) => res.sort())
		);
	return { categories: categories(), url: url.pathname };
};
