import css from './ContactList.module.css'
import React from "react";
import PropTypes from "prop-types";

export default class ContactList extends React.Component {
  render() {
    return (
      <div >
        <h2 className={css.title_next}>{this.props.title}</h2>
        {this.props.contacts.map((contact) => (
          <div className={css.section} key={contact.id}>
            {contact.name}: {contact.number}
            <button className={css.delete_btn} onClick={() => this.props.onRemoveContact(contact.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
  onRemoveContact: PropTypes.func,
};
