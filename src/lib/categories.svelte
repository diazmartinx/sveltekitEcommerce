<script lang="ts">
	import { page } from '$app/stores';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	$: categoryPath = $page.url.pathname.split('/')[2];
</script>

<ul class="menu bg-base-300 w-full ">
	{#each data as category}
		<li class="borered">
			<a href="/category/{category}" class={category == categoryPath ? 'active' : null}
				>{category}</a
			>
		</li>
	{/each}
</ul>
