import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const products = async () => await fetch('https://sheets.googleapis.com/v4/spreadsheets/1W_HXgTDTzpZQrMVvfTCYzZQIBgAhv7CAHbh5QtT2rlc/values/Productos!A2:X3000?alt=json&key=AIzaSyDLK3NDEQ2JcuNDsCWb8LhrzobH51LJQnk').then((res) => res.json());
    return { products: products() };
};