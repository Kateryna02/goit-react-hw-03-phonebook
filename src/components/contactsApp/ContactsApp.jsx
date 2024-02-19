

import React, { Component } from "react";
import { nanoid } from "nanoid";

import ContactsForm from '../form/ContactsForm.jsx';
import ContactList from '../contactsList/ContactsList.jsx';
import Filter from '../filter/Filter.jsx';
import s from "./ContactsApp.module.css";

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = (newContact) => {
        const { contacts } = this.state;
        const isContactExists = contacts.some(
            (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        if (isContactExists) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        }

        this.setState((prevState) => ({
            contacts: [...prevState.contacts, { id: nanoid(), ...newContact }]
        }));
    };

    handleDeleteContact = (contactId) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }));
    };

    handleChangeFilter = (e) => {
        this.setState({ filter: e.target.value });
    };

    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );

        return (
            <div className={s.start}>
                <h1>Phonebook</h1>
                <ContactsForm onAddContact={this.addContact} />
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.handleChangeFilter} />
                <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
            </div>
        );
    }
}

export default App;
