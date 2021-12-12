<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let name: string;
	export let icon = '';
	export let href = '';
	export let last = false;
	export let swap = false;

	let lock = false;

	function click(){
		dispatch('toggle');
		lock = !lock;
	}
</script>

{#if href}
    <a on:click={click} class:lock class:swap class:last class="{$$props.class}" style="{$$props.style}" {href}>
        {#if icon}
            {@html icon}
        {:else}
            <slot/>
        {/if}
        <span class="text">{name}</span>
    </a>
{:else}
    <div on:click={click} class:lock class:swap class:last class="{$$props.class}" style="{$$props.style}">
        {#if icon}
            {@html icon}
        {:else}
            <slot/>
        {/if}
        <span class="text">{name}</span>
    </div>
{/if}

<style>
    div, a{
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 var(--nav-padding);
        gap: var(--nav-padding);
    }

    div:hover, a:hover, .lock{
        box-shadow: inset 2px 0 0 0 currentColor;
    }

    .swap{
        direction: rtl;
    }

    .last{
        margin-top: auto;
    }

    :first-child{
        padding-top: var(--nav-padding);
    }

    :last-child{
        padding-bottom: var(--nav-padding);
    }
</style>

