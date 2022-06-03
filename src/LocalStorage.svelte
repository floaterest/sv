<script lang="ts">
	import JSObject from './JSObject.svelte';

	export let key: string;
	export let tabwidth = 2;
	export let storage: { [key: string]: any };

	const { localStorage } = window;

	if(!(key in localStorage)) localStorage.setItem(key, JSON.stringify(storage));
	storage = JSON.parse(localStorage.getItem(key));

	$: window.localStorage.setItem(key, JSON.stringify(storage));
</script>

<div class="{$$props.class}" style="{$$props.style}">
    <JSObject bind:object="{storage}" {tabwidth}/>
</div>

<style lang="sass">
    @use 'styles/yaml'
    *
        user-select: none

</style>
