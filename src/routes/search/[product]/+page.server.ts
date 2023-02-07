import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ( {params} ) => {
    const productQuery = params.product;
    // wait 1 second to simulate a slow API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const products = async () => await fetch('https://dummyjson.com/products/search?q='+productQuery).then((res) => res.json());
    return { 
        products: products(),
        productQuery: productQuery
     };
};