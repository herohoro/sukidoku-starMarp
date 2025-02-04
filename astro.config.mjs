import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '好き Docs',
			social: {
				github: 'https://github.com/herohoro/sukidoku-starMarp',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/01_guides/hello/' },
					],
				},
				{
					label: '交流会の記録',
					items: [
						{ label: '2024-05-18', link: '/02_marp/1th_anime/docs' },
						{ label: '2025-01-25', link: '/02_marp/2th_ohashi/docs' },
					],
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
