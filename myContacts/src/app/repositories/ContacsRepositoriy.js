const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Renan',
    email: 'renan@mail.com',
    phone: "84320832904",
    category_id: v4(),
  }
]
class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promisse((resolve) => {
      contacts = contacts.filtes((contact) => contact.id !== id);
      resolve();
    })
  }
}

module.exports = new ContactsRepository();
