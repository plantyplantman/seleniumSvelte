<script lang="ts">
	import Chat from '../../../components/chat.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { index_html, combined_html, name } = data;
</script>

<div class="page">
	<main>
		<h1>{name}</h1>
		<div style="display: flex; justify-content: space-between;">
			<section style="flex: 1; margin-right: 10px; max-height: 100vh; overflow: auto;">
				{@html index_html}
			</section>

			<section style="flex: 1; margin-left: 10px; max-height: 100vh; overflow: auto;">
				{@html combined_html}
			</section>
			<Chat />
		</div>
	</main>
</div>
