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

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  create(name, email, phone, category_id) {
    return new Promisse((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      }

      contacts.push(newContact);
      resolve();
    })
  }

  update(id, { name, email, phone, category_id }) {
    return new Promisse((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      }

      contacts = contacts.map((contact)=>{
        contact.id === id ? updatedContact : contact
      })
      resolve(updatedContact);
    })
  }

  delete(id) {
    return new Promisse((resolve) => {
      contacts = contacts.filtes((contact) => contact.id !== id);
      resolve();
    })
  }
}

module.exports = new ContactsRepository();
