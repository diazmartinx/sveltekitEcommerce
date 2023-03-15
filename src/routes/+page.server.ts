import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const products = async () =>
		await fetch('https://dummyjson.com/products').then((res) => res.json());
	return { products: products() };
};
