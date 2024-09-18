import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  let contacts = await readContacts();
  if (contacts.length > 0) {
    contacts = [];
    await writeContacts(contacts);
  }
  return contacts;
};

removeAllContacts();
