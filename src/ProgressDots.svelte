<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let count
	export let value = -1
	export let current = -1

	function handleClick(e) {
		const step = parseInt(e.target.dataset.step)
		if (value + 1 >= step) {
			current = step
			dispatch('change', { count, value, current })
		}
	}

	$: steps = Array.from({ length: count }, (_, i) => i)
</script>

<span class="flex gap-1 items-center progress" class:empty={count == 0}>
	{#each steps as step}
		<dot
			class="flex rounded-full mx-1 w-2 h-2 bg-skin-200 step"
			on:click={handleClick}
			data-step={step}
			data-active={step == current}
			data-completed={step <= value}
			data-clickable={step <= value + 1}
		/>
	{/each}
</span>

<style lang="postcss">
	.empty {
		@apply w-full border-b border-primary-500;
	}
	.step[data-clickable='true'] {
		@apply cursor-pointer;
	}
	.step[data-completed='true'] {
		@apply bg-primary-500;
	}
	.step[data-active='true'] {
		@apply mx-0 w-3 h-3 bg-primary-500;
	}
</style>
