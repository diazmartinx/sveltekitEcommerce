<script>
	import cart from '$lib/stores/cart';

	export let item;
</script>

<div class="font-black text-sm rounded w-fit text-center inline-block bg-base-300 h-8">
	<button
		on:click={cart.removeOne(item.id)}
		class="btn btn-sm  btn-error btn-outline rounded-none rounded-l m-0">&lt;</button
	>

	<div class="inline p-2">{item.quantity}</div>

	<button
		disabled={item.quantity >= item.stock ? true : false}
		on:click={cart.addQuantity(item.id)}
		class="btn btn-sm btn-success btn-outline rounded-none rounded-r m-0">></button
	>
</div>
