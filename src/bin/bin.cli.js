const { createBundle } = require('bin.bundle')
const { serveProject } = require('bin.serve')
const  { createEntryHtml } = require('bin.entry')

const runCLI = async () => {
  // Get the optional port from command-line arguments
  const customPortIndex = process.argv.indexOf('--port');
  const port = customPortIndex !== -1 ? process.argv[customPortIndex + 1] : 8000;
  
  // Generate bundle
  await createBundle()
  
  // Generate Entry File
  await createEntryHtml()
  
  //Serving the project
  await serveProject(port)
}

module.exports = { runCLI }



