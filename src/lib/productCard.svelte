<script lang="ts">
	import CartControllers from './cartControllers.svelte';
	import cart from '$lib/stores/cart';

	export let p: any;

	console.log($cart);

	$: inCart = $cart.find((item) => item.p[0] == p[0]);
</script>

<div class="border w-full h-full p-2 border-neutral bg-base-200">
	<div class="h-64 w-64">
		<h1>{p[1]}</h1>
		<h2>ID: {p[0]}</h2>
		{#if inCart}
			<CartControllers item={inCart} />
		{:else}
			<button class="btn btn-md btn-secondary" on:click={cart.add(p)}>ADD TO CART</button>
		{/if}
	</div>
</div>
