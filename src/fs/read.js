import fs from 'node:fs/promises';
import {join} from 'path';
import path from 'node:path';

const dirname = import.meta.dirname;
const sourceFilePath = path.join(dirname, 'files', 'fileToRead.txt');

const read = async () => {
	try {
		const fileContent = await fs.readFile(sourceFilePath, {encoding:'utf-8'});
		console.log(fileContent);
	} catch (err) {		 
			throw new Error('FS operation failed');
		}
	}


await read();
