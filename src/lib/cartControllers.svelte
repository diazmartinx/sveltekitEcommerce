<script>
	import cart from '$lib/stores/cart';

	export let item;
</script>

<div class="font-bold bg-base-300 rounded w-fit text-center">
	<button on:click={cart.removeOne(item.p[0])} class="btn btn-sm  btn-error rounded-none rounded-l"
		>-</button
	>

	<span class="w-8 inline-block">{item.quantity}</span>

	<button
		disabled={item.quantity >= item.stock ? true : false}
		on:click={cart.addQuantity(item.p[0])}
		class="btn btn-sm btn-success rounded-none rounded-r">+</button
	>
</div>
