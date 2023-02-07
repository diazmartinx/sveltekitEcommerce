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
            name: "'" + data.productQuery + "'",
            link: '/',
            active: true
        }
    ];

</script>

<svelte:head>
	<title>{data.productQuery.toLocaleUpperCase()}</title>
</svelte:head>

<div>
    <Breadcrumb data={breadcrumb} />

    {#if $navigating}
        <h1>Searching '{data.productQuery}'</h1>
    {:else}
    <section class="grid grid-cols-2 gap-2 m-2">
        {#if data.products.products.length == 0}
            <h1>No products found</h1>
        {/if}
        {#each data.products.products as p (p.id)}
            <ProductCard {p} />
        {/each}
    </section>
    {/if}
</div>