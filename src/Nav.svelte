<script lang="ts">
	import NavItem from './NavItem.svelte';

	type NavProp = {
		name: string,
		// html element
		icon?: string,
		href?: string,
		last?: boolean,
		swap?: boolean,
	}

	export let top: NavProp;
	export let items: NavProp[] = [];

	let expanded = false;
</script>

<nav class:expanded>
    <NavItem {...top} on:toggle={()=>expanded=!expanded}/>
    {#each items as item}
        <NavItem {...item}/>
    {/each}
</nav>

<style>
    nav{
        height: 100%;
        background-color: var(--nav-color);
        white-space: nowrap;

        position: fixed;
        top: 0;
        left: 0;
        width: calc(var(--nav-padding) * 2 + var(--icon-size));

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