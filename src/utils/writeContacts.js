import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';
export const writeContacts = async (updatedContacts) => {
    const json = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, json, 'utf-8');
};
