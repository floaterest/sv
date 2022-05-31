<script lang="ts">
	export let key: string;
	export let icon = '';
	export let href = '';
	export let swap = false;
	export let selected = false;
</script>

{#if href}
    <a class:selected class:swap {href} class="{$$props.class}" style="{$$props.style}" on:click>
        {#if icon}
            {@html icon}
        {:else}
            <slot/>
        {/if}
        <span class="text">{key}</span>
    </a>
{:else}
    <div class:selected class:swap class="{$$props.class}" style="{$$props.style}" on:click>
        {#if icon}
            {@html icon}
        {:else}
            <slot/>
        {/if}
        <span class="text">{key}</span>
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

    div:hover, a:hover, .selected{
        box-shadow: inset 2px 0 0 0 currentColor;
    }

    .swap{
        direction: rtl;
    }
</style>

