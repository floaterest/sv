<script lang="ts">
	import NavItem from './NavItem.svelte';

	type NavProp = {
		// html element
		icon?: string,
		href?: string,
		last?: boolean,
		swap?: boolean,
		selected?: boolean,
	}

	export let items: { [id: string]: NavProp } = {};
	export let selected: string;

	Object.values(items).forEach(item => item.selected = false);

	function onclick(key: string){
		selected = key;
		Object.keys(items).forEach(key => items[key].selected = key === selected);
	}
</script>

<nav>
    {#each Object.keys(items) as key}
        <NavItem {...items[key]} bind:key={key} {onclick}/>
    {/each}
</nav>

<style>
    :global(body){
        margin: 0 0 0 var(--nav-width);
    }

    nav{
        height: 100%;
        background-color: var(--nav-color);
        white-space: nowrap;

        position: fixed;
        top: 0;
        left: 0;
        width: var(--nav-width);

        display: flex;
        flex-direction: column;
        gap: var(--nav-padding);
    }

    nav :global(.text){
        display: none;
    }

    nav:hover{
        width: unset;
    }

    nav:hover :global(.text){
        display: inline;
    }
</style>