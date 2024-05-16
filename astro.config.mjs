import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '好き Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/01_guides/example/' },
					],
				},
				{
					label: '交流会の記録',
					autogenerate: { directory: '02_marp' },
				},
				{
					label: 'horomiの日記',
					autogenerate: { directory: '03_daily' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: '99_reference' },
				},
				
			],
		}),
	],
});
