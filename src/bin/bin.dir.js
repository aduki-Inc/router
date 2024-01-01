const fs = require('fs').promises;
const path = require('path');

//Access 'dirPath' directory, create it doesn't if not exists
const accessOrCreateDir = async (pathDir) => {
	try {
		// 'dist' directory exist
		await fs.access(pathDir)
	}
	catch (err) {
		// 'dist' directory doesn't exist, create it
		await fs.mkdir(pathDir);
	}
}

//Determine the directory type and call accessOrCreateDir(pathDir)
const ensureDistDirectory = async (pathName, fileName) => {
	if (fileName) {
		const pathDir = path.join(process.cwd(), pathName, fileName);
		
		//accessing or creating a dir
		return await accessOrCreateDir(pathDir)
	}
	else {
		const pathDir = path.join(process.cwd(), pathName);
		
		//accessing or creating a dir
		return await accessOrCreateDir(pathDir)
	}
 
}

module.exports = { ensureDistDirectory }