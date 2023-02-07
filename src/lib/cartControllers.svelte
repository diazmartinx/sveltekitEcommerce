<script>
    import { cart } from '$lib/stores/cart'

    export let item;

</script>

<div class="font-bold bg-base-300 rounded w-fit text-center"> 
          <button on:click={cart.removeQuantity(item.id)} 
          class="btn btn-sm  btn-error rounded-none rounded-l">-</button>

          <span class="w-8 inline-block">{item.quantity}</span>

          <button on:click={cart.addQuantity(item.id, item.stock)} 
          class="btn btn-sm  btn-success rounded-none rounded-r">+</button>
</div>