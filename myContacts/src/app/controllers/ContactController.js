const { response } = require('express');
const ContactsRepository = require('../repositories/ContacsRepositoriy');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const id = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  store() {
    //Criar um registro
  }

  update() {
    //Editar um registro
  }

  delete() {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();