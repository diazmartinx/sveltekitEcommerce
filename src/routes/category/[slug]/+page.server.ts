import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ( {params} ) => {
    const category = params.slug;
    const products = async () => await fetch('https://dummyjson.com/products/category/'+category).then((res) => res.json());
    return { 
        products: products(),
        category: category
     };
};