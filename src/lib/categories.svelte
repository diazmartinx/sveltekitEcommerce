<script>
	import { page } from '$app/stores';
	export let data;

	$: categoryPath = $page.url.pathname.split('/')[2];
</script>

<div class="bg-base-200 w-full h-full overflow-y-auto">
	<ul class="menu bg-base-200 w-200">
		{#each data as category}
			<li class="borered">
				<a href="/category/{category[1]}" class={category[1] == categoryPath ? 'active' : null}
					>{category[1]}</a
				>
			</li>
		{/each}
	</ul>
</div>
