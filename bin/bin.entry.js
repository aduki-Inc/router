const path  = require("path");
const fs = require('fs').promises;


        <title>Document</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="./bundle.js"></script>
      </body>
    </html>
  `;

// Function to create an entry
const createEntryHtml = async () => {
  // Write the entry html to 'dist' directory
  const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
  fs.writeFile(htmlPath, htmlContent).then(() => {
    console.log(`Entry index.html is created at ${htmlPath}`);
  }).catch(err => {
    console.error('Error creating an entry index.js file', err)
  })
}

module.exports = { createEntryHtml }
