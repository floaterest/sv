export const config = {
	key: 'sv',
	storage: {
		JSObject: {
			object: {
				key0: 'value',
				key1: 1,
				key2: true,
				key3: [1, 2, 3],
				key4: {
					key5: 'value',
					key6: 1,
					key7: true,
					key8: [1, 2, 3],
				},
			},
			tabwidth: 4,
		},
		array: [
			'value',
			1,
			true,
			[1, 2, 3],
			{
				key5: 'value',
				key6: 1,
				key7: true,
				key8: [1, 2, 3],
			},
		],
	}
};
const material = (id: string) => `<span class="material-icons">${id}</span>`;
const bootstrap = (id: string) => `<i class="bi bi-${id}"></i>`;

export const navs = {
	top: {
		Games: {
			icon: material('sports_esports'),
			swap: true,
			style: 'color: var(--accent)',
			href: '/',
		},
		JSObject: {
			icon: material('code'),
		},
	},
	bottom: {
		LocalStorage: {
			icon: material('storage')
		},
		GitHub: {
			icon: bootstrap('github'),
			href: 'https://github.com/Floaterest/'
		}
	}
};
