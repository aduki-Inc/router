#!/usr/bin/env node

const path = require('path');
const fs = require('fs').promises;
const { build } = require('esbuild');
const { spawn } = require('child_process');

async function runCLI(port = 5000) {
  // Get the absolute path of the current script
  const scriptPath = path.resolve(__filename);

  // Placeholder: Your existing functionality to bundle and serve the project
  console.log('Bundling and serving the project...');

  // Example: Load and bundle code from the current directory
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

  const distDir = path.join(process.cwd(), 'dist');

  // Check if 'dist' directory exists, create it if not
  async function ensureDistDirectory() {
    try {
      await fs.access(distDir);
    } catch (err) {
      // 'dist' directory doesn't exist, create it
      await fs.mkdir(distDir);
    }
  }

  let distPath;

  // Call the function to ensure 'dist' directory exists
  ensureDistDirectory()
    .then(async () => {
      // Write the bundled code to a file
      const outputPath = path.join(process.cwd(), 'dist', 'bundle.js');
      await fs.writeFile(outputPath, result.outputFiles[0].text);
      distPath = outputPath
    })
    .catch((err) => {
      console.error('Error:', err);
    });


  // Generate the index.html file with dynamic script injection
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="./bundle.js"></script>
      </body>
    </html>
  `;

  const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
  await fs.writeFile(htmlPath, htmlContent);

  console.log(`Bundle created at ${distPath}`);
  console.log(`index.html created at ${htmlPath}`);

  const serveProcess = spawn('serve', ['-p', port, 'dist']);
  serveProcess.on('error', (error) => {
    console.error('Error spawning serve:', error);
    // errors
  });
}

// Get the optional port from command-line arguments
const customPortIndex = process.argv.indexOf('--port');
const port = customPortIndex !== -1 ? process.argv[customPortIndex + 1] : 5000;

// Run the exported functionality with the specified port
runCLI(port);


