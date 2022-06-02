<script lang="ts">
	import Nav from './Nav.svelte';
	import LocalStorage from './LocalStorage.svelte';
	import JSObject from './JSObject.svelte';

	import { config, navs } from './constants';

	import './monokai.css';
	import './icons.css';

	let selected = 'LocalStorage';
	const components = {
		JSObject,
		LocalStorage
	};

	function c(s: string){
		if(s === 'LocalStorage'){
			return { ...config, style: 'font-family: consolas, monospace;' };
		}else if(s === 'JSObject'){
			return JSON.parse(localStorage.getItem('sv')).JSObject;
		}
	}
</script>

<Nav {...navs} bind:selected/>

<svelte:component {...c(selected)} this="{components[selected]}"/>
