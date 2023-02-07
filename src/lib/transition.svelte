<script lang="ts">
    import { fly } from 'svelte/transition';
    export let url: URL;
</script>

{#key url}
<div
>
    <slot />
</div>
    
{/key}