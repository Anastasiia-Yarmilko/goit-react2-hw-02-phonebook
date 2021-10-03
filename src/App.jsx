import './App.css';
import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';


export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  onHandleNewContact = ({ name, number }) => {
    const findDublicate = this.state.contacts.find(
      (contact) => contact.name === name
    );

    if (findDublicate) {
      alert("Такой контакт уже существует!");
    } else {
      const contact = {
        name,
        number,
        id: uuidv4(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  }

  onHandleFilter = filter => {
    this.setState({ filter });
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }

  searchContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.onHandleNewContact}/>
        <h2>Contacts</h2>
        <Filter searchContact={this.onHandleFilter} value={filter}/>
        <ContactList
          deleteContact={this.deleteContact}
          searchContact={this.searchContact()}/>
      </>
    )
  }
}

