<script lang="ts">
	import Nav from './Nav.svelte';
	import LocalStorage from './LocalStorage.svelte';

	import {init} from './constants';

	import './monokai.css';
	import './icons.css';

	const material = (id: string) => `<span class="material-icons">${id}</span>`;
	const bootstrap = (id: string) => `<i class="bi bi-${id}"></i>`;

	const items = {
		'Games': {
			icon: material('sports_esports'),
			href: '/',
			swap: true,
			style: 'color: var(--accent)'
		},
		'Minesweeper': {
			icon: material('settings_applications')
		},
		'Arithmetic': {
			icon: material('calculate')
		},
		'Flip': {
			icon: material('flip')
		},
		'LocalStorage': {
			icon: material('storage'),
			last: true
		},
		'GitHub': {
			icon: bootstrap('github'),
			last: true,
			href: 'https://github.com/Floaterest/'
		}
	};
	let selected = 'Games';
</script>

<Nav bind:selected {items}/>

<LocalStorage key="games" class="local" storage={init}/>

<style>
    .local{
        font-family: "consolas", monospace;
    }
</style>
