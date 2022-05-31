<script lang="ts">
	import Nav from './Nav.svelte';
	import LocalStorage from './LocalStorage.svelte';

	import { init } from './constants';

	import './monokai.css';
	import './icons.css';

	const material = (id: string) => `<span class="material-icons">${id}</span>`;
	const bootstrap = (id: string) => `<i class="bi bi-${id}"></i>`;

	const top = {
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
	};
	const bottom = {
		'LocalStorage': {
			icon: material('storage'),
		},
		'GitHub': {
			icon: bootstrap('github'),
			href: 'https://github.com/Floaterest/'
		}
	};
	let selected = 'Games';
</script>

<Nav bind:selected {bottom} {top}/>

<LocalStorage class="local" key="games" storage={init}/>

<style>
    .local{
        font-family: 'consolas', monospace;
    }
</style>
