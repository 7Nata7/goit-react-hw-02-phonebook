import css from './ContactList.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ title, contacts, onRemoveContact }) => {
  return (
    <div>
      <h2 className={css.title_next}>{title}</h2>
      {contacts.map(contact => (
        <div className={css.section} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.delete_btn}
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
