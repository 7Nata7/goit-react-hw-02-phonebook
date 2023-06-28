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
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onRemoveContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== contactId),
    });
  };

  onAddContact = (name, number) => {
    if (this.state.contacts.some((contact) => contact.name === name)) {
      this.setState({ alert: true });
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      alert: false,
    }));
  };

  handleFilterChange = (searchQuery) => {
    this.setState({ filter: searchQuery });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.main_section}>
        <ContactForm
          title="Phone Book"
          onAddContact={this.onAddContact}
          contacts={this.state.contacts}
          alert={this.state.alert}
        />

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
