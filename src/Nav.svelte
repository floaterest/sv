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

<style lang="sass">
    @use 'styles/icons'
    @use 'styles/colors'

    $pad: 0.25em
    $width: calc($pad * 2 + icons.$icon-size)
    :global(body)
        margin: 0 0 0 $width
        background: colors.$darkest !important

    nav
        height: 100%
        background: colors.$black
        white-space: nowrap

        position: fixed
        top: 0
        left: 0
        width: $width

        display: flex
        flex-direction: column
        gap: $pad

        &:hover
            width: unset
            :global(.text)
                display: inline
        :global(.text)
            display: none

        .top > :global(*:first-child)
            padding-top: $pad

        .bottom
            margin-top: auto

            & > :global(*:last-child)
                padding-bottom: $pad

    .top, .bottom
        & > :global(div), :global(a)
            user-select: none
            cursor: pointer
            display: flex
            align-items: center
            padding: 0 $pad
            gap: $pad
</style>