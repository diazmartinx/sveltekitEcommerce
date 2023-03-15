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

{#if $cart.length > 0}
	<div class="h-[calc(100vh-96px-40px)] overflow-y-auto">
		{#each $cart as item (item.id)}
			<div class="flex flex-row place-items-center justify-between m-1 bg-base-100" transition:fade>
				<div class="flex flex-col gap-1 w-30 p-1">

					<div class="flex text-right justify-between items-center">
						<button class="btn btn-error btn-sm" on:click={cart.remove(item.id)}
							>X</button
						>
						<div class="badge badge-lg badge-neutral block">
							${totalPerItem.find((i) => i.id === item.id).price}
						</div>
					</div>

					<CartControllers {item} />

				</div>

				<div class="w-16">
					<img src={item.images[0]} class="w-full object-cover" alt={item.name}>
				</div>

				<div class="w-40">{item.title}</div>
			</div>
		{/each}
	</div>
	<div class="bg-base-300 p-2">
		<div class="mb-2">
			PRICE: <div class="badge badge-lg badge-neutral">${total.price}</div>
			ITEMS:
			<div class="badge badge-lg badge-neutral">{total.quantity}</div>
		</div>
		<div class="flex justify-between place-items-center">
			<button class="btn btn-sm btn-error btn-outline" on:click={cart.removeAll}>CLEAR CART</button>
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
