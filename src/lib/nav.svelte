<script>
    import CartProgress from '$lib/cartProgress.svelte'
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
    
    export let total;

    const dispatch = createEventDispatcher(); 

    function cartShow() {
		dispatch('message', {
            message: 'cartToggle'
        });
	}

</script>

<header class="bg-base-300 flex flex-row justify-between fixed w-full h-16 top-0 place-items-center z-10">
    <h1> <a class="p-4 font-bold text-lg" href="/">SVELTEKIT ECOMMERCE</a> </h1>

    <div class="flex place-items-center">
        <CartProgress />

        <div>
            <form on:submit|preventDefault={ (e) =>goto('/search/'+e.target.search.value)}>
                <input type="search" name="search" placeholder="Search" class="input input-bordered w-64"/>
            </form>
        </div>


        <button class="btn btn-primary btn-outline font-bold gap-2 m-2" on:click={cartShow}>
            CART
            <div class="badge badge-neutral">{total.quantity}</div>
        </button>
    </div>

    
</header>