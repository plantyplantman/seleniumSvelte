<script>
	import { useChat } from 'ai/svelte';
	import Message from './message.svelte';
	const { input, handleSubmit, messages } = useChat();
</script>

<section>
	{#each $messages as message}
		<Message {message} />
	{/each}
	<form on:submit={handleSubmit}>
		<input bind:value={$input} />
		<button type="submit">Send</button>
	</form>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	form {
		display: flex;
	}

	input {
		flex: 1;
	}
</style>
