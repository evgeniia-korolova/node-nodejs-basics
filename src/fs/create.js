import {join} from 'path';
import {access, writeFile, constants} from 'fs';
import {writeFile as promisesWriteFile} from 'node:fs/promises';

const dirname = import.meta.dirname;

const filepath = join(dirname, 'files', 'refresh.txt');


const create = async () => {
    try {
        await promisesWriteFile(filepath, "I am fresh and young", {encoding: 'utf-8', flag: 'wx'})
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();