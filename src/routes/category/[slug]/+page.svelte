<script lang="ts">
    import type { PageServerData } from './$types';
    import ProductCard from "$lib/productCard.svelte";
    import Breadcrumb from '$lib/breadcrumb.svelte';
    import { navigating } from '$app/stores';

    export let data: PageServerData;
    
    $: breadcrumb = [
        {
            name: 'Home',
            link: '/',
            active: false
        },
        {
            name: data.category,
            link: '/category/' + data.category,
            active: true
        }
    ];

</script>

<svelte:head>
	<title>{data.category.toLocaleUpperCase()}</title>
    <meta name="description" content="{data.category}">
</svelte:head>

<div> 
    <Breadcrumb data={breadcrumb} />

    <section class="grid grid-cols-2 gap-2 m-2">
        {#each data.products.products as p,index}
            <ProductCard {p} {index}/>
        {/each}
    </section>
</div>