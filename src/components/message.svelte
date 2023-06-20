<script>
	export let message = {
		role: 'user',
		content: 'Hello, world!'
	};
</script>

<div>
	{#if message.role === 'user'}
		<div class="user">
			{message.content}
		</div>
	{:else}
		<div class="assistant">
			{message.content}
		</div>
	{/if}
</div>

<style>
	div {
		margin-bottom: 0.2em;
		padding: 1em;
		border-radius: 1em;
	}
	.user {
		text-align: right;
		float: right;
		clear: both;
		background-color: #eee;
	}

	.assistant {
		background-color: #ddd;
		text-align: left;
		float: left;
		clear: both;
	}
</style>
