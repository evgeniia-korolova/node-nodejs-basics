import { join } from 'path';
import { access, writeFile, constants } from 'fs';
import { readdir, mkdir, cp, copyFile } from 'node:fs/promises';

const dirname = import.meta.dirname;
const filePath = join(dirname, 'files');
const filesCopyPath = join(dirname, 'files_copy');



const copy = async () => {
    try {
		const [files] = await Promise.all([
			readdir(filePath),
			mkdir(filesCopyPath),
		]);

		await Promise.all(
			files.map(async (file) => {
				const sourcePath = join(filePath, file);
				const destPath = join(filesCopyPath, file);
				await copyFile(sourcePath, destPath);
			})
		);

		//  coping directory using cp api
		//  await cp(filePath, filesCopyPath, {recursive : true})
	} catch {
		throw new Error('FS operation failed');
	}
};

await copy();
