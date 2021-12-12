<script lang="ts">
	export let key: string;
	export let icon = '';
	export let href = '';
	export let last = false;
	export let swap = false;
	export let selected = false;
	export let onclick: (key: string) => void;
</script>

{#if href}
    <a on:click={()=>onclick(key)} class:selected class:swap class:last {href}
       class="{$$props.class}" style="{$$props.style}">
        {#if icon}
            {@html icon}
        {:else}
            <slot/>
        {/if}
        <span class="text">{key}</span>
    </a>
{:else}
    <div on:click={()=>onclick(key)} class:selected class:swap class:last
         class="{$$props.class}" style="{$$props.style}">
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

