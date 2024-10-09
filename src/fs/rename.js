import { join } from 'path';

import { rename as renamePromisified } from 'node:fs/promises';

const dirname = import.meta.dirname;

const oldFilePath = join(dirname, 'files', 'wrongFilename.txt');
const newFilePath = join(dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
		await renamePromisified(oldFilePath, newFilePath);
	} catch {
		throw new Error('FS operation failed');
	}
};

await rename();