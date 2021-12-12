<script lang="ts">
	import NavItem from './NavItem.svelte';

	type NavProp = {
		key: string,
		// html element
		icon?: string,
		href?: string,
		last?: boolean,
		swap?: boolean,
	}

	export let top: NavProp;
	export let items: NavProp[] = [];
	export let selected: string;

	items.forEach(v => v['selected'] = false);
	let expanded = false;

	function onclick(key: string){
		selected = key;
		console.log(key);
		items = items.map(v => ({ ...v, selected: key == v.key }));
	}
</script>

<nav class:expanded>
    <NavItem {...top} onclick={()=>expanded=!expanded}/>
    {#each items as item}
        <NavItem {...item} bind:key={item.key} {onclick}/>
    {/each}
</nav>

<style>
    :global(body){
        margin: 0 0 0 var(--nav-width);
        border: solid 10px white;
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

    nav:not(.expanded) :global(.text){
        display: none;
    }

    nav.expanded, nav:hover{
        width: unset;
    }

    nav:hover :global(.text){
        display: inline;
    }
</style>