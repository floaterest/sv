<script lang="ts">
	import Nav from './Nav.svelte';
	import './monokai.css';
	import './icons.css';

	const material = (id: string) => `<span class="material-icons">${id}</span>`;
	const bootstrap = (id: string) => `<i class="bi bi-${id}"></i>`;

	const top = {
		name: 'Games',
		icon: material('sports_esports'),
		swap: true,
		style: 'color: var(--accent)'
	};
	const items = [
		{
			name: 'Minesweeper',
			icon: material('settings_applications')
		},
		{
			name: 'Arithmetic',
			icon: material('calculate')
		},
		{
			name: 'Flip',
			icon: material('flip')
		},
		{
			name: 'GitHub',
			icon: bootstrap('github'),
			last: true,
			href: 'https://github.com/Floaterest/'
		}
	];
</script>

<Nav {top} {items}/>
