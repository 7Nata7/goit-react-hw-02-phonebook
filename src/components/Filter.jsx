import css from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class Filter extends React.Component {
  handleFilterChange = event => {
    const searchQuery = event.target.value;
    this.props.onFilterChange(searchQuery);
  };

  render() {
    return (
      <div>
        <h2 className={css.filter_name}>{this.props.title}</h2>
        <label>
          <input
            className={css.input}
            type="text"
            onChange={this.handleFilterChange}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
