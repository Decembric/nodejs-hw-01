import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB);
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};
