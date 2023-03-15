import type { LayoutServerLoad } from './$types';
 
export const load: LayoutServerLoad = (async ( {fetch, url} ) => {
  //const categories = async () => await fetch('https://dummyjson.com/products/categories').then((res) => res.json());
  const categories = async () => await fetch('https://sheets.googleapis.com/v4/spreadsheets/1W_HXgTDTzpZQrMVvfTCYzZQIBgAhv7CAHbh5QtT2rlc/values/Categorias!A2:X3000?alt=json&key=AIzaSyDLK3NDEQ2JcuNDsCWb8LhrzobH51LJQnk').then((res) => res.json());
  return { categories: categories(), url: url.pathname };
});