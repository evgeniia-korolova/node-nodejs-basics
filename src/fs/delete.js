import fs, { access, writeFile, constants } from 'fs';
import { join } from 'path';

const dirname = import.meta.dirname;

const filePathToDelete = join(dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.unLink(filePathToDelete)
    } catch(err) {
        throw new Error(`FS operation failed`);
    }
    
};

await remove();