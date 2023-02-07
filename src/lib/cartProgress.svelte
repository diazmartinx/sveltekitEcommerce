<script>
    import { cart } from '$lib/stores/cart'
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

    //calculate total price of cart
    $: total = $cart.reduce((acc, item) => {
        return acc + (item.quantity * item.price)
    }, 0)

    $: $progress = total;

    const max = 10000;
</script>


<div class="m-2">
    {#if total>=10000}
    <div class="alert alert-success shadow-lg p-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Free Shipping Unlock!</span>
        </div>
      </div>
    {:else}
    <div>
        <div class="badge badge-lg badge-neutral">${total}</div>
        {#if total < max/2}
            <progress class="progress progress-error w-56 bg-neutral" value={$progress} max={max}></progress>
        {:else if total < max}
            <progress class="progress progress-warning w-56 bg-neutral" value={$progress} max={max}></progress>
        {:else if total >= max}
            <progress class="progress progress-success w-56 bg-neutral" value={$progress} max={max}></progress>    
        {/if}    
        <div class="badge badge-lg badge-neutral">$10.000</div>
    </div>
    {/if}
</div>