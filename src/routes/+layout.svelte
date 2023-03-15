<script lang="ts">
	import type { LayoutServerData } from './$types';
	import Cart from '$lib/cart.svelte';
	import CartProgress from '$lib/cartProgress.svelte';
	import cart from '$lib/stores/cart';
	import '../app.css';
	import Categories from '$lib/categories.svelte';
	import { navigating } from '$app/stores';
	import Transition from '$lib/transition.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: LayoutServerData;

	if ($navigating) {
		console.log('navigating');
	}

	// calculate totalPrice and TotalItems in cart
	$: total = $cart.reduce(
		(acc, item) => {
			return {
				quantity: acc.quantity + item.quantity,
				price: acc.price + item.quantity * item.price
			};
		},
		{ quantity: 0, price: 0 }
	);

	let cartToggle = false;
</script>

<div class="grid grid-cols-[200px_minmax(100px,_1fr)_400px] bg-base-100">
	<div class="h-screen bg-base-300">
		<h1 class="font-bold text-center p-2 pb-0">SVELTEKIT DEMO</h1>
		<div class="p-2 ">
			<form on:submit|preventDefault={(e) => goto('/search/' + e.target.search.value)}>
				<input
					type="search"
					name="search"
					placeholder="Search"
					class="input input-bordered w-full "
				/>
			</form>
		</div>
		<Categories data={data.categories.values} />
	</div>

	<div class=" h-screen overflow-y-auto">
		<Transition url={data.url}>
			<slot />
		</Transition>
	</div>
	<div class="bg-base-200 h-screen overflow-y-auto flex flex-col justify-between">
		<div class="flex flex-col h-full justify-between place-items-center">
			<CartProgress />
		</div>

		<Cart {total} />
	</div>
</div>
