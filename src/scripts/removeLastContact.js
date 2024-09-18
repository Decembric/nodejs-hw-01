import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let contacts = await readContacts();
  const lastContact = contacts[contacts.lenght - 1];
  contacts.pop(lastContact);
  await writeContacts(contacts);
  return contacts;
};

removeLastContact();
