import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  let contacts = [];
  contacts = await readContacts();
  for (let index = 1; index <= number; index += 1) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }
  await writeContacts(contacts);

  return contacts;
};

generateContacts(5);
