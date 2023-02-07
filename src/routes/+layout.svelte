<script lang="ts">
    import type { LayoutServerData } from './$types';
    import Nav from '$lib/nav.svelte'
    import Cart from '$lib/cart.svelte'
    import {cart} from '$lib/stores/cart'
    import "../app.css";   
	import Categories from '$lib/categories.svelte';
    import { navigating } from '$app/stores';
    import Transition from '$lib/transition.svelte';
    import { page } from '$app/stores';

    export let data: LayoutServerData;

    if ($navigating) {
        console.log('navigating');
    }

    // calculate totalPrice and TotalItems in cart
    $: total = $cart.reduce((acc, item) => {
        return {
            quantity: acc.quantity + item.quantity,
            price: acc.price + (item.quantity * item.price)
        }
    }, {quantity: 0, price: 0})

    let cartToggle = false;

</script>

<div class="h-16">
    
</div>
<Nav {total} on:message={ (event) => cartToggle = !cartToggle}/>

{#if cartToggle}
    <Cart {total}/>
{/if}

<div class="grid grid-cols-[200px_minmax(100px,_1fr)] bg-base-100">
    <Categories data={data.categories}/>
    <div class="m-2">
        <Transition url={data.url}>
            <slot></slot>
        </Transition>
    </div>
</div>

