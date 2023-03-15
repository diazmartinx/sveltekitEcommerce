<script>
	import cart from '$lib/stores/cart';
	import CartControllers from './cartControllers.svelte';
	import { fade, slide } from 'svelte/transition';

	export let total;
	// calculate total price per unique item in cart
	$: totalPerItem = $cart.map((item) => {
		return {
			id: item.id,
			price: item.quantity * item.price,
			quantity: item.quantity
		};
	});


</script>

<section class=" p-2 w-full " transition:slide>
	{#if $cart.length > 0}
		<div class="max-h-[calc(100vh/2)] overflow-y-auto">
			{#each $cart as item}
				<div
					class="flex flex-row place-items-center justify-between my-2 p-2 bg-base-100"
					transition:fade
				>
					<button class="btn btn-error btn-outline btn-xs m-2" on:click={cart.remove(item.id)}
						>X</button
					>

					<div class="m-4">{item.title}</div>

					<div class="text-center inline-block">
						<CartControllers {item} />
						<div class="badge badge-lg badge-neutral mt-2">
							${totalPerItem.find((i) => i.id === item.id).price}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div>
			<div>
				TOTAL PRICE: <div class="badge badge-lg badge-neutral">${total.price}</div>
			</div>
			<div class="flex justify-between place-items-center">
				<button class="btn btn-sm btn-error btn-outline" on:click={cart.removeAll}
					>CLEAR CART</button
				>
				<button class="btn btn-success">CHECK OUT</button>
			</div>
		</div>
	{:else}
		<div class="alert alert-error shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>CART EMPTY</span>
			</div>
		</div>
	{/if}
</section>
