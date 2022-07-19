import React from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import css from './App.module.css';


import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from 'components/Filter/Filter';
import { nanoid } from "nanoid";

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().min(2, 'Your name is too short').required(),
  number: yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
})

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleSubmit = ({ name, number }, { resetForm }) => {
    const id = nanoid();
    this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ? alert(`${name} is already in contacts`) :
    this.setState(prevState => ({contacts: [...prevState.contacts, {name, number, id}]}))
    resetForm();
  };

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  deleteContact = ( contactId ) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  
  render() {
    const filteredContacts = this.getFilteredContacts();
    
    return (
      <div className={css.container}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <Formik initialValues={this.state} validationSchema={schema} onSubmit={this.handleSubmit}>
          <ContactsForm />
        </Formik>
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={this.filter} changeFilter={this.changeFilter} />
        <ContactsList filteredContacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    )
  }
}