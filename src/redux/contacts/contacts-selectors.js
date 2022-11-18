const getFilterContacts = ({ phoneBook }) => {
  const { contacts, filter } = phoneBook;
  const normalizedFilter = filter.toLocaleLowerCase();
  if (!filter) {
    return contacts;
  }
  const filteredContact = contacts.filter(({ name }) => {
    const normalizedName = name.toLocaleLowerCase();
    const result = normalizedName.includes(normalizedFilter);
    return result;
  });
  return filteredContact;
};

export default getFilterContacts;
