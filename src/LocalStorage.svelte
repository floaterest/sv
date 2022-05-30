<script lang="ts">
	import JSObject from './JSObject.svelte';

	export let key: string;
	export let storage: any = {};

	const { localStorage } = window;
	if(!(key in localStorage)){
		console.log('no storage');
		localStorage.setItem(key, JSON.stringify(storage));
	}
	storage = JSON.parse(localStorage.getItem(key));

	$: window.localStorage.setItem(key, JSON.stringify(storage));
</script>

<div class="{$$props.class}" style="{$$props.style}">
    <JSObject bind:object="{storage}"/>
</div>

<style>
    *{
        user-select: none;
    }
</style>
