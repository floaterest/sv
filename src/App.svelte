<script lang="ts">
	import Nav from './Nav.svelte';
	import LocalStorage from './LocalStorage.svelte';

	import { config, navs } from './constants';

	import './monokai.css';
	import './icons.css';

	let selected = 'LocalStorage';
</script>

<Nav {...navs} bind:selected/>

<LocalStorage {...config} style="font-family: consolas, monospace"/>
