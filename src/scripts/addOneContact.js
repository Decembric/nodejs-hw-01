import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let allContacts = await readContacts();
  let oneContact = createFakeContact();
  allContacts.push(oneContact);
  await writeContacts(allContacts);
};

addOneContact();
