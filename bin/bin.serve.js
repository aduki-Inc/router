const { spawn } = require('child_process');

// Function serving the user project
const serveProject = async (port) => {
	const serveProcess = spawn('serve', ['-p', port, 'dist']);
	
	serveProcess.on('error', (error) => {
		console.error('Serving error:', error);
		// errors
	});

	// Success handling:
	serveProcess.on('exit', (code) => {
		if (code === 0) {
			// console.log('serve exited successfully');
			console.log(`Serving at http://localhost:${port}`);
		} else {
			console.error('Serving error, exited with code:', code);
			// Handle unexpected termination of the process
		}
	});

	// Success handling:
	serveProcess.on('close', () => {
		console.log(`Serving at http://localhost:${port}`);
	});
	
}

module.exports = { serveProject }