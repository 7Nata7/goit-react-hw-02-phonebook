import css from './ContactForm.module.css'
import React from "react";
import PropTypes from "prop-types";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };


  render() {
    const { name, number } = this.state;

    return (
      <div>
        <h1 className={css.title_main}>{this.props.title}</h1>
        <form className={css.section} onSubmit={this.handleSubmit}>
          <label>
            <p className={css.label}>Name</p>
            <input
              className={css.input}
              onChange={this.handleInputChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <p className={css.label}>Number</p>
            <input
              className={css.input}
              onChange={this.handleInputChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.add_btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
};