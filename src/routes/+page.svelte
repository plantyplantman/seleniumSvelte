<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div>
		{#each data.feed as section (section.id)}
			<a href="/legislation/{section.id}">
				<h2>{section.name}</h2>
			</a>
		{/each}
	</div>
</main>

<style>
	h2 {
		color: black;
		font: 1em sans-serif;
	}
</style>
