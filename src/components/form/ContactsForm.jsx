

import React, { Component } from 'react';
import s from "./Form.module.css";

class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onAddContact({ name, number }); 
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                <label>Number:</label>
                <input
                    type="tel"
                    id="number"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    required
                />
                <button className={s.buttonSubmit} type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactsForm;