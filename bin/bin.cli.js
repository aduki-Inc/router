const { createBundle } = require('./bin.bundle')
const { serveProject } = require('./bin.serve')
const  { createEntryHtml } = require('./bin.entry')

const runCLI = async () => {
  // Get command & arguments from process
  const [,, command, arg1] = process.argv;
  
  switch (command) {
    case 'start':
      // Get the optional port
      const customPortIndex = process.argv.indexOf('--port') || process.argv.indexOf('-p') || arg1
      const port = customPortIndex !== -1 ? process.argv[customPortIndex + 1] : 8000;
      
      // Generate bundle
      await createBundle()
      
      // Generate Html File
      await createEntryHtml()
      
      //Serving the project
      await serveProject(port)
      
      break;
      
    case 'init':
      if (!arg1) {
        console.error('Please provide a project name!')
        process.exit(1)
      }
      //Generation of project
      console.log('Project created successfully!')
      break;
    
    default:
      console.error(`Unknown command: ${command}`);
      console.log('Available commands: start, init');
      process.exit(1)
      break;
  }
  
}

module.exports = { runCLI }



