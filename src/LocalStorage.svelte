<script lang="ts">
	import JSObject from './JSObject.svelte';

	export let key: string;
	export let tabwidth = 2;
	export let init: { [key: string]: any };

	const { localStorage } = window;
	if(!(key in localStorage)) localStorage.setItem(key, JSON.stringify(init));
	init = JSON.parse(localStorage.getItem(key));

	$: window.localStorage.setItem(key, JSON.stringify(init));
</script>

<div class="{$$props.class}" style="{$$props.style}">
    <JSObject bind:object="{init}" {tabwidth}/>
</div>

<style>
    *{
        user-select: none;
    }
</style>
