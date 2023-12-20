import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'lib/index.js'),
			name: 'Test',
			// the proper extensions will be added
			fileName: 'test',
			formats: ['es']
		}
	},
	plugins: [sveltekit()]
});
