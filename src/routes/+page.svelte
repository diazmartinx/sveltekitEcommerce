<script lang="ts">
	import type { PageServerData } from './$types';
	import ProductCard from '$lib/productCard.svelte';
	import Breadcrumb from '$lib/breadcrumb.svelte';

	export let data: PageServerData;

	$: breadcrumb = [
		{
			name: 'Home',
			link: '/',
			active: true
		}
	];
</script>

<div>
	<Breadcrumb data={breadcrumb} />

	<section class="grid grid-cols-2">
		{#each data.products.values as p}
			<ProductCard {p} />
		{/each}
	</section>
</div>
