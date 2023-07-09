import React from "react";
import css from './App.module.css'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-27' },
    ],
    filter: '',
  };

  onRemoveContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== contactId),
    });
  };

  onAddContact = (name, number) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
      )
    ) {
      return alert(`${name} OR ${number} exists in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };


  handleFilterChange = (searchQuery) => {
    this.setState({ filter: searchQuery });
  };

// componentDidMount() {
//   const stringifiedContacts = localStorage.getItem('contacts');
//   const contacts = JSON.parse(stringifiedContacts) ?? [];

//   this.setState({ contacts });
// };

componentDidMount() {
  const stringifiedContacts = localStorage.getItem('contacts');
  const contacts = JSON.parse(stringifiedContacts)
if(contacts ){
 this.setState({ contacts });
}
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
 const stringifiedContacts = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }
}

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.main_section}>
        <ContactForm title="Phone Book" onAddContact={this.onAddContact} />

        <Filter
          title="Find contacts by name"
          onFilterChange={this.handleFilterChange}
        />

        <ContactList
          title="Contacts"
          contacts={filteredContacts}
          onRemoveContact={this.onRemoveContact}
        />
      </div>
    );
  }
}
