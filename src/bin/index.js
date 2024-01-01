#!/usr/bin/env node
const { runCLI } = require('bin.cli')

//Running the cli
runCLI().then(r => {
	console.log('No issues detected')
}).catch(err => {
	console.error('An error occurred:', err)
})