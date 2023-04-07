export default class API {

  static updateContact(contactId, body) {
    return fetch(`http://127.0.0.1:8000/api/contacts/${contactId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }).then(res => res.json())
    }

  static deleteContact(contactId, body) {
    return fetch(`http://127.0.0.1:8000/api/contacts/${contactId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    }
}