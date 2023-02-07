<script>
    import { page } from '$app/stores';
    export let data;

    $: categoryPath = $page.url.pathname.split("/")[2];
</script>
<div></div>
<div class="bg-base-200 w-200 h-[calc(100vh_-_4rem)] overflow-y-auto fixed">
    <ul class="menu bg-base-200 w-200">
        {#each data as category}
            <li class="borered"><a href="/category/{category}" class={category == categoryPath ? "active" : null }>{category}</a></li>
        {/each}
    </ul>
</div>