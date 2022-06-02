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

	export let top: { [id: string]: NavProp } = {};
	export let bottom: { [id: string]: NavProp } = {};
	export let selected: string;

	[top, bottom].forEach(items => Object.values(items).forEach(item => item.selected = false));

	function topClick(key: string){
		selected = key;
		Object.keys(top).forEach(k => top[k].selected = k == key);
		Object.keys(bottom).forEach(k => bottom[k].selected = false);
	}

	function bottomClick(key: string){
		selected = key;
		Object.keys(top).forEach(k => top[k].selected = false);
		Object.keys(bottom).forEach(k => bottom[k].selected = k == key);
	}
</script>

<nav>
    <div class="top">
        {#each Object.entries(top) as [key, value]}
            <NavItem {...value} {key} on:click="{()=>topClick(key)}"/>
        {/each}
    </div>
    <div class="bottom">
        {#each Object.entries(bottom) as [key, value]}
            <NavItem {...value} {key} on:click={()=>bottomClick(key)}/>
        {/each}
    </div>
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

    nav:hover{
        width: unset;
    }

    nav :global(.text){
        display: none;
    }

    nav:hover :global(.text){
        display: inline;
    }

    nav .top > :global(*:first-child){
        padding-top: var(--nav-padding);
    }

    nav .bottom{
        margin-top: auto;
    }

    nav .bottom > :global(*:last-child){
        padding-bottom: var(--nav-padding);
    }
</style>