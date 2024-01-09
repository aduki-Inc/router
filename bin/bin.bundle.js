const fs = require('fs').promises;
const path = require('path');
const { ensureDirectory } = require('./bin.dir')
const { build } = require("esbuild");
const { createEntryHtml } = require("./bin.entry");

// Bundle the project entry file
const createBundle = async () => {
	console.log('Bundling and serving the project...');
	
	// Load and bundle code from the current directory
	const absolutePath = path.resolve(process.cwd(), 'index.js');
	const data = await fs.readFile(absolutePath, 'utf-8');
	
	const result = await build({
		stdin: {
			contents: data,
			resolveDir: path.dirname(absolutePath),
			sourcefile: absolutePath,
			loader: 'js',
		},
		bundle: true,
		write: false,
		target: 'es6', // Specify the target as ES6
	});
	
	
	// Call the function to ensure 'dist' directory exists
	ensureDirectory('dist')
		.then(async () => {
			// Write the bundled code to a file
			const outputPath = path.join(process.cwd(), 'dist', 'bundle.js');
			await fs.writeFile(outputPath, result.outputFiles[0].text);
			console.log(`Bundle created at ${outputPath}`);
			// Generate Html File
			await createEntryHtml()
		})
		.catch((err) => {
			console.error('Error creating a bundle file(s)')
			console.error('Error:', err);
		});
}

module.exports = { createBundle }