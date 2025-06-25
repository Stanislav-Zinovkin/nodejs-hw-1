import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
const generateContacts = async (number) => {
    const contacts = await readContacts();
    const newContacts = Array.from({length: number}, () => createFakeContact());
    const update = [...contacts, ...newContacts];
    await writeContacts(update);
};

generateContacts(5);
