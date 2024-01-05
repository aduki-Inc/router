const fs = require('fs').promises;
const path = require('path');


//Determine the directory type and call accessOrCreateDir(pathDir)
const ensureDirectory = async (pathName) => {
	const pathDir = path.join(process.cwd(), pathName);
	
	try {
		// 'dist' directory exist
		await fs.access(pathDir)
	}
	catch (err) {
		// 'dist' directory doesn't exist, create it
		await fs.mkdir(pathDir);
	}
}


module.exports = { ensureDirectory }