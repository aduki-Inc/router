const path  = require("path");
const fs = require('fs').promises;
const { ensureDistDirectory } = require("./bin.dir");

// Generate the index.html
// language=HTML
// noinspection HtmlUnknownTarget
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

const createEntryHtml = async () => {
  // Call the function to ensure 'dist' directory exists
  ensureDistDirectory('dist', 'index.html')
    .then(async () => {
      
      // Write the entry html to 'dist' directory
      const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
      await fs.writeFile(htmlPath, htmlContent);
      console.log(`Entry index.html is created at ${htmlPath}`);
    })
    .catch((err) => {
      console.error('Error an entry index.js file')
      console.error('Error:', err);
    });
}

module.exports = { createEntryHtml }