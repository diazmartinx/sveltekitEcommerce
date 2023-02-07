<script lang="ts">
    export let data: [{ name: string, link: string, active: boolean }];
</script>

<div class="text-sm breadcrumbs p-2">
    <ul>
      {#each data as item}
        <li>
          
          {#if item.active}
          <button class="btn btn-outline btn-sm btn-neutral">{item.name}</button>
          {:else}
          <a href={item.link}><button class="btn btn-outline btn-sm btn-secondary">{item.name}</button></a>
          
        {/if}


        </li>
      {/each}
    </ul>
  </div>